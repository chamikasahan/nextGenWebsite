import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
    {
      id: 1,
      icon: "fas fa-brain",
      title: "AI-Powered Solutions",
      description:
        "We leverage cutting-edge artificial intelligence to create smart, scalable solutions that transform your business operations and customer experience.",
    },
    {
      id: 2,
      icon: "fas fa-cloud",
      title: "Cloud Integration",
      description:
        "Our cloud integration services ensure seamless data flow and connectivity, enhancing your organization's agility and scalability.",
    },
    {
      id: 3,
      icon: "fas fa-lock",
      title: "Advanced Cybersecurity",
      description:
        "Protect your digital assets with our robust cybersecurity solutions, designed to keep your data safe from evolving threats.",
    },
    {
      id: 4,
      icon: "fas fa-robot",
      title: "Automation Services",
      description:
        "Streamline your workflows with advanced automation, allowing your team to focus on innovation and strategic growth.",
    },
    {
      id: 5,
      icon: "fas fa-chart-line",
      title: "Data Analytics",
      description:
        "Turn data into actionable insights with our comprehensive analytics services, driving smarter decision-making across your business.",
    },
    {
      id: 6,
      icon: "fas fa-headset",
      title: "24/7 Tech Support",
      description:
        "Our dedicated support team is available around the clock to ensure your systems run smoothly and your questions are promptly addressed.",
    },
  ];

export default function AppServices() {
   
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>

          <div className="subtitle">What We Offer</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                    
                    <i class = {services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
