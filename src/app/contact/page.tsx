import type { Metadata } from "next";
import { Box, Button, Container, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Chesed Philly",
  description: "Get in touch with Chesed Philly for assistance, volunteering, or support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
      />

      <Container maxW="3xl" py={{ base: 10, md: 14 }}>
        <Stack gap={6}>

          <Box bg="white" p={6} rounded="xl" shadow="sm">
            <Stack gap={3}>
              <Heading size="lg" color="brand.emphasized">
                Reach out for support
              </Heading>
              <Text color="gray.700" lineHeight="tall">
                Whether you need assistance, want to volunteer, or want to learn more about our programs, we will connect you with the right resources.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} gap={3} pt={2}>
                <Button asChild size="sm" variant="outline">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf4-byqqV5ECWCe3SphFwy_SNhsORJOjYcFPrvifV6aqInY9A/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Application
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdf1Zz2K56rUuQxlKsXBDkZvrM_z1LM0PX3oLyYRSi2vqWhKw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Volunteer sign-up
                  </a>
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Box bg="brand.muted" p={6} rounded="xl">
            <Stack gap={4}>
              <Stack gap={3}>
                <Heading size="lg" color="brand.emphasized">
                  Send us a message
                </Heading>


              <form action="mailto:info@chesedphilly.org" method="post" encType="text/plain">
                <Stack gap={3}>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Your email</Text>
                    <Input name="email" type="email" placeholder="you@example.com" />
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Subject</Text>
                    <Input name="subject" placeholder="How can we help?" />
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Message</Text>
                    <Textarea name="message" placeholder="Tell us more about your inquiry..." minH="140px" />
                  </Box>
                  <Button type="submit" alignSelf="flex-start" bg="brand.950">
                    Send message
                  </Button>
                </Stack>
              </form>
              </Stack>
                   <Stack gap={3}>
                <Heading size="lg" color="brand.emphasized">
                  Contact Information
                </Heading>
                <Text color="gray.700">Email: info@chesedphilly.org</Text>
                <Text color="gray.700">Warehouse: {site.warehouseAddress}</Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
