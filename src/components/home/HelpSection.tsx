import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export function HelpSection() {
  return (
    <Box py={{ base: 14, md: 20 }} bg="gray.50">
      <Container maxW="7xl">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <Box bg="brand.solid" color="brand.contrast" p={{ base: 8, md: 10 }} rounded="xl">
            <Stack gap={4}>
              <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" opacity={0.85}>
                I want to help
              </Text>
              <Heading size="xl">Are you interested in making a donation?</Heading>
              <Text opacity={0.92}>
                The community&apos;s financial support is vital to this mission. Every donor dollar
                more than doubles by the time it reaches someone&apos;s Shabbos table.
              </Text>
              <Button asChild alignSelf="start" bg="accent.solid" color="accent.contrast">
                <NextLink href="/donate">Donate</NextLink>
              </Button>
            </Stack>
          </Box>

          <Box bg="white" borderWidth="1px" p={{ base: 8, md: 10 }} rounded="xl" shadow="sm">
            <Stack gap={4}>
              <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="brand.solid">
                I need help
              </Text>
              <Heading size="xl" color="brand.emphasized">
                Worried you can&apos;t afford to pay your bills?
              </Heading>
              <Text color="gray.600">
                Chesed Philly provides confidential support for families facing financial hardship.
                Reach out to learn about Tomchei Shabbos and other assistance.
              </Text>
              <Button asChild alignSelf="start" variant="outline" borderColor="brand.solid" color="brand.solid">
                <NextLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf4-byqqV5ECWCe3SphFwy_SNhsORJOjYcFPrvifV6aqInY9A/viewform">Apply</NextLink>
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
