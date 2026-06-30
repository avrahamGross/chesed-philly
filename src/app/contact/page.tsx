import type { Metadata } from "next";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Chesed Philly",
  description: "Get in touch with Chesed Philly for assistance, volunteering, or support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="We are here to answer questions about donations, volunteering, and community support services."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>
          <Box bg="brand.muted" p={6} rounded="xl">
            <Stack gap={3}>
              <Heading size="lg" color="brand.emphasized">
                Contact Information
              </Heading>
              <Text color="gray.700">Warehouse: {site.warehouseAddress}</Text>
              <Text color="gray.700">501(c)(3) Tax ID: {site.taxId}</Text>
              <Text color="gray.700">Email: info@chesedphilly.org</Text>
            </Stack>
          </Box>

          <Box bg="white" p={6} rounded="xl" shadow="sm">
            <Stack gap={3}>
              <Heading size="lg" color="brand.emphasized">
                Reach out for support
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                Whether you need assistance, want to volunteer, or want to learn more about our programs, we will connect you with the right resources.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
