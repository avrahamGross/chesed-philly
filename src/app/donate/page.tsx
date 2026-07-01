import type { Metadata } from "next";
import { Box, Container, Flex, Grid, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { DonatePageContent } from "@/components/donate/DonatePageContent";
import { DonationMethods } from "@/components/donate/DonationMethods";
import { PageHero } from "@/components/layout/PageHero";

const SUPPORTED_FAMILIES = [
  "Cohen Family",
  "Goldstein Family",
  "Rosenberg Family",
  "Levine Family",
  "Feldman Family",
  "Katz Family",
  "Silverman Family",
  "Rosen Family",
  "Blumenthal Family",
  "Schwartz Family",
  "Hoffman Family",
  "Weinstein Family",
  "Shapiro Family",
  "Bernstein Family",
  "Greenberg Family",
  "Fineman Family",
  "Schreiber Family",
  "Meltzer Family",
  "Horowitz Family",
  "Eisenberg Family",
  "Rothstein Family",
  "Brenner Family",
  "Feldstein Family",
  "Kramer Family",
  "Steinberg Family",
  "Hertz Family",
  "Berman Family",
  "Segal Family",
  "Kellerman Family",
  "Davidson Family",
];

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Chesed Philly's mission. Every donor dollar more than doubles by the time it reaches someone's Shabbos table.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support Chesed Philly"
        title="Donate"
        description="The community's financial support is vital to this mission. Every donor dollar more than doubles by the time it reaches someone's Shabbos table."
      />

      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        <Stack gap={12}>
          {/* Top Section: Left - Giving Options, Right - Donation Methods */}
          <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={10} alignItems="start">
            {/* Left Column: Giving Options */}
            <DonatePageContent />

            {/* Right Column: Donation Methods */}
            <DonationMethods />
          </Grid>

          <Separator my={4} />

          {/* Families Section */}
          <Stack gap={6}>
            <Box bg="brand.muted" p={6} rounded="xl">
              <Flex gap={3} alignItems="center">
                <Heading size="2xl" color="brand.emphasized">
                  Thank you to Our Chesed Philly Family Sponsors
                </Heading>
              </Flex>
              <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={13}>
                {SUPPORTED_FAMILIES.map((family) => (
                  <Text key={family} color="gray.700" fontSize="sm">
                    {family}
                  </Text>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
