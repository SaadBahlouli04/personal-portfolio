import { Box, Heading, Text, Link, Image, Flex } from '@chakra-ui/react';

const ContactMe = () => {
  return (
    <Box
      p={8}
      maxW="800px"
      mx="0"
      mt="50px"
      borderRadius="lg"
    >
      {/* Contact Me heading on the left */}
      <Heading as="h1" size="2xl" mb={"120px"} textAlign="left">
        Contact Me
      </Heading>
      <Text pl="5px" fontSize="xl" pb="20px">
        Feel free to contact me for any feedback, concerns, inquiries, or opportunities!
      </Text>

      {/* Contact details presented with more padding and alignment */}
      <Box pl={4}>

        {/* LinkedIn Section */}
        <Flex alignItems="center" mb={6}>
          <Image
            src="/linkedin-icon.png" // Replace with your LinkedIn image
            alt="LinkedIn"
            boxSize="40px" // Larger icon
            mr={4} // Adjusted margin for better spacing
          />
          <Link
            href="https://linkedin.com/in/saad-bahlouli"
            isExternal
            color="blue.500"
            fontSize="lg"
          >
            linkedin.com/in/saad-bahlouli
          </Link>
        </Flex>

        {/* School Email Section */}
        <Flex alignItems="center" mb={6}>
          <Image
            src="/gt-icon.svg" // Replace with your School Email image
            alt="School Email"
            boxSize="40px" // Larger icon
            mr={4} // Adjusted margin for better spacing
          />
          <Link
            href="mailto:sbahlouli3@gatech.edu"
            color="blue.500"
            fontSize="lg"
          >
            sbahlouli3@gatech.edu
          </Link>
        </Flex>

        {/* Work Email Section */}
        <Flex alignItems="center" mb={6}>
          <Image
            src="/gmail-icon.png" // Replace with your Work Email image
            alt="Work Email"
            boxSize="40px" // Larger icon
            height="30px"
            mr={4} // Adjusted margin for better spacing
          />
          <Link
            href="mailto:saadbeducation@gmail.com"
            color="blue.500"
            fontSize="lg"
          >
            saadbeducation@gmail.com
          </Link>
        </Flex>

      </Box>
    </Box>
  );
};

export default ContactMe;
