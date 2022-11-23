import {
  Box,
  Container,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="#539559" color="whiteAlpha.900" data-testid="footer">
      <Container as={Stack} maxW="6xl" py={3}>
        <Stack py={2}>
          <Text fontSize="lg" textAlign="center" fontWeight={800}>
            Green AI
          </Text>
          <Text>An initiative to modernize agriculture everywhere</Text>
          <Text>Made with Love by team Farmers Solutions</Text>
        </Stack>
      </Container>
    </Box>
  );
}
