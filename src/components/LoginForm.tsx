import { useState } from "react";
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password cannot be empty.");
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
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please try again later.");
    }
  };
  return (
    <chakra.form onSubmit={handleSubmit}>
      <Stack spacing="6">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            type="text"
            autoComplete="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};
