import {
  Card,
  Field,
  Heading,
  Input,
  RadioCard,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const WEEKLY_AMOUNTS = [5, 10, 25, 50, 100, 150] as const;

interface ChesedPhillyFamilySelectorProps {
  selectedAmount: string;
  customAmount: string;
  onAmountChange: (value: string) => void;
  onCustomAmountChange: (value: string) => void;
}

export function ChesedPhillyFamilySelector({
  selectedAmount,
  customAmount,
  onAmountChange,
  onCustomAmountChange,
}: ChesedPhillyFamilySelectorProps) {
  return (
    <Card.Root borderWidth="1px" shadow="md">
      <Card.Body p={{ base: 6, md: 8 }}>
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
            <RadioCard.Root value={selectedAmount} onValueChange={(details) => onAmountChange(details.value ?? "25")}>
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
                  onChange={(e) => onCustomAmountChange(e.target.value)}
                  placeholder="Enter amount in USD"
                />
              </Field.Root>
            ) : null}
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
