import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { programs } from "@/lib/content";

export function ProgramsSection() {
  return (
    <Box py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <Stack gap={10}>
          <Stack gap={3} textAlign="center" maxW="2xl" mx="auto">
            <Heading size="2xl" color="brand.emphasized">
              Making a difference through community programs
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Chesed Philly serves as a financial safety net for families across Greater
              Philadelphia — with dignity, confidentiality, and care.
            </Text>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {programs.map((program) => (
              <Card.Root key={program.title} height="full" borderWidth="1px" shadow="sm">
                <Card.Body p={6}>
                  <Stack gap={4} height="full">
                    <Heading size="lg" color="brand.solid">
                      {program.title}
                    </Heading>
                    <Text color="gray.600" flex="1">
                      {program.description}
                    </Text>
                    <Button asChild variant="outline" borderColor="brand.solid" color="brand.solid" alignSelf="start">
                      <NextLink href={program.href}>Read more</NextLink>
                    </Button>
                  </Stack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
