import type { Metadata } from "next";
import NextLink from "next/link";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Volunteer | Chesed Philly",
  description: "Join the Chesed Philly family and take part in holy community service.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Volunteer"
        description="As a unified community, the individual ask is small but the collective impact is tremendous."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Chesed Philly relies on dedicated volunteers to pack boxes, coordinate deliveries, and
            support families with compassion and confidentiality. Whether you can help weekly or for
            a seasonal campaign, your time makes a real difference.
          </Text>
          <Heading size="md" color="brand.emphasized">
            Interested in volunteering?
          </Heading>
          <Text color="gray.600">
            Volunteer sign-up will be connected here. For now, reach out through our contact
            information on the About page.
          </Text>
          <Button asChild alignSelf="start" variant="outline" borderColor="brand.solid" color="brand.solid">
            <NextLink href="/about#contact">Contact us</NextLink>
          </Button>
        </Stack>
      </Container>
    </>
  );
}
