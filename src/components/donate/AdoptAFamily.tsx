"use client";

import { useState } from "react";
import {
  Badge,
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

interface AdoptPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  highlighted?: boolean;
}

const ADOPT_PACKAGES: AdoptPackage[] = [
   {
    id: "1-2-person-household",
    title: "Family (1-2 person household)",
    description: "Monthly",
    price: 200,
  },
  {
    id: "3-5-person-household",
    title: "Family (3-5 person household)",
    description: "Monthly",
    price: 300,
  },
  {
    id: "5-8-person-household",
    title: "Family (5-8 person household)",
    description: "Monthly",
    price: 400,
  },
];

export function AdoptAFamily() {
  const [selectedPackage, setSelectedPackage] = useState<string>("1-family-weekly");
  const [submitted, setSubmitted] = useState(false);

  const selectedPkg = ADOPT_PACKAGES.find((p) => p.id === selectedPackage);
  const price = selectedPkg?.price || 0;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (price <= 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card.Root borderWidth="1px" shadow="md">
        <Card.Body p={{ base: 6, md: 8 }}>
          <Stack gap={4} textAlign="center">
            <Heading size="lg" color="brand.emphasized">
              Thank you for adopting a family
            </Heading>
            <Text color="gray.600">
              Your commitment to support {selectedPkg?.description} has been recorded. Payment
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
                Adopt a Family
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Become a monthly donor and provide consistent support to families throughout the
                year.
              </Text>
            </Stack>

            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Select a sponsorship
              </Heading>
              <RadioCard.Root
                value={selectedPackage}
                onValueChange={(details) => setSelectedPackage(details.value ?? "1-family-weekly")}
              >
                <Stack gap={3}>
                  {ADOPT_PACKAGES.map((pkg) => (
                    <RadioCard.Item key={pkg.id} value={pkg.id}>
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <Stack direction="row" alignItems="center" gap={2} mb={1}>
                            <RadioCard.ItemText>{pkg.title}</RadioCard.ItemText>
                            {pkg.highlighted && (
                              <Badge size="sm" colorScheme="gold">
                                Most popular
                              </Badge>
                            )}
                          </Stack>
                          <RadioCard.ItemDescription>{pkg.description}</RadioCard.ItemDescription>
                          <Text fontSize="lg" fontWeight="bold" color="brand.emphasized" mt={1}>
                            ${pkg.price.toLocaleString()} / month
                          </Text>
                        </RadioCard.ItemContent>
                        <RadioCard.ItemIndicator />
                      </RadioCard.ItemControl>
                    </RadioCard.Item>
                  ))}
                </Stack>
              </RadioCard.Root>
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
                <Textarea name="comments" rows={3} placeholder="In honor of... or in memory of..." />
              </Field.Root>
            </Grid>

            <Stack gap={3}>
              <Button
                type="submit"
                size="lg"
                bg="accent.solid"
                color="accent.contrast"
                _hover={{ bg: "gold.600" }}
                disabled={price <= 0}
              >
                Continue to payment — ${price.toLocaleString()} / month
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
