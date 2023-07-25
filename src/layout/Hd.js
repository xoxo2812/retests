import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const Hd = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  
      <Navbar   expand="lg" id="nahd" className={isScrolled ? 'fixed-top scrolldown' : 'fixed-top'} >
        <div className="container">
        <Navbar.Brand href="#home" className='d-block p-0 m-0'><img src={`./img/logo/${ isScrolled ? 'logo' : 'logo_all' }.png`} alt='portfolio' className='img-fluid' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0 '>
          <Scrollspy
            items={['about', 'event']}
            currentClassName="active"
            offset={-100}
            >
              <li className='px-3 about'><Nav.Link href="#about">브랜드소개</Nav.Link></li>
              <li className='px-3 pe-md-0 event'><Nav.Link href="#event">구독이벤트</Nav.Link></li>           
          </Scrollspy>

        </Navbar.Collapse>
        </div>
       
      </Navbar>     

  );
};

export default Hd;