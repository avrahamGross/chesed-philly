"use client";

import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  Flex,
  Heading,
  HStack,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { mainNav } from "@/lib/nav";
import { site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box as="header" bg="brand.solid" color="brand.contrast" shadow="sm">
      <Container maxW="7xl" py={3}>
        <Flex align="center" justify="space-between" gap={4}>
          <Link asChild _hover={{ textDecoration: "none" }}>
            <NextLink href="/">
              <Stack gap={0}>
                <Heading size="lg" fontWeight="bold" letterSpacing="tight">
                  {site.name}
                </Heading>
                <Text fontSize="xs" opacity={0.85} display={{ base: "none", md: "block" }}>
                  {site.dedication}
                </Text>
              </Stack>
            </NextLink>
          </Link>

          <HStack gap={2} display={{ base: "none", lg: "flex" }}>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                asChild
                px={3}
                py={2}
                rounded="md"
                fontSize="sm"
                fontWeight="medium"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <NextLink href={item.href}>{item.label}</NextLink>
              </Link>
            ))}
            <Button asChild size="sm" bg="accent.solid" color="accent.contrast" _hover={{ bg: "gold.600" }}>
              <NextLink href="/donate">Donate Today</NextLink>
            </Button>
          </HStack>

          <HStack gap={2} display={{ base: "flex", lg: "none" }}>
            <Button asChild size="sm" bg="accent.solid" color="accent.contrast">
              <NextLink href="/donate">Donate</NextLink>
            </Button>
            <Button
              aria-label="Open menu"
              variant="outline"
              borderColor="whiteAlpha.400"
              color="brand.contrast"
              onClick={() => setOpen(true)}
            >
              Menu
            </Button>
          </HStack>
        </Flex>
      </Container>

      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="end">
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header borderBottomWidth="1px">
                <Drawer.Title>{site.name}</Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Stack gap={1} py={2}>
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      asChild
                      display="block"
                      px={3}
                      py={3}
                      rounded="md"
                      fontWeight="medium"
                      _hover={{ bg: "gray.100" }}
                      onClick={() => setOpen(false)}
                    >
                      <NextLink href={item.href}>{item.label}</NextLink>
                    </Link>
                  ))}
                </Stack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
