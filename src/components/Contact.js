// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={contactStyle}>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
      <p>
        <strong>Email:</strong> rishrdias672004@gmail.com
      </p>
      <p>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rish-dias-1b40331ba/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rish-dias-1b40331ba</a>
      </p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/nOTpROGRAMMERr" target="_blank" rel="noopener noreferrer">github.com/nOTpROGRAMMERr</a>
      </p>
    </section>
  );
};

const contactStyle = {
  padding: "40px",
  textAlign: "center",
  backgroundColor: "#333",
  color: "#fff"
};

export default Contact;
