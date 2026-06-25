import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <Box bg="brand.emphasized" color="brand.contrast" py={{ base: 12, md: 16 }}>
      <Container maxW="4xl">
        <Stack gap={4} textAlign="center">
          {eyebrow ? (
            <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="gold.300">
              {eyebrow}
            </Text>
          ) : null}
          <Heading size={{ base: "2xl", md: "4xl" }}>{title}</Heading>
          {description ? (
            <Text fontSize="lg" opacity={0.92}>
              {description}
            </Text>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
