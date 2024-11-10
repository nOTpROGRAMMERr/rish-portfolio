    // src/components/About.js
    import React from "react";

    const About = () => {
      return (
        <section id="about" style={aboutStyle}>
      <h2>About Me</h2>
      
      <h3>Education</h3>
      <p>
        I am currently a Computer Science and Engineering student at <strong>SIT Pune</strong>, specializing in <strong>Artificial Intelligence and Machine Learning</strong>. My academic journey has been driven by a strong curiosity for how things work, particularly in the AI/ML domain.
      </p>
    
      <h3>Technical Skills</h3>
      <ul>
        <li><strong>Programming Languages:</strong> Proficient in Python, with experience in JavaScript and C++.</li>
        <li><strong>AI/ML:</strong> Skilled in developing and fine-tuning machine learning models, with hands-on experience in natural language processing and computer vision.</li>
        <li><strong>Tools and Frameworks:</strong> Experience with TensorFlow, PyTorch, Pandas, and Scikit-Learn for AI/ML projects.</li>
        <li><strong>Web Development:</strong> Knowledge of front-end and back-end development, particularly in building MERN stack applications.</li>
      </ul>
    
      <h3>Interests</h3>
      <p>
        Outside of tech, I'm an enthusiastic sports player and a gym freak. I believe in balancing professional growth with recreational pursuits, as it fosters creativity and resilience. I am passionate about using technology to solve real-world challenges and am constantly exploring new avenues to apply my skills.
      </p>
    </section>
    
    
      );
    };
    
    const aboutStyle = {
      padding: "40px",
      textAlign: "center",
      backgroundColor: "#f4f4f9"
    };
    
    export default About;
    
    