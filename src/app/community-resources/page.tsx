import type { Metadata } from "next";
import NextLink from "next/link";
import { Box, Card, Container, Grid, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { PageHero } from "@/components/layout/PageHero";
import { FaCalendarAlt, FaBookReader, FaHandHoldingHeart } from "react-icons/fa";
import { GiMeal, GiReceiveMoney, GiCandleLight, GiWaterDrop, GiGlassCelebration } from "react-icons/gi";
import { FaPeopleArrows, FaBabyCarriage, FaBriefcaseMedical, FaShirt, FaMasksTheater, FaBed } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Community Resources | Chesed Philly",
  description: "Community resources and g'machs for Greater Philadelphia.",
};

const communityResources: Array<{
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
  details: React.ReactNode[];
}> = [
  {
    title: "Philadelphia Hatzolah",
    subtitle: "24/7 Response · Call 215-677-6700",
    image: "/assets/chesedphilly/hatzalah.png",
    details: [
        <Link key="site" href="https://www.philadelphiahatzolah.org/" target="_blank" rel="noreferrer" color="brand.emphasized">
        https://www.philadelphiahatzolah.org/
      </Link>,
      <Text key="one" color="gray.600">
        Hatzolah of Philadelphia is a 100% volunteer EMT organization that relies completely on the generous support of the community in order to provide its services.
      </Text>,
      <Text key="two" color="gray.600">
        While we are supported and staffed by the Jewish community, Hatzolah provides care at no cost equally to all in need regardless of race, religion, or ethnicity.
      </Text>,
      <Text key="five" color="gray.600">
        info@philadelphiahatzolah.org
      </Text>,
    ],
  },
  {
    title: "Bikur Cholim of Philadelphia",
    subtitle: "Support, meals, visitation and accommodations",
    image: "/assets/chesedphilly/bikurCholim.jpg",
    details: [
      <Link key="site" href="https://bikkurcholimphilly.org/" target="_blank" rel="noreferrer" color="brand.emphasized">
        https://bikkurcholimphilly.org/
      </Link>,
      <Text key="phone" color="gray.600">
        Phone: 215-805-8668
      </Text>,
      <Text key="meals" color="gray.600">
        Accommodations, Kosher meals, Hospital visitation, Respite Services
      </Text>,
      <Text key="pantries" color="gray.600">
        Kosher Pantries available at Jefferson University Hospital | Lankenau Medical Center | Einstein Medical Center | Hospital of the University of Pennsylvania | Shriners Children&apos;s Hospital | Jefferson Abington Hospital
      </Text>,
      <Text key="abington" color="gray.600">
        Abington Hospital Bikur Cholim Room — Miriam Dachs 917-710-2859
      </Text>,
    ],
  },
   {
    title: "Chaverim",
    image: "/assets/chesedphilly/chaveirim.png",
    details: [
      <Text key="one" color="gray.600">
        Working to assist motorists stranded due to minor hurdles, such as car lockouts, flat tires or running out of gas, as well as helping the elderly & handicapped in our community with their daily needs.
      </Text>,
      <Text key="two" color="gray.600">
        855-742-4876
      </Text>,
      <Link key="site" href="https://chaveirim.org/directory/categories/chaveirim" target="_blank" rel="noreferrer" color="brand.emphasized">
        chaveirim.org directory
      </Link>,
      <Text key="instagram" color="gray.600">
        Instagram: @phillychaveirim
      </Text>,
    ],
  },
  {
    title: "Kosher in Philly",
    image: "/assets/chesedphilly/keystonek.png",
    details: [
      <Link key="site" href="https://keystone-k.org/establishments/" target="_blank" rel="noreferrer" color="brand.emphasized">
        Keystone K Kosher Establishments
      </Link>,
    ],
  },
  {
    title: "Find a Minyan",
    image: "/assets/chesedphilly/goDaven.png",
    details: [
      <Link key="site" href="https://www.godaven.com/search?mode=location&address=Philadelphia%2C%20PA%2C%20USA&lat=39.9525839&lng=-75.1652215&pagenumber=1&distance=32&nusach=&tefillah=&day=" target="_blank" rel="noreferrer" color="brand.emphasized">
        Go Daven - Philadelphia
      </Link>,
    ],
  },
  {
    title: "Find a Mikvah",
    icon: <GiWaterDrop />,
    details: [
      <Link key="site" href="https://www.mikvah.org/directory" target="_blank" rel="noreferrer" color="brand.emphasized">
        Mikvah.org
      </Link>,
    ],
  },
  {
    title: "Mitzvah Meals",
    icon: <GiMeal />,
    details: [
      <Text key="one" color="gray.600">
        Young Israel Elkins Park — Rebbetzin Miriam Goldstein 646-369-8353.
      </Text>,
      <Text key="two" color="gray.600">
        Ahavas Torah (Northeast) — Tara Neisenfeld 215-745-0819.
      </Text>,
      <Text key="three" color="gray.600">
        Somerton — Chana Perel Shmulevich 267-243-9788, shmulevichcp@hotmail.com.
      </Text>,
    ],
  },
  {
    title: "Chasdei Eliyahu",
    icon: <GiReceiveMoney />,
    details: [
      <Link key="site" href="https://www.chasdeieliyahu.org/" target="_blank" rel="noreferrer" color="brand.emphasized">
        https://www.chasdeieliyahu.org/
      </Link>,
      <Text key="two" color="gray.600">
        Chasdei Eliyahu provides tangible assistance to individuals and families in need with dignity and discretion.
      </Text>,
      <Text key="three" color="gray.600">
        Support is focused on basic needs: food, grocery store gift cards, shelter, rent/mortgage and utilities payments, medical costs, prescription costs, and interest-free loans.
      </Text>,
    ],
  },
  {
    title: "Chai Career Connections",
    icon: <FaPeopleArrows />,
    details: [
      <Text key="one" color="gray.600">
        Career Connections is a volunteer organization to help employers and qualified job-seekers connect.
      </Text>,
      <Text key="two" color="gray.600">
        If you have a position opening, or are looking for a job, please contact Joan Betesh, Intake Coordinator, at joanbetesh@gmail.com.
      </Text>,
    ],
  },
  {
    title: "Chevra Kadisha",
    icon: <GiCandleLight />,
    details: [
      <Text key="women" color="gray.600">
        Women: 215-742-6231
      </Text>,
      <Text key="men" color="gray.600">
        Men: 215-342-5204
      </Text>,
    ],
  },
  {
    title: "Job Hunting Philly",
    icon: <FaPeopleArrows />,
    details: [
      <Text key="one" color="gray.600">
        Whatsapp group. Post job available or job wanted.
      </Text>,
      <Link key="join" href="https://chat.whatsapp.com/JonoN8AI38JJ58SsA8iuSk" target="_blank" rel="noreferrer" color="brand.emphasized">
        Click here to join
      </Link>,
    ],
  },
   {
    title: "Community Calendar",
    icon: <FaCalendarAlt />,
    details: [
      <Link key="site" href="http://www.koshersync.com/" target="_blank" rel="noreferrer" color="brand.emphasized">
        Kosher Sync
      </Link>,
      <Text key="summary" color="gray.600">
        Philadelphia&apos;s Orthodox Jewish community calendar.
      </Text>,
    ],
  },
];

