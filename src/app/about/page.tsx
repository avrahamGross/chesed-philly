import type { Metadata } from "next";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About | Chesed Philly",
  description: "Learn about Chesed Philly's mission serving families across Greater Philadelphia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Chesed with dignity"
        description="A volunteer organization serving as the Jewish community's financial safety net across Greater Philadelphia."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={10}>
          <Stack gap={4} id="mission">
            <Heading size="xl" color="brand.emphasized">
              Our mission
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              Chesed Philly helps individuals and families facing financial hardship with Tomchei
              Shabbos grocery support, community resource guidance, and confidential social
              services referrals. Our goal is to help families get back on their feet while
              preserving their dignity.
            </Text>
          </Stack>

          <Stack gap={4} id="rabbinic-support">
            <Heading size="xl" color="brand.emphasized">
              Rabbinic support
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              Chesed Philly operates with the encouragement and support of our community&apos;s
              esteemed Rabbonim. Their leadership helps ensure that assistance is provided with
              sensitivity, halachic awareness, and true chesed.
            </Text>
          </Stack>

          <Box id="contact" bg="brand.muted" p={6} rounded="xl">
            <Stack gap={3}>
              <Heading size="lg" color="brand.emphasized">
                Contact
              </Heading>
              <Text color="gray.700">
                Warehouse: 7715 Montgomery Ave, Elkins Park, PA 19027
              </Text>
              <Text color="gray.700">501(c)(3) Tax ID: 35-2861084</Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
