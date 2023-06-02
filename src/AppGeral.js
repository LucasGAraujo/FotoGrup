import Header from './Components/Header'
import Section from './Components/Section'

import { useState, useEffect } from 'react';

import foto1 from '../src/Components/StyleComponents/imgComponents/background.jpg'
import foto2 from '../src/Components/StyleComponents/imgComponents/background1.jpg'
import foto3 from '../src/Components/StyleComponents/imgComponents/background2.jpg'
import foto4 from '../src/Components/StyleComponents/imgComponents/background3.jpg'
import foto5 from '../src/Components/StyleComponents/imgComponents/background4.jpg'


function AppGeral() {
    const [backgroundImage, setBackgroundImage] = useState(foto1);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const Fotos = [foto1, foto2, foto3, foto4, foto5];
    const interval = setInterval(() => {
      const newBackgroundImage = Fotos[Math.floor(Math.random() * Fotos.length)];
      setLoading(true);
      setBackgroundImage(newBackgroundImage);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <>
     <main className={`Main_background ${loading ? 'Main_background--hidden' : ''}`}
        style={{ backgroundImage: `url(${backgroundImage})`, transition: 'background-image 6s ease-in-out' }}
        onLoad={handleImageLoad}>
      <Header/>
      <Section/>
    </main>

    </>
   
  );
}

export default AppGeral;
