import type { Metadata } from "next";
import NextLink from "next/link";
import { Button, Container, Grid, Heading, Image, List, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Volunteer | Chesed Philly",
  description: "Join the Chesed Philly family and take part in holy community service.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
      textColorOverride="gold.300"
        title="Volunteer"
        description="Every week, dedicated volunteers come together to help families throughout our community.
              From packing food to making deliveries, every role plays an important part in ensuring families
              receive the support they need. Whether you can volunteer regularly or lend a hand during seasonal campaigns,
              your time makes a meaningful difference."
      />

      <Container maxW="6xl" py={{ base: 10, md: 14 }}>
        <Stack gap={10} alignItems="center">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 24, lg: 20 }}
            align={{ base: "stretch", lg: "center" }}
          >
            <Stack gap={4} flex="1" justify="center">
              <Heading size="lg" color="brand.solid">Volunteer Opportunities</Heading>

              <Text color="gray.700">There's a role for everyone</Text>

              <List.Root gap={2}>
                <List.Item>Packing fresh challah, produce, and pantry staples</List.Item>
                <List.Item>Assembling and packing food boxes</List.Item>
                <List.Item>Delivering boxes discreetly to families throughout the community</List.Item>
                <List.Item>Assisting with fundraising and special events</List.Item>
              </List.Root>

              <Stack gap={6}>
            <Stack gap={2}>
              <Heading size="sm" color="brand.solid">Location</Heading>
              <Text color="gray.700">Young Israel of Elkins Park</Text>
            </Stack>

            <Stack gap={2}>
              <Heading size="sm" color="brand.solid">Packing Days</Heading>
              <Text color="gray.700">Tuesdays &amp; Wednesdays</Text>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Heading size="md" color="brand.emphasized">
              Interested in volunteering?
            </Heading>
            <Button asChild alignSelf="start" variant="outline" borderColor="brand.solid" color="brand.solid">
              <NextLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdf1Zz2K56rUuQxlKsXBDkZvrM_z1LM0PX3oLyYRSi2vqWhKw/viewform">Volunteer Sign-up</NextLink>
            </Button>
          </Stack>
            </Stack>

            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
              gap={3}
              flex={{ base: "1", lg: "1" }}
              w={{ base: "100%", lg: "100%" }}
              mt={{ base: 0, lg: 1 }}
            >
              {Array.from({ length: 8 }, (_, index) => (
                <Image
                  key={index + 1}
                  src={`/assets/chesedphilly/volunteer${index + 1}.png`}
                  alt={`Volunteer activity ${index + 1}`}
                  objectFit="cover"
                  w="100%"
                  // h={{ base: "90px", md: "100px" }}
                  borderRadius="md"
                />
              ))}
            </Grid>
          </Stack>

          
        </Stack>
      </Container>
    </>
  );
}
