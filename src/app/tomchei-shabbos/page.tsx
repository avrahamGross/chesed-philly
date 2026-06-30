import type { Metadata } from "next";
import NextLink from "next/link";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Tomchei Shabbos | Chesed Philly",
  description: "Shabbos grocery food boxes for families in need across Greater Philadelphia.",
};

export default function TomcheiShabbosPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Chesed Philly Tomchei Shabbos"
        description="Shabbos grocery food boxes for those in need."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Tomchei Shabbos helps community members in financial distress purchase food for Shabbos
            and Yom Tov. Families receive support in a way that lets them shop with dignity — so
            they can put appropriate food on the table like everyone else in the community.
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Nobody chooses a financial challenge. When Hashem presents these tests, it is our
            privilege and responsibility to respond with chesed.
          </Text>
          <Box bg="brand.muted" p={6} rounded="xl">
            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Support Tomchei Shabbos
              </Heading>
              <Text color="gray.700">
                Your donation directly helps stock Shabbos tables across Greater Philadelphia.
              </Text>
              <Button asChild alignSelf="start" bg="brand.solid" color="brand.contrast">
                <NextLink href="/donate">Donate today</NextLink>
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
