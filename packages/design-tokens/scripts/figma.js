const fetch = require('node-fetch')

const selectStyles = document => document.find(c => c.name === 'Styles')
const selectPalette = styles => styles.find(c => c.name === 'Palette')
const extractRGBA = obj => `rgba(${obj.r * 255}, ${obj.g * 255}, ${obj.b * 255}, ${obj.r * 255}, ${obj.a})`
const selectColour = colorShape => colorShape.find(c => c.name === 'Colour').fills[0].color
const reduceColour = (acc, colour) => ({
  ...acc,
  ...{
    [colour.name]: extractRGBA(selectColour(colour.children))
  }
})
const mapColour = palette => ({
  [palette.name]: palette.children.reduce(reduceColour, {})
})
const flattenColour = (acc, v) => ({
  ...acc,
  ...v
})
const generatePalette = document => (
  selectPalette(
    selectStyles(document).children
  ).children
  .map(mapColour)
  .reduce(flattenColour, {})
)

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
        base: generatePalette(figmaTreeStructure.document.children)
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
