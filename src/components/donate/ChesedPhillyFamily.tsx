"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Field,
  Grid,
  Heading,
  Input,
  RadioCard,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { site } from "@/lib/content";

const WEEKLY_AMOUNTS = [5, 10, 25, 50, 100, 150] as const;

export function ChesedPhillyFamily() {
  const [selectedAmount, setSelectedAmount] = useState<string>("25");
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const amount = selectedAmount === "custom" ? (Number(customAmount) || 0) : Number(selectedAmount);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (amount <= 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card.Root borderWidth="1px" shadow="md">
        <Card.Body p={{ base: 6, md: 8 }}>
          <Stack gap={4} textAlign="center">
            <Heading size="lg" color="brand.emphasized">
              Thank you for joining Chesed Philly Family
            </Heading>
            <Text color="gray.600">
              Your weekly pledge of ${amount.toLocaleString()} has been recorded. Payment processing
              will be connected in a future step.
            </Text>
            <Text fontSize="sm" color="gray.500">
              Tax ID: {site.taxId}
            </Text>
          </Stack>
        </Card.Body>
      </Card.Root>
    );
  }

  return (
    <Card.Root borderWidth="1px" shadow="md">
      <Card.Body p={{ base: 6, md: 8 }}>
        <form onSubmit={handleSubmit}>
          <Stack gap={8}>
            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Become a Chesed Philly Family
              </Heading>
              <Text color="gray.600">
                Join our community of weekly supporters who ensure families have the food they need
                for Shabbos every week.
              </Text>
            </Stack>

            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Select a weekly amount
              </Heading>
              <RadioCard.Root
                value={selectedAmount}
                onValueChange={(details) => setSelectedAmount(details.value ?? "25")}
              >
                <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} gap={3}>
                  {WEEKLY_AMOUNTS.map((value) => (
                    <RadioCard.Item key={value} value={String(value)}>
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <RadioCard.ItemText>${value}</RadioCard.ItemText>
                          <RadioCard.ItemDescription>per week</RadioCard.ItemDescription>
                        </RadioCard.ItemContent>
                        <RadioCard.ItemIndicator />
                      </RadioCard.ItemControl>
                    </RadioCard.Item>
                  ))}
                  <RadioCard.Item value="custom">
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemContent>
                        <RadioCard.ItemText>Custom</RadioCard.ItemText>
                      </RadioCard.ItemContent>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                </SimpleGrid>
              </RadioCard.Root>

              {selectedAmount === "custom" ? (
                <Field.Root required>
                  <Field.Label>Custom weekly amount</Field.Label>
                  <Input
                    type="number"
                    min={1}
                    step={1}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount in USD"
                  />
                </Field.Root>
              ) : null}
            </Stack>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Field.Root required>
                <Field.Label>First name</Field.Label>
                <Input name="firstName" required />
              </Field.Root>
              <Field.Root required>
                <Field.Label>Last name</Field.Label>
                <Input name="lastName" required />
              </Field.Root>
              <Field.Root required gridColumn={{ md: "1 / -1" }}>
                <Field.Label>Email</Field.Label>
                <Input name="email" type="email" required />
              </Field.Root>
              <Field.Root gridColumn={{ md: "1 / -1" }}>
                <Field.Label>Dedication or comments (optional)</Field.Label>
                <Textarea name="comments" rows={3} />
              </Field.Root>
            </Grid>

            <Stack gap={3}>
              <Button
                type="submit"
                size="lg"
                bg="accent.solid"
                color="accent.contrast"
                _hover={{ bg: "gold.600" }}
                disabled={amount <= 0}
              >
                Continue to payment — ${amount.toLocaleString()} / week
              </Button>
              <Text fontSize="sm" color="gray.500" textAlign="center">
                Secure payment processing (Stripe or similar) will be integrated here. Chesed Philly
                is a 501(c)(3) organization. Tax ID: {site.taxId}.
              </Text>
            </Stack>
          </Stack>
        </form>
      </Card.Body>
    </Card.Root>
  );
}
