import { Box, Card, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { homepageFeatures } from "@/lib/content";

export function MissionSection() {
  return (
    <Box py={{ base: 14, md: 20 }} bg="gray.50">
      <Container maxW="7xl">
        <Stack gap={10} textAlign="center">
          <Stack gap={3} maxW="2xl" mx="auto">
            <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="gold.500" fontWeight="semibold">
              Our mission
            </Text>
            <Heading size="2xl" color="brand.950">
              The middlemen between the hungry & those willing to share
            </Heading>
            <Text color="gray.600" fontSize="lg">
              For years, Chesed Philly has provided weekly food packages and support to neighbors in need, coordinating volunteers, donors, and community partners to serve with dignity.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {homepageFeatures.map((feature) => (
              <Card.Root key={feature.title} borderWidth="1px" shadow="sm" height="full">
                <Card.Body p={6}>
                  <Stack gap={4} h="full">
                    <Heading size="lg" color="brand.950">
                      {feature.title}
                    </Heading>
                    <Text color="gray.600" flex="1">
                      {feature.description}
                    </Text>
                  </Stack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
