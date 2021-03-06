import Typography from "typography"
import colors from "../globals/colors"

const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.8,
  scaleRatio: 2.4,
  headerFontFamily: ["Bitter", "700"],
  bodyFontFamily: ["Assistant", "400"],
  googleFonts: [
    {
      name: 'Assistant',
      styles: [
        '400',
        '900'
      ],
    },
    {
      name: 'Bitter',
      styles: [
        '400',
        '700'
      ],
    }
  ], 
  overrideStyles: ({scale}, options) => ({
    "@media only screen and (max-width: 768px)": { //TODO Replace with mediaquery
      html: {
        ...scale(1/10),
      },
    },
    "@media only screen and (max-width: 576px)": { //TODO Replace with mediaquery
      html: {
        ...scale(1/12),
      },
    },
    body: {
      color: colors.primaryColor
    },
    a: {
      color: colors.primaryColor
    },
  }),
})

export default typography