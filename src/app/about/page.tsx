import type { Metadata } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";
import { OrganizationSection } from "@/components/about/OrganizationSection";

export const metadata: Metadata = {
  title: "About | Chesed Philly",
  description: "Learn about Chesed Philly's mission serving families across Greater Philadelphia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
      eyebrow="About"
        title="Chesed Philly's Tomchei Shabbos Project"
        description="A little help can change everything."
      />

      <Flex direction="column" maxW="3xl" mx="auto" w="full" py={{ base: 10, md: 14 }} px={4} gap={10}>
        <Flex direction="column" gap={4} id="mission">
          <Heading size="2xl" color="brand.emphasized" textAlign="center">
            Our Mission
          </Heading>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" textAlign="justify">
            Chesed Philly was founded in the summer of 2024 to connect the Greater Philadelphia Orthodox communities through Chesed by launching and encouraging new chesed initiatives.
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            Our flagship Tomchei Shabbos project provides weekly food deliveries with the groceries a family needs for Shabbos and Yom Tov to financially vulnerable households in the Greater Philadelphia Area.
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            We are a 501(c)(3) organization. Our Tax ID is 35-2861084.
          </Text>
        </Flex>
      <Flex direction="column" maxW="7xl" mx="auto" w="full" py={{ base: 7, md: 10 }}>
        <OrganizationSection />
      </Flex>
      </Flex>

    </>
  );
}
