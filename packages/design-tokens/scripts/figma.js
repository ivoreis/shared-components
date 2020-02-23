const fetch = require('node-fetch')

/* Helpers */
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x) // Left to right eval
const flatten = (acc, v) => ({
  ...acc,
  ...v
})
const find = name => doc => doc.find(c => c.name == name)
/* Selectors */
const selectChildren = doc => doc.children
const selectDocument = doc => doc.document
const selectFillColour = doc => doc.fills[0].color
/* Convertors */
const convertRGBAToString = doc => `rgba(${doc.r * 255}, ${doc.g * 255}, ${doc.b * 255}, ${doc.r * 255}, ${doc.a})`
/* Extractors */
const extractRGBA = compose(convertRGBAToString, selectFillColour, find('Colour'), selectChildren)
const extractPalette = compose(selectChildren, find('Palette'), selectChildren, find('Styles'))

const reduceColour = (acc, colour) => ({
  ...acc,
  ...{
    [colour.name]: extractRGBA(colour)
  }
})
const colourMapper = palette => ({
  [palette.name]: selectChildren(palette).reduce(reduceColour, {})
})

const generatePalette = doc =>
  extractPalette(doc)
  .map(colourMapper)
  .reduce(flatten, {})

async function getStylesArtboard(figmaApiKey, figmaId) {
  if (!figmaApiKey || !figmaId) {
    return Promise.reject('Please provide valid FIGMA_TOKEN and FIGMA_ID')
  }

  const result = await fetch('https://api.figma.com/v1/files/' + figmaId, {
    method: 'GET',
    headers: {
      'X-Figma-Token': figmaApiKey
    }
  })
  const figmaTreeStructure = await result.json()

  return {
    token: {
      grids: {},
      spacers: {},
      colors: {
        base: compose(generatePalette, selectChildren, selectDocument)(figmaTreeStructure)
      },
      fonts: {}
    }
  }
}

;
(async () => {
  try {
    const result = await getStylesArtboard(process.env.FIGMA_TOKEN, process.env.FIGMA_ID)
    console.log(JSON.stringify(result))
  } catch (error) {
    console.log(error)
  }
})()
