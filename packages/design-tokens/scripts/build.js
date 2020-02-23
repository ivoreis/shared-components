const minifyDictionary = obj => {
  if (obj.hasOwnProperty('value')) {
    return obj.value
  }
  var toRet = {}
  for (var name in obj) {
    if (obj.hasOwnProperty(name)) {
      toRet[name] = minifyDictionary(obj[name])
    }
  }
  return toRet
}

require('style-dictionary').registerFormat({
  name: 'javascript/module/minified',
  formatter: function(dictionary, config) {
    return `const tokens = ${JSON.stringify(minifyDictionary(dictionary.properties), null, 2)};
export default tokens;
export type Theme = typeof tokens;`
  }
})

const buildTokens = (sourcePattern, outputFilename, outputDir) => {
  const sd = require('style-dictionary').extend({
    source: [sourcePattern],
    platforms: {
      javascript: {
        transformGroup: 'js',
        buildPath: outputDir,
        files: [
          {
            destination: outputFilename,
            format: 'javascript/module/minified'
          }
        ]
      }
    }
  })
  console.log(`Building ${sourcePattern} to ${outputDir}${outputFilename}`)
  sd.buildAllPlatforms()
  console.log('Done\n')
}

buildTokens('properties/base/**/*.json', 'base.ts', 'dist/')
buildTokens('properties/theme1/**/*.json', 'theme1.ts', 'dist/')
