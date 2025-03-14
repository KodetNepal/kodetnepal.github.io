import Card from "../sub_components/Card";
import "../styles/About.css";
function About(){
    return (
        <div className="about-container">
            <div className="about-title"> <h1 className="text-center">Our Team</h1></div>
         
        <Card 
        img="https://avatars.githubusercontent.com/u/111997815?v=4"
        title="Dev Gautam Kumar" 
        label="CEO & Founder" 
        text="Passionate tech enthusiast, cybersecurity researcher." 
        button_text="Contact" 
      />
      <Card 
        title="Pratham Karn" 
        label="Web Developer" 
        text="Building Scalable & Efficient Web Solutions" 
        button_text="Contact" 
      />
            <Card 
        title="Krishna Aanand" 
        label="Full-stack Developer" 
        text=" React | Next.js | Tailwind CSS" 
        button_text="Contact" 
      />
        </div>
    )
}
export default About;