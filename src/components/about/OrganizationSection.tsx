import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { organization } from "@/lib/content.tsx";

export function OrganizationSection() {
  const sections = [
    {
      title: "Rabbinic Advisory Board",
      color: "gold.500",
      people: organization.rabbinicAdvisoryBoard,
    },
    {
      title: "Board of Directors",
      color: "gold.500",
      people: organization.boardOfDirectors,
    },
    {
      title: "Staff",
      color: "gold.500",
      people: organization.staff,
    },
  ];

  return (
    <Flex direction="column" gap={8}>
      <Flex direction="column" gap={3} textAlign="center">
        <Heading size="2xl" color="brand.emphasized">
          Our Leadership
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto">
          Guided by dedicated volunteers and esteemed community leaders
        </Text>
      </Flex>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {sections.map((section) => (
          <Flex
            direction="column"
            key={section.title}
            gap={6}
            pb={6}
            borderLeftWidth="3px"
            borderColor={section.color}
            pl={4}
          >
            <Heading size="md" color={section.color} textTransform="uppercase" letterSpacing="wider">
              {section.title}
            </Heading>

            <Flex direction="column" gap={6}>
              {section.people.map((person) => (
                <Flex direction="column" gap={1} key={person.name}>
                  <Heading size="sm" color="brand.emphasized" fontWeight="semibold">
                    {person.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontStyle="italic">
                    {person.title}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}
