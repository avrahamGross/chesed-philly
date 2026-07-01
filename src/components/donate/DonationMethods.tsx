import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { site } from "@/lib/content";

export function DonationMethods() {
  return (
    <Stack gap={6}>
      {/* Zelle Donation */}
      <Box borderWidth="1px" p={6} rounded="xl">
        <Stack gap={3}>
          <Heading size="md" color="brand.emphasized">
            Donate via Zelle
          </Heading>
          <Text color="gray.600" fontSize="sm">
            Send your gift quickly with no processing fees via Zelle to:
          </Text>
          <Text fontWeight="semibold" color="brand.emphasized">
            {site.email}
          </Text>
        </Stack>
      </Box>

      {/* Mail Donation */}
      <Box borderWidth="1px" p={6} rounded="xl">
        <Stack gap={3}>
          <Heading size="md" color="brand.emphasized">
            Donate by Mail
          </Heading>
          <Text color="gray.600" fontSize="sm">
            Checks can be mailed to:
          </Text>
          <Stack gap={1} fontSize="sm" color="brand.emphasized">
            <Text fontWeight="semibold">Chesed Philly</Text>
            <Text>{site.warehouseAddress}</Text>
          </Stack>
        </Stack>
      </Box>

      {/* Tax Info */}
      <Box bg="brand.muted" p={6} rounded="xl">
        <Stack gap={3}>
          <Heading size="md" color="brand.emphasized">
            Tax Deductible
          </Heading>
          <Text color="gray.700" fontSize="sm">
            Chesed Philly is an IRS 501(c)(3) approved organization. Your contribution is tax
            deductible to the fullest extent allowed by law.
          </Text>
          <Text fontWeight="semibold" color="brand.emphasized" fontSize="sm">
            Tax ID: {site.taxId}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
