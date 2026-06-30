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
    <Box  py={{ base: 10, md: 16 }} bg="gray.50">
      <Container maxW="7xl">
        <Stack gap={10} textAlign="center">
          <Stack gap={3}>
            <Heading size="2xl">Lasting impact begins with you</Heading>
            <Text fontSize="lg" opacity={0.9} maxW="2xl" mx="auto">
              Every donor dollar more than doubles by the time it reaches someone's Shabbos table.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
            {impactStats.map((stat) => (
              <Stack key={stat.label} gap={2} borderWidth="1px" borderColor="gray.200" rounded="10%" p={3} shadow="xs">
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
