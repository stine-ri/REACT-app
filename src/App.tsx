
// import React from 'react';
import './styles.scss'

 
import featureImage1 from './assets/images/illustration-editor-mobile.svg'; 
import featureImage2 from './assets/images/illustration-laptop-desktop.svg'; 
import featureImage3 from './assets/images/illustration-phones.svg'; 

const Header = () => (
  <header className="header">
    <div className="logo">Blogr</div>
    <nav>
      <ul>
        <li><a href="#">Product</a></li>
        <li><a href="#">Company</a></li>
        <li><a href="#">Connect</a></li>
      </ul>
    </nav>
    <div className="auth-buttons">
      <button className="login">Login</button>
      <button className="signup">Sign Up</button>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <h1>A modern publishing platform</h1>
    <p>Grow your audience and build your online brand</p>
    <div className="cta-buttons">
      <button className="start-free">Start for Free</button>
      <button className="learn-more">Learn More</button>
    </div>
  </section>
);

const Feature = ({ title, description, image }: { title: string, description: string, image: string }) => (
  <div className="feature">
    <div className="feature-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="feature-image">
      <img src={image} alt={"no image"} />
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <h1> Blogr</h1>
    <div className="footer-column">
      <h4>Product</h4>
      <ul>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Integrations</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Connect</h4>
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
   
  </footer>
);


const App = () => (
  <div className="app">
    <Header />
    <Hero />
    <h1>Design for the future</h1>
    <Feature 
      title="Introducing an extensible editor" 
      description="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog." 
      image={featureImage1}
    />
    <Feature 
      title="Robust content management" 
      description="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control." 
      image={featureImage2} 
    />
    <Feature
      title="State of the Art Infrastructure" 
      description="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive." 
      image={featureImage3} 
    />
    <Feature
      title="Free, open, simple" 
      description="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn." 
      // title="Powerful tooling"
      // description="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." 
      image={featureImage1}
    />
    <Footer />
  </div>
);


export default App;









