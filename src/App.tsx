import * as React from "react"
import {
  ChakraProvider
} from "@chakra-ui/react"
import { Home } from "./features/home"
import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home/>
  </ChakraProvider>
)
