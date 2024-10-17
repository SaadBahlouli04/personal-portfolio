import { Box, Button, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

function Resume() {
  return (
    <Box textAlign="center">
        <Text fontSize="4xl" fontWeight="light">My Resume</Text>

      <Box mb="8" border="1px" borderColor="gray.200" borderRadius="md" overflow="hidden">
        <iframe
          src="/Saad Bahlouli Resume copy.docx.pdf"
          title="Resume"
          width="100%"
          height="550px"
          style={{ border: 'none' }}
        />
      </Box>
      <Button
        variant='outline'
        height='60px'
        className="download-button"
        fontWeight='light'
        color="black"
        size="lg"
        rightIcon={<DownloadIcon />}
        as="a"
        href="/Saad Bahlouli Resume copy.docx.pdf"
        download
        _hover={{ bg: "#cfdef8" }}
      >
        Download Resume
      </Button>
    </Box>
  );
}

export default Resume;
