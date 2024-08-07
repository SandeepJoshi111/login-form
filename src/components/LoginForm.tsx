import { useState } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const showToast = useShowToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      showToast(
        "Attention",
        "Username or Password cannot be empty.",
        "warning"
      );

      return;
    }

    try {
      const response = await fetch("https://login.dataconstruct.com.np/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // Log the response for debugging
      console.log("API Response:", response);

      // Check the structure of the response
      if (response.ok) {
        navigate("/welcome");
        showToast("Success", "Login Successfull", "success");
      } else {
        showToast("Error", "Invalid username or password", "error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      showToast("Error", "Login failed. Please try again later.", "error");
    }
  };
  return (
    <chakra.form onSubmit={handleSubmit}>
      <Stack spacing="6">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            size="lg"
            name="username"
            type="text"
            autoComplete="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            fontSize="md"
          />
          <FormLabel>Password</FormLabel>
          <Input
            size="lg"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            fontSize="md"
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};
