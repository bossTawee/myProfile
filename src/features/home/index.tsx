import {
  Box,
  Text,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Hero } from "../../components/hero";
import { Toolbar } from "../../components/toolbar";
import useFetchBlog from "../../hooks/useFetchBlog";
import { FiCodesandbox } from "react-icons/fi";

export const Home = () => {
  const { blogs, fetch } = useFetchBlog();
  
  console.log(blogs);
  useEffect(() => {
    fetch();
    console.log("fetch");
  }, []);

  return (
    <Flex height="100svh" direction="column">
      <Toolbar />
      <Box flex={1} background="gray.50" overflowY="auto">
        <Container maxW="1024px" py={2} pb={16}>
          <Hero />
          <Box height={{ base: "12rem", md: "18rem" }} />

          <Flex direction={{ base: "column", md: "row" }}>
            <Flex direction="row" justify="center" mt={{base: 8, md: 16 }} mb={{base: 8, md: 0 }}>
              <Icon as={FiCodesandbox} fontSize="4xl" mr={2} />
              <Heading size="lg">Portfolio</Heading>
            </Flex>
            <Box width={{base: 0, md: "3rem" }} />
            <Box flex={1} px={4}>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                {[1, 2, 3, 4, 5, 6].map(() => (
                  <Flex direction="column" justify="center">
                    <Box
                      bg="primary"
                      position="relative"
                      width="100%"
                      height="10rem"
                      mt={16}
                      borderRadius={8}
                    >
                      <Flex
                        position="absolute"
                        bottom={0}
                        direction="column"
                        width="100%"
                        p={4}
                        align="center"
                      >
                        <Image
                          width="5rem"
                          src={require("../../assets/images/portfolio/nocnoc_ss.png")}
                        />
                      </Flex>
                    </Box>
                    <Text mt={4} fontWeight={600} textAlign="center">
                      NocNoc Application
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
          {/* <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Profile
              image="https://firebasestorage.googleapis.com/v0/b/profileweb-3bf20.appspot.com/o/images%2FbossProfile.jpg?alt=media&token=301901d8-ce94-458d-a9f3-723d6b36355c"
              flex={1}
              mt={4}
            />
            <Carousel flex={1} mt={4} />
          </Flex> */}
          {/* <Heading size="md" mt={8}>
            Article
          </Heading>
          <VStack spacing={4} mt={4}>
            {blogs && blogs.items.map((item, index) => <Article key={index} />)}
          </VStack> */}
        </Container>
      </Box>
    </Flex>
  );
};
