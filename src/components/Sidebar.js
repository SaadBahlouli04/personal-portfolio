import { Menu, Link, MenuItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container } from '@chakra-ui/layout';
import './Sidebar.css'

const Sidebar = () => {
    return (
            <Box className="sidebar-box"border='1px' borderColor='white' borderTopColor="white" borderBottomColor="white" width='220px' height='800px'>
                <Container mt="150px" width="220px" height="750px">
                    <Menu className="sidebar">
                        <MenuItem className="sidebar" as={ Link } _hover={{ boxShadow: 'lg', textDecoration: 'none'}} href='../home'>Home</MenuItem>
                        <MenuItem className="sidebar" as={ Link } _hover={{ boxShadow: 'lg', textDecoration: 'none'}} href='../work'>Work</MenuItem>
                        <MenuItem className="sidebar" as={ Link } _hover={{ boxShadow: 'lg', textDecoration: 'none'}} href='../resume'>Resume</MenuItem>
                        <MenuItem className="sidebar" as={ Link } _hover={{ boxShadow: 'lg', textDecoration: 'none'}} href='../contact'>Contact Me</MenuItem>
                    </Menu>
                </Container>
            </Box>
    );
}

export default Sidebar;