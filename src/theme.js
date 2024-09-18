import "@fontsource/source-sans-pro"
import "@fontsource/cardo"
import "@fontsource/titillium-web";
import "@fontsource/oxygen";
import {extendTheme} from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}
const content = {
  imageBgUrl: 'https://drive.google.com/uc?export=view&id=1epmZIOAFAjyHhWppDDKGeup4IWRm-NV7',
  imageBgUrl2: 'https://drive.google.com/uc?export=view&id=1JSFpRdY3U6CKTnKyYyGLKqT4ZV60oKHF',
}
const theme = extendTheme({
  config,
  components: {
    CustomBadge: {
      baseStyle: ({ colorMode }) => ({
        backgroundSize: "cover",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: colorMode === 'dark' ? 'url(' + content.imageBgUrl + ')' : 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(' + content.imageBgUrl + ')',
      }),
    },
  },
  fonts: {
    body: "Cardo",
      heading: "Cardo",
      mono: "Titillium"
  },
  colors: {
    chakra: {
        10: "#F4F4F4",
        20: "#000000",
      100: "#748CA0",
      200: "#CCA7A5",
      300: "#81918A",
      400: "#b5bdcb",
      500: "#58a398",
      600: "#d5b795",

    },
  },
});

export default theme;