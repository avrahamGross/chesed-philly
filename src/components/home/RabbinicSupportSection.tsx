import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export function RabbinicSupportSection() {
  return (
    <Box py={{ base: 14, md: 20 }} bg="brand.muted">
      <Container maxW="4xl">
        <Stack gap={6} textAlign="center">
          <Heading size="2xl" color="brand.emphasized">
            Rabbinic Support
          </Heading>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            The <strong>community</strong> together with the support and encouragement of{" "}
            <strong>our esteemed Rabbonim</strong> have the power to make sure that the Tomchei
            Shabbos initiative can continue to make deep and lasting impact on families in need in
            our community.
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            <strong>It could be someone you know</strong> — a neighbor, fellow shul member, or
            member of your family — who receives this <strong>lifeline</strong> when financial
            pressures become too much to handle.
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            What would you do if you knew an elderly couple, a single-parent household, or someone
            who just lost their job was making painful choices between keeping the lights on or
            putting appropriate food on the table?
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            <strong>As a unified community, the individual ask is small but the collective impact
            is tremendous!</strong> We welcome you to join the Chesed Philly family and take part in
            this holy community service.
          </Text>
          <Button asChild alignSelf="center" size="lg" bg="brand.solid" color="brand.contrast">
            <NextLink href="/volunteer">Join the Chesed Philly family</NextLink>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
