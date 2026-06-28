"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { homepageHero } from "@/lib/content";

export function HeroSection() {
  return (
    <Box bg="brand.950" color="brand.contrast" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        bgGradient="to-br"
        gradientFrom="brand.950"
        gradientTo="brand.800"
        opacity={0.92}
      />
      <Container maxW="7xl" py={{ base: 20, md: 28 }} position="relative">
        <Stack gap={6} maxW="3xl">
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gold.300"
            fontWeight="semibold"
          >
            {homepageHero.eyebrow}
          </Text>
          <Heading size={{ base: "3xl", md: "5xl" }} lineHeight="1.05">
            {homepageHero.title}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9} maxW="2xl">
            {homepageHero.description}
          </Text>
          <HStack gap={4} flexWrap="wrap">
            <Button asChild size="lg" bg="accent.solid" color="accent.contrast" _hover={{ bg: "gold.600" }}>
              <NextLink href={homepageHero.primaryCta.href}>{homepageHero.primaryCta.label}</NextLink>
            </Button>
            <Button asChild size="lg" variant="outline" borderColor="whiteAlpha.500" color="brand.contrast">
              <NextLink href={homepageHero.secondaryCta.href}>{homepageHero.secondaryCta.label}</NextLink>
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
