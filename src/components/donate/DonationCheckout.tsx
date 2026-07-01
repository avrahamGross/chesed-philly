"use client";

import {
  Button,
  Card,
  Field,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { site } from "@/lib/content";

interface DonationCheckoutProps {
  donationType: "family" | "adopt" | "sponsor";
  amount: number;
  packageLabel?: string;
}

export function DonationCheckout({
  donationType,
  amount,
  packageLabel,
}: DonationCheckoutProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Connect to payment processor
    console.log("Submitting donation:", { donationType, amount, packageLabel });
  };

  const getButtonText = () => {
    switch (donationType) {
      case "family":
        return `Continue to payment — $${amount.toLocaleString()} / week`;
      case "adopt":
        return `Continue to payment — $${amount.toLocaleString()} / month`;
      case "sponsor":
        return `Continue to payment — $${amount.toLocaleString()}`;
      default:
        return `Continue to payment`;
    }
  };

  const getDescriptionText = () => {
    switch (donationType) {
      case "family":
        return "Weekly supporter";
      case "adopt":
        return `${packageLabel}`;
      case "sponsor":
        return `${packageLabel}`;
      default:
        return "";
    }
  };

  return (
    <Card.Root borderWidth="1px" shadow="md">
      <Card.Body p={{ base: 6, md: 8 }}>
        <form onSubmit={handleSubmit}>
          <Stack gap={8}>
            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Donation Details
              </Heading>
              <Stack gap={2} bg="brand.muted" p={4} rounded="lg">
                <Text fontSize="sm" color="gray.600">
                  Donation type
                </Text>
                <Text fontWeight="bold" color="brand.emphasized">
                  {getDescriptionText()}
                </Text>
              </Stack>
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
                <Textarea
                  name="comments"
                  rows={3}
                  placeholder="In honor of... or in memory of..."
                />
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
                {getButtonText()}
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
