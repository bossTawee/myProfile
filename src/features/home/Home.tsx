import { Container, Flex, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Toolbar } from "../../components/toolbar";
import { Profile } from "../../components/profile";
import { Carousel } from "../../components/carousel";
import useFetchBlog from "../../hooks/useFetchBlog";
import { useEffect } from "react";
import { Article } from "../../components/article";



export const Home = () => {
    const { blogs, fetch } = useFetchBlog()
    console.log(blogs)
    useEffect(() => {
        fetch()
        console.log("fetch")
    }, [])
    return (
        <Flex height="100svh" direction="column">
            <Toolbar />
            <Container flex={1} background="gray.100" overflowY="auto" maxW="1024px" py={2}>
                <Flex direction={{ base: 'column-reverse', md: 'row' }}>
                    <Profile
                        image="https://firebasestorage.googleapis.com/v0/b/profileweb-3bf20.appspot.com/o/images%2FbossProfile.jpg?alt=media&token=301901d8-ce94-458d-a9f3-723d6b36355c"
                        flex={1}
                        mt={4}
                    />
                    <Carousel
                        flex={1}
                        mt={4}
                    />
                </Flex>
                <Heading size="md" mt={8}>
                    Article
                </Heading>
                <VStack spacing={4} mt={4}>
                    {blogs &&
                        blogs.items.map((item, index) => (
                            <Article
                                key={index}
                            />
                        ))
                    }

                </VStack>
            </Container>
        </Flex>
    );
};