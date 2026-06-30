import NextLink from "next/link";
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegEnvelope , FaInstagram } from "react-icons/fa6";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/content";
import { LiaWarehouseSolid } from "react-icons/lia";

export function Footer() {
  return (
    <Box as="footer" bg="brand.950" color="brand.contrast" mt="auto">
      <Container maxW="7xl" py={12}>
        <Grid templateColumns={{ base: "1fr", md: "1.4fr 1fr 1fr" }} gap={10}>
          <Stack gap={4}>
            <Heading size="md">{site.name}</Heading>
            <Text fontSize="sm" opacity={0.9}>
              {site.tagline}
            </Text>
          </Stack>

          <Stack gap={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="wider" opacity={0.7}>
              Explore
            </Heading>
            {mainNav.map((item) => (
              <Link key={item.href} asChild color="white" fontSize="sm" opacity={0.9} _hover={{ opacity: 1 }}>
                <NextLink href={item.href}>{item.label}</NextLink>
              </Link>
            ))}
          </Stack>

          <Stack gap={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="wider" opacity={0.7}>
              Get in touch
            </Heading>
            <HStack gap={2} align="start">
              <Box color="white" mt="1">
                <FaRegEnvelope  />
              </Box>
              <Link asChild color="white" fontSize="sm" opacity={0.9} _hover={{ opacity: 1 }} href={`mailto:${site.email}`}>
                <a>{site.email}</a>
              </Link>
            </HStack>
            <HStack gap={2} align="start">
              <Box color="white" mt="1">
                <FaInstagram />
              </Box>
              <Link
                asChild
                fontSize="sm"
                opacity={0.9}
                _hover={{ opacity: 1 }}
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                color="white"
              >
                <a>Instagram - Chesed Philly</a>
              </Link>
            </HStack>
            <HStack gap={2} align="start">
            <Box color="white" mt="1">
              <LiaWarehouseSolid />
              </Box>
            <Text fontSize="sm" opacity={0.9}>
              {site.warehouseAddress}
            </Text>
            </HStack>
            <Text fontSize="sm" opacity={0.9}>
              Tax ID: {site.taxId}
            </Text>
          </Stack>
        </Grid>

        <Separator my={8} borderColor="whiteAlpha.300" />

        <HStack justify="space-between" flexWrap="wrap" gap={3}>
          <Text fontSize="sm" opacity={0.75}>
            © {new Date().getFullYear()} {site.name}
          </Text>
          <Text fontSize="sm" opacity={0.75}>
            Chesed Philly is a 501(c)(3) tax-exempt organization.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}