const gemachSections: Array<{
  title: string;
  image?: string;
  icon?: React.ReactNode;
  details: React.ReactNode[];
}> = [
  {
    title: "Simcha",
    icon: <GiGlassCelebration />,
    details: [
      <Text key="tablecloth" color="gray.600">
        <strong>Tablecloth G'mach </strong>— Simchas Chaya Sara, 343 Bala Ave. Bala Cynwyd, PA 19004, 484-802-5352, simchaschayasara@gmail.com.
      </Text>,
      <Text key="centerpieces1" color="gray.600">
        <strong>Centerpieces </strong>— Minky Kaminetsky 845-263-0275.
      </Text>,
      <Text key="centerpieces2" color="gray.600">
        <strong>Centerpieces </strong>— Mrs. Katz.
      </Text>,
      <Text key="bar-mitzvah" color="gray.600">
        <strong>Bar Mitzvah Centerpieces </strong>— Sima Chana Coe 845-537-9671.
      </Text>,
      <Text key="tables" color="gray.600">
        <strong>Table and Chairs </strong>— Reiner Home 917-667-3269.
      </Text>,
      <Text key="proposal" color="gray.600">
        <strong>Proposal G'mach </strong>— Supplies often used in a proposal: red carpet, candles, easel and sign board, light up MAZEL TOV letters, table and chairs, rose petals, etc. Jessica Erlbaum 610-633-2918.
      </Text>,
      <Text key="wedding" color="gray.600">
        <strong>Wedding Shtick G'mach </strong>— Arches, parachute, mazel tov signs, jumprope, etc. Reiner Home 917-667-3269.
      </Text>,
      <Text key="lachmei" color="gray.600">
        <strong>Lachmei Simcha </strong>— A big challah for seudas mitzvos. Mrs. Dubbie Ungar 215-342-1254.
      </Text>,
      <Text key="headphones1" color="gray.600">
        <strong>Baby Headphone G'mach </strong>— Noise canceling headphones for babies for weddings, etc. Tali Newman 313-303-5708.
      </Text>,
      <Text key="headphones2" color="gray.600">
        <strong>Baby Headphone Gemach </strong>— Please call or text Aviva Gavrylin 718-755-7095.
      </Text>,
      <Text key="bencher" color="gray.600">
        <strong>Bencher G'mach </strong>— Benchers to use for simchas, shabbatons, events, etc. Amanda Israel 609-458-0992.
      </Text>,
      <Text key="gown" color="gray.600">
        <strong>Children's Gown G'mach </strong>(Elkins Park) — Gown donations welcome for gowns in exquisite condition. For appointments call Ronit Tarshish 917-656-1309.
      </Text>,
    ],
  },
  {
    title: "Medical",
    icon: <FaBriefcaseMedical />,
    details: [
      <Text key="equipment1" color="gray.600">
        <strong>Medical Equipment (Elkins Park)</strong> — Wheelchairs, walkers, commodes, crutches for adults and children, etc. Brodsky 610-304-4176.
      </Text>,
      <Text key="equipment2" color="gray.600">
        <strong>Bikkur Cholim of Philadelphia Medical Equipment</strong> — A variety of medical equipment is available at our gemach. Please contact Khana Globman 267-738-8563.
      </Text>,
      <Text key="otc" color="gray.600">
        <strong>OTC Medicine Gemach</strong> — L'iluy nishmas Tamar Bracha Bas Yosef Reuven Aryeh. Available 24/7 at 118 Bentley Avenue. Located in outdoor fridge on right side of property. Donations accepted Venmo @ESTHERPRESS.
      </Text>,
      <Text key="infants" color="gray.600">
        Infant's: Ibuprofen, Acetaminophen, Saline drops, Gas relief drops.
      </Text>,
      <Text key="childrens" color="gray.600">
        Children's: Ibuprofen, Acetaminophen, Allergy relief, Cold relief.
      </Text>,
    ],
  },
  {
    title: "Clothing",
    icon: <FaShirt />,
    details: [
      <Text key="chasdei" color="gray.600">
        <strong>Chasdei Eliyahu Clothing G'mach</strong> — For men, women and children. Please call 484-243-0582 to inquire about accessing the g'mach during business hours and donation times for those with goods to contribute.
      </Text>,
      <Text key="beth" color="gray.600">
        <strong>Clothing G'mach</strong> — Located at Congregation Beth Hamedrosh. Molly Wood 215-573-2656.
      </Text>,
      <Text key="baby-kids" color="gray.600">
        <strong>Baby and Kids Gemach</strong> — (Elkins Park) Clothing/Shoes/Jackets. Text/WhatsApp Suzanne Broyde 862-432-6077.
      </Text>,
      <Text key="cta" color="gray.600">
        <strong>CTA Uniform G'mach</strong> — By appointment only. Rachael Starkman 301-254-9664.
      </Text>,
      <Text key="politz" color="gray.600">
        <strong>Politz Uniform G'mach</strong> — Jumpers, skirts and polos. Esti Wesel 718-759-7272.
      </Text>,
    ],
  },
  {
    title: "Purim Costumes",
    icon: <FaMasksTheater />,
    details: [
      <Text key="one" color="gray.600">
        <strong>Purim Costumes (Northeast)</strong> — Leeba Rich 267-414-8311.
      </Text>,
      <Text key="two" color="gray.600">
        <strong>Purim Costumes (Wynnewood)</strong> — Mrs. Globman 267-738-8563.
      </Text>,
    ],
  },
  {
    title: "Hospitality",
    icon: <FaBed />,
    details: [
      <Text key="air" color="gray.600">
        <strong>Air mattress G'mach</strong> — Malka Blau 917-734-4861.
      </Text>,
      <Text key="apartment" color="gray.600">
        <strong>Hachnosos Orchim apartment</strong> — 1 bedroom apartment, sleeps 2 adults plus a child on a pull out couch.
      </Text>,
      <Text key="dating" color="gray.600">
        Also available to reserve for dating (either shidduch dating or date night for a married couple!) Games and refreshments provided.
      </Text>,
      <Text key="contact" color="gray.600">
        Contact Mrs. Dubbie Ungar 215-342-1254.
      </Text>,
    ],
  },
  {
    title: "Libraries",
    icon: <FaBookReader />,
    details: [
      <Text key="lending" color="gray.600">
        <strong>Lending Library (Elkins Park)</strong> — Reiner Home 917-667-3269.
      </Text>,
      <Text key="somerton" color="gray.600">
        <strong>Somerton Jewish Library</strong> — call or text Aviva Gavrylin 718-755-7095.
      </Text>,
      <Text key="yavne" color="gray.600">
        <strong>Yavne Children's Library</strong> — 6068 Drexel Road. Open Wednesday nights 6:30-7:15 for boys, 7:15-8 pm for girls. Go behind the house, it&apos;s in the basement.
      </Text>,
      <Text key="bauminger" color="gray.600">
        <strong> Bauminger Lending Library</strong> — Call/text for appointment at 718-909-7712.
      </Text>,
    ],
  },
  {
    title: "Baby",
    icon: <FaBabyCarriage />,
    details: [
      <Text key="bris1" color="gray.600">
        <strong>Bris Pillow & Outfit G'mach</strong> — Susan Frager 610-247-7246.
      </Text>,
      <Text key="bris2" color="gray.600">
        <strong>Bris Pillow & Outfit G'mach</strong> — Sarah Leah Greenspan 610-570-9700.
      </Text>,
      <Text key="bris3" color="gray.600">
        <strong>Bris Pillow & Outfit G'mach (Elkins Park)</strong> — Text or Whatsapp Miriam Lichter 574-850-8350.
      </Text>,
      <Text key="bris4" color="gray.600">
        <strong>Bris Pillow & Outfit G'mach (Somerton)</strong> — Call or text Aviva Gavrylin 718-755-7095.
      </Text>,
      <Text key="headphone1" color="gray.600">
        <strong>Baby Headphone G'mach</strong> — Noise canceling headphones for babies for weddings, etc. Tali Newman 313-303-5708.
      </Text>,
      <Text key="headphone2" color="gray.600">
        <strong>Baby Headphone G'mach</strong> — Please call or text Aviva Gavrylin 718-755-7095.
      </Text>,
    ],
  },
  {
    title: "G'machs Misc.",
    icon: <FaHandHoldingHeart />,
    details: [
      <Text key="mezuzah" color="gray.600">
        <strong>Mezuzah G'mach</strong> — Short term lending. Malka Blau 917-734-4861.
      </Text>,
      <Text key="penicillin" color="gray.600">
        <strong>Jewish Penicillin G'mach</strong> — Chicken soup available for anyone who is sick. Prepared by Onit Zisserman, Jaci Lazowick and Rochel Rubanowitz. Text or Whatsapp Onit Z. 917-703-1673.
      </Text>,
      <Text key="generator" color="gray.600">
        <strong>Generator G'mach</strong> — Emergency generators available for power outages. Chaveirim / David Kushner 215-917-0209.
      </Text>,
      <Text key="bedika" color="gray.600">
        <strong>Bedika Cloth G'mach</strong> — In mailbox by the front door, text for address. Carly Chodosh 215-630-6709.
      </Text>,
      <Text key="ride" color="gray.600">
        <strong>Philadelphia Ride G'mach</strong> — Whatsapp group to post/request rides to and from Philly area. Contact Tova Dworkin to be added. 818-926-20.
      </Text>,
      <Text key="menorah" color="gray.600">
        <strong>Electric Menorah</strong> — For hospital or rehab use. Sima Chana Coe whatsapp 845-537-9671.
      </Text>,
      <Text key="tehillim" color="gray.600">
        <strong>Tehillim to go</strong> — prerecordings being read slowly to make it easy to repeat after.
      </Text>,
      <Link key="download" href="https://drive.google.com/file/d/1qDdqCesVDSKyR83Vv4sMEeX0LbMtrb_z/view" target="_blank" rel="noreferrer" color="brand.emphasized">
        Link to download
      </Link>,
    ],
  },
];

