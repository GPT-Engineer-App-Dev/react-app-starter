import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your React App</Text>
        <Text>This is a clean and minimal setup. Start building your application here.</Text>
      </VStack>
    </Container>
  );
};

export default Index;