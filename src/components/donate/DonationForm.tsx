"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Field,
  Grid,
  Heading,
  Input,
  RadioCard,
  Separator,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { donationAmounts, donationFunds, site } from "@/lib/content";

type DonationFrequency = "one-time" | "monthly";

export function DonationForm() {
  const [frequency, setFrequency] = useState<DonationFrequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string>("180");
  const [customAmount, setCustomAmount] = useState("");
  const [fund, setFund] = useState<string>(donationFunds[0].id);
  const [submitted, setSubmitted] = useState(false);

  const amount = useMemo(() => {
    if (selectedAmount === "custom") {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    }
    return Number(selectedAmount);
  }, [customAmount, selectedAmount]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card.Root borderWidth="1px" shadow="md">
        <Card.Body p={{ base: 6, md: 8 }}>
          <Stack gap={4} textAlign="center">
            <Heading size="lg" color="brand.emphasized">
              Thank you for your generosity
            </Heading>
            <Text color="gray.600">
              Your {frequency === "monthly" ? "monthly " : ""}pledge of ${amount.toLocaleString()}{" "}
              to {donationFunds.find((item) => item.id === fund)?.label} has been recorded. Payment
              processing will be connected in a future step.
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
                Donation type
              </Heading>
              <RadioCard.Root
                value={frequency}
                onValueChange={(details) => setFrequency(details.value as DonationFrequency)}
              >
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                  <RadioCard.Item value="one-time">
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemContent>
                        <RadioCard.ItemText>One-time gift</RadioCard.ItemText>
                        <RadioCard.ItemDescription>
                          Make a single donation today
                        </RadioCard.ItemDescription>
                      </RadioCard.ItemContent>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                  <RadioCard.Item value="monthly">
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemContent>
                        <RadioCard.ItemText>Monthly partner</RadioCard.ItemText>
                        <RadioCard.ItemDescription>
                          Sustain families throughout the year
                        </RadioCard.ItemDescription>
                      </RadioCard.ItemContent>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                </SimpleGrid>
              </RadioCard.Root>
            </Stack>

            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Select an amount
              </Heading>
              <RadioCard.Root
                value={selectedAmount}
                onValueChange={(details) => setSelectedAmount(details.value ?? "180")}
              >
                <SimpleGrid columns={{ base: 2, sm: 3 }} gap={3}>
                  {donationAmounts.map((value) => (
                    <RadioCard.Item key={value} value={String(value)}>
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <RadioCard.ItemText>${value}</RadioCard.ItemText>
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
                  <Field.Label>Custom amount</Field.Label>
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

            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Designate your gift
              </Heading>
              <RadioCard.Root value={fund} onValueChange={(details) => setFund(details.value ?? fund)}>
                <Stack gap={3}>
                  {donationFunds.map((item) => (
                    <RadioCard.Item key={item.id} value={item.id}>
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <RadioCard.ItemText>{item.label}</RadioCard.ItemText>
                          <RadioCard.ItemDescription>{item.description}</RadioCard.ItemDescription>
                        </RadioCard.ItemContent>
                        <RadioCard.ItemIndicator />
                      </RadioCard.ItemControl>
                    </RadioCard.Item>
                  ))}
                </Stack>
              </RadioCard.Root>
            </Stack>

            <Separator />

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
                Continue to payment — ${amount.toLocaleString()}
                {frequency === "monthly" ? " / month" : ""}
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
