import { Box, HStack, Heading, Image } from "@chakra-ui/react"
import cat from "../../assets/images/cat1.jpeg"
export const Toolbar = () => { 
    return (
        <HStack height={16} background="gray.50" padding={2} spacing={4}>
            <Image src={cat} height="100%"/>
            <Heading size="md"> NB </Heading>
        </HStack>
    )
}