import React from 'react';
import { Link } from 'react-scroll';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  // Additional styling as needed
};

const profileContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const imageStyle = {
  width: '100px',       // Adjust size as needed
  height: '105px',      // Adjust size as needed
  borderRadius: '50%', // Makes the image circular
  marginRight: '35px'  // Space between image and text
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={profileContainerStyle}>
        {/* Profile Image */}
        <img src="/rish.png" alt="Rish Dias" style={imageStyle} />
        <h1>Rish Dias</h1>
      </div>
      <nav>
        <Link to="about" smooth={true} duration={500}>
          About Me
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '15px' }}
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
