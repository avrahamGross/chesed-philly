import type { Metadata } from "next";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Community Resources | Chesed Philly",
  description: "Community resources and g'machs for Greater Philadelphia.",
};

export default function CommunityResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Community Resources & G'machs"
        description="A guide to local resources that help community members through everyday needs."
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            This page will host a curated directory of community gemachs, referral services, and
            local resources. Content from the current site will be migrated here in a future pass.
          </Text>
          <Heading size="md" color="brand.emphasized">
            Coming soon
          </Heading>
          <Text color="gray.600">
            We are building an easy-to-browse resource library organized by category — clothing,
            furniture, meals, and more.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
