// @type {import('cspell').CSpellUserSettings}
module.exports = {
  version: '0.2',
  language: 'en',
  dictionaries: ['tech', 'people-names'],
  dictionaryDefinitions: [
    {
      name: 'tech',
      path: './dict/tech.txt',
      addWords: true,
    },
    {
      name: 'people-names',
      path: './dict/people-names.txt',
      addWords: true,
    },
  ],
}
