import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export function RabbinicSupportSection() {
  return (
    <Box py={{ base: 14, md: 20 }} bg="brand.muted">
      <Container maxW="4xl" textAlign="center">
          <Heading size="2xl" color="brand.emphasized">
            Rabbinic Support
          </Heading>
        <Flex gap={6} direction="row" align="center" textAlign="center">
        <Image
          src="/assets/chesedphilly/rabbinic-support.png"
          alt="Rabbinic Support"
          boxSize={{ base: "100%", md: "50%" }}
          objectFit="contain"
          mt={6}
        />
        <Stack gap={6} textAlign="center">
          <video
            src="/assets/chesedphilly/ts_video.mp4"
            controls
            style={{ borderRadius: "0.5rem", width: "100%", maxWidth: "560px", margin: "0 auto" }}
            preload="metadata"
          />
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            The community together with the support and encouragement of{" "}
            our esteemed Rabbonim have the power to make sure that the Tomchei
            Shabbos initiative can continue to make deep and lasting impact on families in need in
            our community.
          </Text>
          {/* <Text fontSize="lg" color="gray.700" lineHeight="tall">
            As a unified community, the individual ask is small but the collective impact
            is tremendous! We welcome you to join the Chesed Philly family and take part in
            this holy community service.
          </Text> */}
          <Button asChild alignSelf="center" size="lg" bg="brand.solid" color="brand.contrast">
            <NextLink href="/volunteer">Join the Chesed Philly family</NextLink>
          </Button>
        </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
