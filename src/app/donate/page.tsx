import type { Metadata } from "next";
import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { DonationForm } from "@/components/donate/DonationForm";
import { PageHero } from "@/components/layout/PageHero";

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
        <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={10} alignItems="start">
          <DonationForm />

          <Stack gap={6}>
            <Box bg="brand.muted" p={6} rounded="xl">
              <Stack gap={3}>
                <Heading size="lg" color="brand.emphasized">
                  Your gift multiplies
                </Heading>
                <Text color="gray.700">
                  Chesed Philly leverages community partnerships so that each donated dollar
                  stretches further — putting appropriate food on Shabbos tables across Greater
                  Philadelphia.
                </Text>
              </Stack>
            </Box>

            <Box borderWidth="1px" p={6} rounded="xl">
              <Stack gap={3}>
                <Heading size="md" color="brand.emphasized">
                  Seasonal campaigns
                </Heading>
                <Text color="gray.600">
                  In addition to year-round Tomchei Shabbos support, Chesed Philly runs Maot
                  Chittim before Pesach and Matanot L&apos;evyonim on Purim — distributing 100% of
                  collected funds to local families in need.
                </Text>
              </Stack>
            </Box>

            <Box borderWidth="1px" p={6} rounded="xl">
              <Stack gap={3}>
                <Heading size="md" color="brand.emphasized">
                  Other ways to give
                </Heading>
                <Text color="gray.600">
                  Prefer to give by check or stock transfer? Contact us through our social services
                  page and we&apos;ll be happy to assist.
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}
