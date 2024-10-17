import './Work.css';
import { Text, Box, Button } from '@chakra-ui/react';
import { Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import { useState, useEffect } from 'react';


function Work() {
    const [selected, setSelected] = useState(null);
    const images = {
        1: "/finance.jpeg",
        2: "/productivity-photo.avif",
        3: "/sheep-photo.avif",
    };
    const handleAccordionClick = (index) => {
        setSelected(index);
    };
    return (
      <header>
        <div className='container' style={{display: 'flex'}}>
            <div className="left-div">
                <Text pt="100px" pl='5px' pb="15px" fontSize='6xl'>Projects</Text>
                <Accordion pt="10px" pl='10px'>
                    <AccordionItem pt='10px' pb="15px">
                        <h2>
                        <AccordionButton onClick={() => handleAccordionClick(1)} pb="10px">
                            <Box as='span' flex='1' textAlign='left'>
                            <Text color="black" fontSize="2xl" fontWeight={'bold'}>MyFinancier</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        A robust financial management tool designed to help
                        users keep track of their expenses, set budgets, and monitor their
                        financial goals.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem pt='10px' pb="10px">
                        <h2>
                        <AccordionButton onClick={() => handleAccordionClick(2)}>
                            <Box as='span' flex='1' textAlign='left'>
                                <Text color="black" fontSize='2xl' fontWeight='bold'>AllTracked</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        A tool to log and track many aspects of our routines in a modular way. Users can add tasks and calendars
                        and display important metrics as graphs.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem pt="10px" pb="10px">
                        <h2>
                        <AccordionButton onClick={() => handleAccordionClick(3)}>
                            <Box as='span' flex='1' textAlign='left'>
                                <Text color="black" fontSize='2xl' fontWeight='bold'>Baa</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        A "Would you Rather" style social media platform where users engage by choosing between two options,
                        encouraging fun debates and discussions
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div>
            <Box className="right-div" width="100%" textAlign="center">
  {selected && (
    <Box> {/* Wrapper Box around the Image and Button */}
      <Image
        borderRadius='100%'
        pt="60px"
        pl="10px"
        width="170px"
        src={images[selected]}
        alt={`Option ${selected}`}
        boxSize="500px" // Adjust image size
        objectFit="cover" // Make sure the image fits well
        mt="20px"
        pb="20px"
      />
      <div className='github-button'>
        <Button
            as="a"
            href="https://github.com/SaadBahlouli04"
            target="_blank"
            leftIcon={<img src="/github-mark.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />}
            colorScheme="gray"
            variant="solid"
            size="lg"
            mt="20px" // Add margin between the image and the button
        >
            GitHub
        </Button>
      </div>
    </Box>
  )}
</Box>

            </div>
        </div>
      </header>
    );
}

export default Work;