import './index.css';
import './mediaQueries.css';
import React, { useEffect } from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './components/Home';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Email from './components/email';
import { AnimatePresence } from 'framer-motion';
import jQuery from 'jquery';
MouseFollower.registerGSAP(gsap);


function App() {
  // const [loading, setLoading] = useState(true)
  const location  = useLocation();
  const spinner = document.getElementById('pre-loader');
  
  const cursor = new MouseFollower();
  useEffect(() => {
    const elements1 = document.querySelectorAll('.card-img-top');
    elements1.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.setText('');
      });
      element.addEventListener('mouseleave', () => {
        cursor.removeText();
      });
    });
  })
  // if (spinner) {
    jQuery(document).ready(function() {
      setTimeout(() => {
        jQuery(spinner).slideUp(1200);
       }, 1000)
      // setLoading(false)
  });
    // setTimeout(() => {
      // spinner.style.display = 'none'
      // setLoading(false)
    // }, 3000)
  // }

 
  // var cursor = document.querySelector('.cursor');

  return (
   
      <div className="App">
    <AnimatePresence exitBeforeEnter >
        {/* <Routes> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Email />} />
          {/* </AnimatePresence> */}
        </Routes>
    </AnimatePresence>
      </div>

  );
}
export default App;
