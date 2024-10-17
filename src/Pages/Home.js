// src/pages/Home.js
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div className="home-info">
            <div style={{display: 'flex'}}>
                <div className="left-side">
                    <Text fontSize="6xl" className="title">Saad Bahlouli</Text>
                    <Text fontSize="2xl" className="heading" style={{ fontWeight: 'bold' }}>Aspiring Software Engineer</Text>
                    <p>Born and raised in New York City, I'm here in Atlanta studying Computer Science and Applied Mathematics at Georgia Institute of Technology.</p>
                    <p>My favorite part of computer science is being able to solve my own problems and bring my ideas to life.</p>
                    <div className="work-button">
                        <Link to="/work">
                            <Button colorScheme='blue' variant='outline' size="lg" className='work-link'>Check out my work!</Button>
                        </Link>
                    </div>
                </div>
                <div className='right-side'>
                    <Box width="100%" maxW="420px" mx="auto" my="6">
                        <Image objectFit='cover' boxShadow='lg' borderRadius='100px' boxSize='550px' src='profile-photo.jpg' fallbackSrc='https://via.placeholder.com/300' />
                    </Box>
                </div>
            </div>
        </div>

    );
};

export default Home;
