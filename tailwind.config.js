/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'davis-grey-dark': '#454360',
        'davis-grey-light': '#F7FAFC',
        'davis-red': '#FE4C5F',
        'davis-red-light': 'rgba(254,76,95,0.25)',
        'davis-purple': '#6C6DE5',
        'davis-purple-light': 'rgba(108,109,229,0.25)',
        'davis-orange': '#FAAB1D',
        'davis-orange-light': 'rgba(250,171,29,0.25)'
      },
      scale: {
        '115': '1.15'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
