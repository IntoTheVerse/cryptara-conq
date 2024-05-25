/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      pixeled: ['Goblin'],
    },

    screens: {
      xs: '340px',
      sm:	'640px',
      md:	'768px',
      lg:	'1024px',
      xl: '1280px',
      '2xl': '1536px',
      'mobile-landscape': {
        raw: '(orientation: landscape) and (max-height: 400px)'
      }
    },

    cursor : {
      'sword': `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAI5JREFUOI2tU1sOgCAMa4n3vzJ+CKSDDjGxiSZsHeseAB61fdl5oLjAWldusy0XXZFjk8yXgGQFQPSfBpPdNHyqDhOPoYRuNMHDLgkAPD14le7Qe0LEpljZG7uVKklivY40j/EzfinhSKoGK7/AjOYEdg+ydRXZy8g1dXBO5aQ+fQtsO45ssTZr7uVuzgM3U4ZSBqfoAVcAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==), pointer`
    },

    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4.575rem',
        '7xl':  '6.035rem',
        'jumbo': '8.125rem',
      },

      backgroundImage: {
        'lava': "url('./assets/lava.png')",
        'blood': "url('./assets/blood.png')",
        'brick': "url('./assets/brick.png')",
        'dungeonScene': "url('./assets/bg.png')",
        'shrine': "url('./assets/shrine.png')",
        'logo': "url('./assets/game-logo.png')",
        'twitter': "url('./assets/twitter.png')",
        'telegram': "url('./assets/telegram.png')",
        'whitepaper': "url('./assets/whitepaper.png')",
        'discord': "url('./assets/discord.png')",
        'rarible': "url('./assets/rarible.png')",
        'mobile': "url('./assets/mobile.png')"
      },

      colors: {
        'yellow-lace': '#f7941d',
        'white-lace': '#fff'
      },

      textShadow: {
        'pixel-neon': '1px 0px 4px #f7941d, 2px 0px 4px #f7941d, 3px 0px 4px #f7941d, 2px 0px 3px #FBB040, 2px 3px 15px #FBB040, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #FBB040,40px 0vw 200px #FBB040',
      }, 

      boxShadow: {
        'neon': '0 10px 40px -10px #f7941d, 2px 0px 3px #FBB040, 2px 3px 15px #FBB040, 2px 0px 15px, 5px 0px 55px -10px, 20px 0vw 100px -5px #FBB040, 40px 0vw 100px -10px #FBB040',
        'red': '0 10px 40px -10px #f7941d, 2px 0px 3px #FBB040, 2px 3px 15px #FBB040, 2px 0px 15px, 5px 0px 55px -10px, 20px 0vw 100px -5px #FBB040, 40px 0vw 100px -10px #FBB040',
        'blue': '0 10px 40px -10px #4FBAEA, 2px 0px 3px #5393CF, 2px 3px 15px #5393CF, 2px 0px 15px, 5px 0px 55px -10px, 20px 0vw 100px -5px #5393CF, 40px 0vw 100px -10px #5393CF',
        'black-backdrop': '0 20px 40.85px 5.15px rgba(0, 0, 0, 0.55)',
        'white-backdrop': '0 0 15.72px 10.28px rgba(255, 255, 255, 0.58)'
      },

      animation: {
        'flicker-slow': "flicker 5s linear infinite",
        'flicker-fast': "flicker 1s linear infinite",
        'progress-bar': "load 5s normal forwards",
        'running-hustler-xl': "left-to-right-xl 5s normal forwards",
        'running-hustler-xs': "left-to-right-xs 5s normal forwards",
        'running-hustler-lg': "left-to-right-lg 5s normal forwards",
        'running-hustler-mobile-landscape': "left-to-right-mobile-landscape 5s normal forwards",
        'running-hustler-rtl-xl': "right-to-left-xl 7s normal linear forwards",
        'running-hustler-rtl-xs': "right-to-left-xs 7s normal linear forwards",
        'slide-transition-slow': "slide 15s linear infinite",
        'slide-transition-fast': "slide 10s linear infinite",

      },

      keyframes: {
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: .99
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4
          }
        },
        'load': {
          '0%': { width: '10%' },
          '100%': { width: '80%' }
        },
        'left-to-right-xs': {
          from: {
            transform: "translate(0, -4vmin)"
          },
          to: {
            transform: "translate(15.5vmax, -6vmax)",
            height: "9vmax"
          }
        },
        'left-to-right-lg': {
          from: {
            transform: "translate(0, -2vmax)",
            height: "9vmax"
          },
          to: {
            transform: "translate(15.5vmax, -6vmax)",
          }
        },
        'left-to-right-xl': {
          from: {
            transform: "translateX(0)"
          },
          to: {
            transform: "translate(16.825vmax, -7.6vmin)",
            height: "7vmax"
          }
        },
        'left-to-right-mobile-landscape': {
          from: {
            transform: "translate(0, -4vmin)"
          },
          to: {
            transform: "translate(23.275vmax, -6vmax)",
            height: "9vmax"
          }
        },
        'right-to-left-xl': {
          from: {
            transform: "translateX(90vw)",
            height: "7vmax",
          },
          to: {
            transform: "translateX(11.825vw)",
            height: "32vmax",
          }
        },
        'right-to-left-xs': {
          from: {
            transform: "translateX(99vw)",
            height: "7vmax",
          },
          to: {
            transform: "translateX(2.825vw)",
            height: "23vmax",
          }
        },
        'slide': {
          from: {
            transform: "translate(0%)",
          },
          to: {
            transform: "translate(-100%)",
          }
        },
      },

    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'box-shadow': (value) => ({
            boxShadow: value,
          }),
        },
        { values: theme('boxShadow') }
      )
    }),
  ],
}