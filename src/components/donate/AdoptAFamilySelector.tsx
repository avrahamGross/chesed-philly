import { Badge, Card, Heading, RadioCard, Stack, Text } from "@chakra-ui/react";

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
    title: "1 Family (1-2 person household)",
    description: "Monthly",
    price: 200,
    highlighted: true,
  },
  {
    id: "3-5-person-household",
    title: "1 Family (3-5 person household)",
    description: "Monthly",
    price: 300,
  },
  {
    id: "5-8-person-household",
    title: "1 Family (5-8 person household)",
    description: "Monthly",
    price: 400,
  },
];

interface AdoptAFamilySelectorProps {
  selectedPackage: string;
  onPackageChange: (value: string) => void;
}

export function AdoptAFamilySelector({
  selectedPackage,
  onPackageChange,
}: AdoptAFamilySelectorProps) {
  return (
    <Card.Root borderWidth="1px" shadow="md">
      <Card.Body p={{ base: 6, md: 8 }}>
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
              onValueChange={(details) => onPackageChange(details.value ?? "1-family-weekly")}
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
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
