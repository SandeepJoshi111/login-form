import { Box, chakra } from "@chakra-ui/react";

const WelcomePage = () => {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 32,
          }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            maxW={{
              base: "7xl",
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              textAlign="center"
              w={{
                base: "full",
                md: 11 / 12,
                xl: 8 / 12,
              }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "6xl",
                }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
                _dark={{
                  color: "white",
                }}
              >
                <chakra.span
                  display={{
                    base: "block",
                    xl: "inline",
                  }}
                >
                  WELCOME
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                mx={{
                  sm: "auto",
                  lg: 0,
                }}
                mb={6}
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
                color="gray.500"
                lineHeight="base"
              >
                This is the completed assessment
              </chakra.p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomePage;
