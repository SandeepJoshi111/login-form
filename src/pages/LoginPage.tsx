import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      overflow="hidden"
      minH="100vh"
      height="100%"
      bg={"gray.50"}
    >
      {/* Display the left content of the Login Page */}
      <Box
        maxH="100vh"
        overflow="hidden"
        flex="1"
        bg="blue.600"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          mt="6"
          fontWeight="extrabold"
          fontSize={{ base: "40", lg: "65" }}
          maxW="sm"
          letterSpacing="tight"
          lineHeight="normal"
        >
          Welcome Back!
        </Text>
      </Box>
      {/* Display the right content of the Login Page */}
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={{ base: "6", md: "10" }}
      >
        <Box maxW="sm" mx="auto">
          <Box textAlign="center" mb={{ base: "10", md: "16" }}>
            <Heading
              as="h1"
              size="xl"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Log in to your account
            </Heading>
          </Box>
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
