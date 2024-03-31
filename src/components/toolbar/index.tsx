import { Box, Flex, HStack, Heading, Image } from "@chakra-ui/react"
import cat from "../../assets/images/cat1.jpeg"
export const Toolbar = () => { 
    return (
        <Flex background="gray.50" py={6} px={8}>
            <Heading size="md" fontWeight={800}> BO2S </Heading>
        </Flex>
    )
}