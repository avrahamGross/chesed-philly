"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Field,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Box py={{ base: 14, md: 20 }}>
      <Container maxW="lg">
        <Stack gap={6} textAlign="center">
          <Heading size="2xl" color="brand.emphasized">
            Subscribe to our emails
          </Heading>
          <Text color="gray.600">
            Subscribe to our mailing list for announcements and news from Chesed Philly.
          </Text>

          {submitted ? (
            <Text color="brand.solid" fontWeight="medium">
              Thank you for subscribing. We&apos;ll be in touch soon.
            </Text>
          ) : (
            <Box as="form" onSubmit={handleSubmit}>
              <Stack gap={4}>
                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </Field.Root>
                <Button type="submit" bg="brand.solid" color="brand.contrast" width="full">
                  Subscribe
                </Button>
              </Stack>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