export default function CommunityResourcesPage() {
  return (
    <>
      <PageHero
        title="Community Resources & G'machs"
        description="A guide to local resources that help community members through everyday needs."
      />

      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        <Stack gap={12}>
          <Box>
            <Heading size="xl" mb={6} color="brand.solid">
              Community Resources
            </Heading>
            <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
              {communityResources.map((section) => (
                <Card.Root key={section.title} borderWidth="1px" shadow="sm" height="full">
                  <Card.Body p={6}>
                    <Stack gap={4} h="full">
                      <Stack direction="row" align="start" gap={3}>
                        {section.icon ? (
                          <Box
                            boxSize={{ base: "48px", md: "56px" }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="md"
                            bg="gray.50"
                            color="brand.solid"
                            overflow="hidden"
                            flexShrink={0}
                          >
                            <Box fontSize={{ base: "1.25rem", md: "1.5rem" }} lineHeight={1}>
                              {section.icon}
                            </Box>
                          </Box>
                        ) : section.image ? (
                          <Image
                            src={section.image}
                            alt={`${section.title} icon`}
                            boxSize={{ base: "48px", md: "56px" }}
                            objectFit="contain"
                            borderRadius="md"
                            flexShrink={0}
                          />
                        ) : null}
                        <Box>
                          <Heading size="lg" color="gold.500">
                            {section.title}
                          </Heading>
                          {section.subtitle ? (
                            <Text color="gray.600" fontSize="sm">
                              {section.subtitle}
                            </Text>
                          ) : null}
                        </Box>
                      </Stack>
                      <Stack gap={3} flex="1">
                        {section.details.map((detail, detailIndex) => (
                          <Box key={detailIndex}>{detail}</Box>
                        ))}
                      </Stack>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>

          <Box>
            <Heading size="xl" mb={6} color="brand.solid">
              G'machs
            </Heading>
            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
              {gemachSections.map((section) => (
                <Card.Root key={section.title} borderWidth="1px" shadow="sm" height="full">
                  <Card.Body p={6}>
                    <Stack gap={4} h="full">
                      <Stack direction="row" align="start" gap={3}>
                        {section.icon ? (
                          <Box
                            boxSize={{ base: "48px", md: "56px" }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="md"
                            bg="gray.50"
                            color="brand.solid"
                            overflow="hidden"
                            flexShrink={0}
                          >
                            <Box fontSize={{ base: "1.25rem", md: "1.5rem" }} lineHeight={1}>
                              {section.icon}
                            </Box>
                          </Box>
                        ) : section.image ? (
                          <Image
                            src={section.image}
                            alt={`${section.title} icon`}
                            boxSize={{ base: "48px", md: "56px" }}
                            objectFit="contain"
                            borderRadius="md"
                            flexShrink={0}
                          />
                        ) : null}
                        <Box>
                          <Heading size="xl" color="gold.500">
                            {section.title}
                          </Heading>
                        </Box>
                      </Stack>
                      <Stack gap={3} flex="1">
                        {section.details.map((detail, detailIndex) => (
                          <Box key={detailIndex}>{detail}</Box>
                        ))}
                      </Stack>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
