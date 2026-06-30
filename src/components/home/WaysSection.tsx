import NextLink from "next/link";
import { Box, Button, Card, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { homepageWays } from "@/lib/content";

export function WaysSection() {
  return (
    <Box py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <Stack gap={10} textAlign="center">
          <Stack gap={3} maxW="2xl" mx="auto">
            <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="gold.500" fontWeight="semibold">
              Get involved
            </Text>
            <Heading size="2xl" color="brand.950">
              Three ways to make a difference
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Every contribution matters. Whether you give, volunteer, or reach out for support, your action strengthens our community.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {homepageWays.map((item) => (
              <Card.Root key={item.title} borderWidth="1px" shadow="sm" height="full">
                <Card.Body p={6} display="flex" flexDirection="column" justifyContent="space-between">
                  <Stack gap={4}>
                    <Heading size="lg" color="brand.950">
                      {item.title}
                    </Heading>
                    <Text color="gray.600">{item.description}</Text>
                  </Stack>
                  <Button asChild size="md" mt={6} bg="accent.solid" color="accent.contrast" _hover={{ bg: "gold.600" }}>
                    <NextLink href={item.href}>{item.label}</NextLink>
                  </Button>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
