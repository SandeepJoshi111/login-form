import { Box, Center } from "@chakra-ui/react";
import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Center h="100vh" minW="lg">
      <Box bg={"gray.50"} rounded={"10px"} p={"30px"} w={"500px"}>
        <LoginForm />
      </Box>
    </Center>
  );
};

export default LoginPage;
