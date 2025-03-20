import Card from "../sub_components/Card";

function Services() {
    return (
        <>
            <div className="about-container">
                <div className="about-title">
                    <h1 className="text-center">Our Services</h1>
                </div>
<div className="row">
                <Card 
                    img="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1470&auto=format&fit=crop"
                    title="Web Design" 
                    label="UI/UX | Responsive | Modern Aesthetics" 
                    text="Creating visually appealing and user-friendly website designs tailored for the best experience." 
                    button_text="View More" 
                />

                <Card 
                    img="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop"
                    title="Web Development" 
                    label="Frontend | Backend | Full-Stack" 
                    text="Developing high-performance, scalable web applications using the latest technologies." 
                    button_text="Get Started" 
                />

                <Card 
                    img="https://cdn-icons-png.flaticon.com/512/3081/3081603.png"
                    title="E-commerce Solutions" 
                    label="Shopify | WooCommerce | Custom Stores" 
                    text="Building secure and feature-rich e-commerce platforms to boost your online sales." 
                    button_text="Explore" 
                />

                <Card 
                    img="https://cdn-icons-png.flaticon.com/512/2867/2867303.png"
                    title="SEO Optimization" 
                    label="On-Page | Off-Page | Technical SEO" 
                    text="Improving search rankings and driving organic traffic with optimized SEO strategies." 
                    button_text="Optimize Now" 
                />

                <Card 
                    img="https://cdn-icons-png.flaticon.com/512/2972/2972095.png"
                    title="Web Scraping & Automation" 
                    label="Data Extraction | API Integration" 
                    text="Scraping valuable data from the web and automating workflows for efficiency." 
                    button_text="Request Demo" 
                />

                <Card 
                    img="https://cdn-icons-png.flaticon.com/512/3258/3258704.png"
                    title="Custom Project Development" 
                    label="Full-Cycle Development | MVPs | SaaS" 
                    text="Turning ideas into reality by building custom software and scalable projects." 
                    button_text="Start Your Project" 
                />
            </div>
            </div>
        </>
    );
}

export default Services;
