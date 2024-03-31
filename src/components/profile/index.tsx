import { Flex, Image, Text, Heading, Box, BoxProps } from "@chakra-ui/react"
import React from "react";

interface Props extends BoxProps {
    image: string;
}

export const Profile: React.FC<Props> = ({ image, ...props }: Props) => {
    return( 
        <Flex direction="column" {...props}>
            <Image 
                boxSize='100px'
                src={image}
                borderRadius="full"
            />
            <Heading
                fontSize="lg"
                pt="4"
            >
                Kritnapit Taweesuwannaporn
            </Heading>
            <Text 
                fontSize="md"
                color="gray.400"
            >
                Boss tawee
            </Text>
        </Flex>
    )
}