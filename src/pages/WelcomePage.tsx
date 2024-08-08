import {
  Box,
  Button,
  Center,
  Heading,
  LightMode,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Box
      as="section"
      bg="gray.800"
      py="12"
      position="relative"
      h="100vh"
      bgImage="/images/background.jpg"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: "block",
        w: "full",
        h: "full",
        bg: "blackAlpha.700",
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center
          flexDirection="column"
          textAlign="center"
          color="white"
          h="full"
        >
          <Heading size="3xl" fontWeight="extrabold">
            Welcome Page
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3">
            The emptiness here, serves as the completion of the given
            assignment.
          </Text>
          <LightMode>
            <Link to="/">
              <Button
                colorScheme="blue"
                size="lg"
                mt="6"
                fontWeight="bold"
                fontSize="md"
              >
                Log Out
              </Button>
            </Link>
          </LightMode>
        </Center>
      </Box>
    </Box>
  );
};

export default WelcomePage;
