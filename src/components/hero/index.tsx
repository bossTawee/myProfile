import { Heading, Flex, Box, Image, Text } from "@chakra-ui/react"

export const Hero = () => {
    return (
        <Box
            position="relative"
            width="100%"
            height="300px"
            mt={4}
            borderRadius={24}
            background="primary"
          >
            <Heading size="3xl" position="absolute" top="20%" left="-2rem">
              {"< />"}
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              width="100%"
              position="absolute"
              align="center"
              justify="center"
              bottom={{ base: "-30%", md: "-50%" }}
            >
              <Image
                width="25%"
                src={require("../../assets/images/nb_profile.png")}
              />
              <Flex mx={12} direction="column" justify="center" height="100%">
                <Heading size="2xl">
                  Kritnapit
                  <br />
                  Taweesuwannaporn
                </Heading>
                <Text mt={4} fontSize="xl" color="gray.500">
                  Highly skilled iOS developer with over 5 years of experience.
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              align="center"
              borderRadius={8}
              position="absolute"
              right="-2rem"
              top="40%"
              background="secondary"
              py={4}
              px={6}
            >
              <Heading fontWeight={600} size="lg" color="white">
                120
              </Heading>
              <Text color="whiteAlpha.600">kg</Text>
            </Flex>
          </Box>
    )
}