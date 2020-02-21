const buildPath = 'dist/'

function minifyDictionary(obj) {
  var toRet = {}
  if (obj.hasOwnProperty('value')) {
    return obj.value
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        toRet[name] = minifyDictionary(obj[name])
      }
    }
  }
  return toRet
}

require('style-dictionary').registerFormat({
  name: 'javascript/module/minified',
  formatter: function (dictionary, config) {
    return `const tokens = ${JSON.stringify(minifyDictionary(dictionary.properties), null, 2)};
export default tokens;
export type Theme = typeof tokens;`
  }
})

const StyleDictionaryBase = require('style-dictionary').extend({
  source: ['properties/base/**/*.json'],
  platforms: {
    javascript: {
      transformGroup: 'js',
      buildPath,
      files: [{
        destination: 'base.ts',
        format: 'javascript/module/minified'
      }]
    }
  }
})

const StyleDictionaryTheme = require('style-dictionary').extend({
  source: ['properties/theme1/**/*.json'],
  platforms: {
    javascript: {
      transformGroup: 'js',
      buildPath,
      files: [{
        destination: 'theme1.ts',
        format: 'javascript/module/minified'
      }]
    }
  }
})

console.log('Cleaning...')
StyleDictionaryBase.buildAllPlatforms()
StyleDictionaryTheme.buildAllPlatforms()
console.log('\n\nBuilding...')
StyleDictionaryBase.buildAllPlatforms()
StyleDictionaryTheme.buildAllPlatforms()
