import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from "../assets/images/img1.jpg";


export default function AppAbout() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle"> Learn More About Us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
          <p>Our company is driven by innovation and dedicated to providing top-tier solutions that make a difference. With a team of experienced professionals, we focus on building seamless, user-friendly products that enhance the experience for our customers.  </p>

          <p>We believe in continuous growth and improvement. By staying ahead of the latest technological trends, we integrate the best practices and tools into our development process. Our passion for excellence drives us to push boundaries, delivering products that are not only functional but also aesthetically pleasing.</p>

          <div className="progress-block">

<ProgressBar variant="success" now={25} label={"Building"} />
<br />
<ProgressBar variant="success" now={50} label={"Testing"} />
<br />
<ProgressBar variant="success" now={75} label={"Deploying"} />
<br />
<ProgressBar variant="success" now={100} label={"Reached"} />
          </div>


          
          </Col>
        </Row>
      </Container>
    </section>
  );
}
