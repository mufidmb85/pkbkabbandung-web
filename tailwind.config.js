import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#fafafa",
              "100": "#f2f2f3",
              "200": "#ebebec",
              "300": "#e3e3e6",
              "400": "#dcdcdf",
              "500": "#d4d4d8",
              "600": "#afafb2",
              "700": "#8a8a8c",
              "800": "#656567",
              "900": "#404041",
              "foreground": "#000",
              "DEFAULT": "#d4d4d8"
            },
            "primary": {
              "50": "#dfeceb",
              "100": "#b3d2cf",
              "200": "#86b8b3",
              "300": "#599e98",
              "400": "#2d847c",
              "500": "#006a60",
              "600": "#00574f",
              "700": "#00453e",
              "800": "#00322e",
              "900": "#00201d",
              "foreground": "#fff",
              "DEFAULT": "#006a60"
            },
            "secondary": {
              "50": "#eeeae1",
              "100": "#d6ceb6",
              "200": "#beb18b",
              "300": "#a79460",
              "400": "#8f7736",
              "500": "#775a0b",
              "600": "#624a09",
              "700": "#4d3b07",
              "800": "#392b05",
              "900": "#241b03",
              "foreground": "#fff",
              "DEFAULT": "#775a0b"
            },
            "success": {
              "50": "#f5f8fc",
              "100": "#e6eff8",
              "200": "#d8e6f3",
              "300": "#caddef",
              "400": "#bbd3ea",
              "500": "#adcae6",
              "600": "#8fa7be",
              "700": "#708396",
              "800": "#52606d",
              "900": "#343d45",
              "foreground": "#000",
              "DEFAULT": "#adcae6"
            },
            "warning": {
              "50": "#fef4e4",
              "100": "#fce4bd",
              "200": "#fad497",
              "300": "#f9c571",
              "400": "#f7b54a",
              "500": "#f5a524",
              "600": "#ca881e",
              "700": "#9f6b17",
              "800": "#744e11",
              "900": "#4a320b",
              "foreground": "#000",
              "DEFAULT": "#f5a524"
            },
            "danger": {
              "50": "#f6e2e2",
              "100": "#eababa",
              "200": "#de9292",
              "300": "#d26a6a",
              "400": "#c64242",
              "500": "#ba1a1a",
              "600": "#991515",
              "700": "#791111",
              "800": "#580c0c",
              "900": "#380808",
              "foreground": "#fff",
              "DEFAULT": "#ba1a1a"
            },
            "background": "#ffffff",
            "foreground": {
              "50": "#dfdfdf",
              "100": "#b3b3b3",
              "200": "#868686",
              "300": "#595959",
              "400": "#2d2d2d",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              "foreground": "#fff",
              "DEFAULT": "#000000"
            },
            "content1": {
              "DEFAULT": "#ffffff",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#f4f4f5",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#e4e4e7",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#d4d4d8",
              "foreground": "#000"
            },
            "focus": "#006FEE",
            "overlay": "#000000",
            "divider": "#111111"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#141417",
              "100": "#232327",
              "200": "#313136",
              "300": "#3f3f46",
              "400": "#6a6a70",
              "500": "#959599",
              "600": "#c1c1c3",
              "700": "#ececed",
              "foreground": "#fff",
              "DEFAULT": "#313136"
            },
            "primary": {
              "50": "#2a4541",
              "100": "#48756e",
              "200": "#65a59b",
              "300": "#82d5c8",
              "400": "#9eded4",
              "500": "#bae8e1",
              "600": "#d6f1ed",
              "700": "#f3fbfa",
              "foreground": "#000",
              "DEFAULT": "#65a59b"
            },
            "secondary": {
              "50": "#4c3f23",
              "100": "#806a3b",
              "200": "#b59654",
              "300": "#e9c16c",
              "400": "#eecf8d",
              "500": "#f3ddae",
              "600": "#f8ebcf",
              "700": "#fdf9f0",
              "foreground": "#000",
              "DEFAULT": "#b59654"
            },
            "success": {
              "50": "#38424b",
              "100": "#5f6f7f",
              "200": "#869db2",
              "300": "#adcae6",
              "400": "#bfd6ec",
              "500": "#d2e2f1",
              "600": "#e4eef7",
              "700": "#f7fafd",
              "foreground": "#000",
              "DEFAULT": "#869db2"
            },
            "warning": {
              "50": "#50360c",
              "100": "#875b14",
              "200": "#be801c",
              "300": "#f5a524",
              "400": "#f7b955",
              "500": "#face87",
              "600": "#fce2b8",
              "700": "#fef6e9",
              "foreground": "#000",
              "DEFAULT": "#be801c"
            },
            "danger": {
              "50": "#533a38",
              "100": "#8c635e",
              "200": "#c68c85",
              "300": "#ffb4ab",
              "400": "#ffc5be",
              "500": "#ffd6d1",
              "600": "#ffe7e4",
              "700": "#fff8f7",
              "foreground": "#000",
              "DEFAULT": "#c68c85"
            },
            "background": "#000000",
            "foreground": {
              "50": "#535353",
              "100": "#8c8c8c",
              "200": "#c6c6c6",
              "300": "#ffffff",
              "400": "#ffffff",
              "500": "#ffffff",
              "600": "#ffffff",
              "700": "#ffffff",
              "foreground": "#000",
              "DEFAULT": "#c6c6c6"
            },
            "content1": {
              "DEFAULT": "#18181b",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#27272a",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#3f3f46",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#52525b",
              "foreground": "#fff"
            },
            "focus": "#006FEE",
            "overlay": "#ffffff",
            "divider": "#ffffff"
          }
        }
      },
      "layout": {
        "fontSize": {
          "tiny": "0.75rem",
          "small": "0.875rem",
          "medium": "1rem",
          "large": "1.125rem"
        },
        "lineHeight": {
          "tiny": "1rem",
          "small": "1.25rem",
          "medium": "1.5rem",
          "large": "1.75rem"
        },
        "radius": {
          "small": "0.5rem",
          "medium": "0.75rem",
          "large": "0.875rem"
        },
        "borderWidth": {
          "small": "1px",
          "medium": "2px",
          "large": "3px"
        },
        "disabledOpacity": "0.5",
        "dividerWeight": "1",
        "hoverOpacity": "0.9"
      }
    }
  )],
}
