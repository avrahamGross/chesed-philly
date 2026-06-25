import {
  Box,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { impactStats } from "@/lib/content";

export function ImpactSection() {
  return (
    <Box py={{ base: 14, md: 20 }} bg="brand.emphasized" color="brand.contrast">
      <Container maxW="7xl">
        <Stack gap={10} textAlign="center">
          <Stack gap={3}>
            <Heading size="2xl">Lasting impact begins with you</Heading>
            <Text fontSize="lg" opacity={0.9} maxW="2xl" mx="auto">
              With your help, families across Greater Philadelphia receive the nourishment and
              support they need — with dignity.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {impactStats.map((stat) => (
              <Stack key={stat.label} gap={2}>
                <Text fontSize={{ base: "5xl", md: "6xl" }} fontWeight="bold" color="gold.300">
                  {stat.value}
                </Text>
                <Text fontSize="lg" opacity={0.9}>
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
