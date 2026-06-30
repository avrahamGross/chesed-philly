'use client';

import { Box, Card, Container, Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { homepageFeatures } from "@/lib/content";

export function MissionSection() {
  return (
    <Box py={{ base: 14, md: 20 }} bg="brand.emphasized" color="brand.contrast">
      <Container maxW="7xl">
        <Stack gap={10} textAlign="center">
          <Stack gap={3} maxW="2xl" mx="auto">
            <Text fontSize="xl" textTransform="uppercase" letterSpacing="widest" color="gold.500" fontWeight="extrabold">
              Our mission
            </Text>
            <Heading size="2xl" fontWeight="semibold">
              Bringing peace of mind to every Shabbos table
            </Heading>
            <Text fontSize="lg">
              Providing weekly food deliveries with the groceries a family needs for Shabbos and Yom Tov to financially vulnerable households in the Greater Philadelphia Area.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {homepageFeatures.map((feature) => (
              <Card.Root key={feature.title} borderWidth="1px" shadow="sm" height="full">
                <Card.Body p={6}>
                  <Stack gap={4} h="full">
                    <Heading size="lg" color="brand.950">
                      <Icon boxSize={6} color="gold.500" mr={2}>
                        {feature.icon}
                      </Icon>
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
