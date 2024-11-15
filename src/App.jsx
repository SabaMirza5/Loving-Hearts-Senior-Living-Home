
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from './components/pages/HomePage';
import AmenitiesPage from './components/pages/AmenitiesPage';
import { useNavigate } from "react-router-dom";
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';



function App() {
  const [isAOSActive, setIsAOSActive] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsAOSActive(false);
      } else {
        setIsAOSActive(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isAOSActive) {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
      });
    }
  }, [isAOSActive]);


  

  return (
    <>

<Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/amenities" element={<AmenitiesPage />} />
        <Route exact path="/gallerypage" element={<GalleryPage />} />
        <Route exact path="/contactpage" element={<ContactPage />} />
       
      </Routes>

 
    </>
  );
}

export default App;
// Custom button function
export const useNavigateButton = () => {
  const navigate = useNavigate();

  // The function to call for navigation
  const navigateTo = (path) => {
    navigate(path); // Navigate to the given path
  };

  return { navigateTo };
};