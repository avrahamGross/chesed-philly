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

interface SponsorshipPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  featured?: boolean;
}

const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    id: "household-1-2",
    title: "Sponsor Shabbos",
    description: "1-2 person household",
    price: 50,
  },
  {
    id: "household-3-5",
    title: "Sponsor Shabbos",
    description: "3-5 person household",
    price: 75,
  },
  {
    id: "household-5-8",
    title: "Sponsor Shabbos",
    description: "5-8 person household",
    price: 150,
  },
  {
    id: "challah",
    title: "Sponsor Challah",
    description: "For all recipients",
    price: 500,
    featured: true,
  },
  {
    id: "shabbos-all",
    title: "Sponsor Shabbos",
    description: "For all recipients",
    price: 6000,
    featured: true,
  },
  {
    id: "month",
    title: "Sponsor a Month",
    description: "Shabbos support for all families",
    price: 24000,
    featured: true,
  },
];

export function ShabbosSponsorshipPackages() {
  const [selectedPackage, setSelectedPackage] = useState<string>("household-1-2");
  const [submitted, setSubmitted] = useState(false);

  const selectedPkg = SPONSORSHIP_PACKAGES.find((p) => p.id === selectedPackage);
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
              Thank you for sponsoring
            </Heading>
            <Text color="gray.600">
              Your sponsorship pledge of ${price.toLocaleString()} for "{selectedPkg?.title} ({selectedPkg?.description})"
              has been recorded. Payment processing will be connected in a future step.
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
                Sponsor a Shabbos Package
              </Heading>
              <Text color="gray.600">
                Make an immediate impact by sponsoring a Shabbos meal or special item for families
                in need.
              </Text>
            </Stack>

            <Stack gap={4}>
              <Heading size="md" color="brand.emphasized">
                Select a package
              </Heading>
              <RadioCard.Root
                value={selectedPackage}
                onValueChange={(details) => setSelectedPackage(details.value ?? "household-1-2")}
              >
                <Stack gap={3}>
                  {SPONSORSHIP_PACKAGES.map((pkg) => (
                    <RadioCard.Item key={pkg.id} value={pkg.id}>
                      <RadioCard.ItemHiddenInput />
                      <RadioCard.ItemControl>
                        <RadioCard.ItemContent>
                          <Stack direction="row" alignItems="center" gap={2} mb={1}>
                            <RadioCard.ItemText>{pkg.title}</RadioCard.ItemText>
                            {pkg.featured && (
                              <Badge size="sm" colorScheme="gold">
                                Popular
                              </Badge>
                            )}
                          </Stack>
                          <RadioCard.ItemDescription>{pkg.description}</RadioCard.ItemDescription>
                          <Text fontSize="lg" fontWeight="bold" color="brand.emphasized" mt={1}>
                            ${pkg.price.toLocaleString()}
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
                <Textarea
                  name="comments"
                  rows={3}
                  placeholder="E.g., In memory of... or In honor of..."
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
                disabled={price <= 0}
              >
                Continue to payment — ${price.toLocaleString()}
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
