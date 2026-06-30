import type { Metadata } from "next";
import NextLink from "next/link";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Gallery | Chesed Philly",
  description: "Photos and moments from our community support efforts.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our community work"
        description="A look at volunteers, deliveries, and events as we work together to support families in need."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Our gallery is coming soon. In the meantime, please reach out if you'd like to share a photo or story from a Chesed Philly event.
          </Text>
          <Button asChild alignSelf="start" bg="brand.solid" color="brand.contrast">
            <NextLink href="/contact">Contact us</NextLink>
          </Button>
        </Stack>
      </Container>
    </>
  );
}
