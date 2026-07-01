import { Badge, Card, Field, Heading, Input, RadioCard, Stack, Text } from "@chakra-ui/react";

interface SponsorshipPackage {
    id: string;
    title: string;
    description: string;
    price: number;
    featured?: boolean;
}

const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
    {
        id: "challah",
        title: "Sponsor Challah",
        description: "Sponsor Challah for Shabbos for all recipients",
        price: 500,
    },
    {
        id: "shabbos-all",
        title: "Sponsor Shabbos",
        description: "Sponsor 1 week for all recipients",
        price: 6000,
    },
    {
        id: "month",
        title: "Sponsor Shabbos for a Month",
        description: "Sponsor Shabbos for all recipients for a month",
        price: 24000,
    },
];

interface ShabbosSponsorshipPackagesSelectorProps {
    selectedPackage: string;
    customAmount: string;
    onPackageChange: (value: string) => void;
    onCustomAmountChange: (value: string) => void;
}

export function ShabbosSponsorshipPackagesSelector({
    selectedPackage,
    customAmount,
    onPackageChange,
    onCustomAmountChange,
}: ShabbosSponsorshipPackagesSelectorProps) {
    return (
        <Card.Root borderWidth="1px" shadow="md">
            <Card.Body p={{ base: 6, md: 8 }}>
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
                            onValueChange={(details) => onPackageChange(details.value ?? "challah")}
                        >
                            <Stack gap={3}>
                                <RadioCard.Item value="custom">
                                    <RadioCard.ItemHiddenInput />
                                    <RadioCard.ItemControl>
                                        <RadioCard.ItemContent>
                                            <RadioCard.ItemText>Custom Amount</RadioCard.ItemText>
                                            <RadioCard.ItemDescription>Choose your own donation amount</RadioCard.ItemDescription>

                                            {selectedPackage === "custom" ? (
                                                <Field.Root required>
                                                    <Input
                                                        type="number"
                                                        min={1}
                                                        step={1}
                                                        value={customAmount}
                                                        onChange={(e) => onCustomAmountChange(e.target.value)}
                                                        placeholder="Enter amount in USD"
                                                        style={{
                                                          appearance: "textfield",
                                                        } as React.CSSProperties}
                                                    />
                                                </Field.Root>
                                            ) : null}
                                        </RadioCard.ItemContent>
                                        <RadioCard.ItemIndicator />
                                    </RadioCard.ItemControl>
                                </RadioCard.Item>

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
                </Stack>
            </Card.Body>
        </Card.Root>
    );
}
