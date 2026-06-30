import type { Metadata } from "next";
import NextLink from "next/link";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Social Services | Chesed Philly",
  description: "Confidential support for families facing financial hardship.",
};

export default function SocialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistance"
        title="Social Services"
        description="Are you worried you can't afford to pay your bills? We can help."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Chesed Philly provides confidential guidance for individuals and families navigating
            financial hardship. Our team can help you understand available programs — including
            Tomchei Shabbos — and connect you with appropriate community resources.
          </Text>
          <Heading size="md" color="brand.emphasized">
            Request assistance
          </Heading>
          <Text color="gray.600">
            An intake form will be added here. All requests are handled with sensitivity and
            discretion.
          </Text>
          <Button asChild alignSelf="start" bg="brand.solid" color="brand.contrast">
            <NextLink href="/about#contact">Get in touch</NextLink>
          </Button>
        </Stack>
      </Container>
    </>
  );
}
