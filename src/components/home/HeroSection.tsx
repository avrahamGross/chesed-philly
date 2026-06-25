"use client";

import { useState } from "react";
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
import { heroSlides } from "@/lib/content";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  return (
    <Box bg="brand.emphasized" color="brand.contrast" position="relative" overflow="hidden">
      <Box
        position="absolute"
        inset={0}
        bgGradient="to-br"
        gradientFrom="brand.800"
        gradientTo="brand.950"
        opacity={0.95}
      />
      <Container maxW="7xl" py={{ base: 16, md: 24 }} position="relative">
        <Stack gap={6} maxW="3xl">
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gold.300"
            fontWeight="semibold"
          >
            {slide.eyebrow}
          </Text>
          <Heading size={{ base: "3xl", md: "5xl" }} lineHeight="1.1">
            {slide.title}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.92} maxW="2xl">
            {slide.description}
          </Text>
          <HStack gap={4} flexWrap="wrap">
            <Button asChild size="lg" bg="accent.solid" color="accent.contrast" _hover={{ bg: "gold.600" }}>
              <NextLink href={slide.cta.href}>{slide.cta.label}</NextLink>
            </Button>
            <Button asChild size="lg" variant="outline" borderColor="whiteAlpha.500" color="brand.contrast">
              <NextLink href="/donate">Donate today</NextLink>
            </Button>
          </HStack>
        </Stack>

        <HStack mt={10} gap={2}>
          {heroSlides.map((_, index) => (
            <Button
              key={index}
              aria-label={`Show slide ${index + 1}`}
              size="xs"
              minW="10"
              h="2"
              p={0}
              rounded="full"
              bg={index === active ? "accent.solid" : "whiteAlpha.400"}
              onClick={() => setActive(index)}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
