import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Bar */}
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={4} bg="white" color="gray.600">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            PoolPro Repair
          </Heading>
          <Flex align="center">
            <Link px={3} href="#services">
              Services
            </Link>
            <Link px={3} href="#about">
              About
            </Link>
            <Link px={3} href="#contact">
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="white" color="gray.600" py={10} flex="1">
          <VStack spacing={4}>
            <Heading as="h2" size="2xl" fontWeight="bold" textAlign="center">
              Expert Pool Repair & Maintenance
            </Heading>
            <Text fontSize="xl" maxW="lg" textAlign="center">
              Keeping your pool perfect all year round!
            </Text>
            <Button colorScheme="blue" size="lg">
              Get a Free Quote
            </Button>
          </VStack>
        </Flex>

        {/* Services Section */}
        <Box id="services" py={10} px={5} bg="gray.50">
          <VStack spacing={8}>
            <Heading as="h3" size="xl" color="gray.700">
              Our Services
            </Heading>
            <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" gap={10}>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Cleaning</Heading>
                <Text mt={4}>Regular and thorough cleaning to ensure your pool is always sparkling.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Repair</Heading>
                <Text mt={4}>Quick and efficient repair services to fix all common pool issues.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Maintenance</Heading>
                <Text mt={4}>Ongoing maintenance to keep your pool in perfect condition.</Text>
              </Box>
            </Flex>
          </VStack>
        </Box>

        {/* Footer */}
        <Box bg="gray.800" color="gray.200" p={4}>
          <Flex justify="space-between" align="center" wrap="wrap">
            <Text>&copy; {new Date().getFullYear()} PoolPro Repair. All rights reserved.</Text>
            <Flex align="center">
              <Link href="tel:+1234567890" isExternal mx={2}>
                <FaPhone />
              </Link>
              <Link href="mailto:contact@poolprorepair.com" isExternal mx={2}>
                <FaEnvelope />
              </Link>
              <Link href="https://instagram.com" isExternal mx={2}>
                <FaInstagram />
              </Link>
              <Link href="https://facebook.com" isExternal mx={2}>
                <FaFacebookF />
              </Link>
              <Link href="https://twitter.com" isExternal mx={2}>
                <FaTwitter />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
