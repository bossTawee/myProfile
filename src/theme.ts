import { extendTheme } from "@chakra-ui/react";

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';


const theme = extendTheme({
  colors: {
    primary: "#f7b49b",
    secondary: "#776ce2"
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;