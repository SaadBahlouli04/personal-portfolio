import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';


function App() {
  return (
    <ChakraProvider>
      <Router>
      <div className="App" style={{display : 'flex'}}>
        <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace/>}></Route> {/* Default page goes to Home Page */}

              <Route path="/contact" element={<Contact />}>
              </Route>
              <Route path="/home" element={<Home />}>
              </Route>
              <Route path="/work" element={<Work />}>
              </Route>
              <Route path="/resume" element={<Resume />}>
              </Route>
            </Routes>
          </div>
      </div>
      </Router>

    </ChakraProvider>
  );
}

export default App;
