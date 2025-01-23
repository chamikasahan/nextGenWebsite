import Carousel from "react-bootstrap/Carousel";
import imgHero1 from "../assets/images/img-hero1.jpg";
import imgHero2 from "../assets/images/img-hero2.jpg";
import imgHero3 from "../assets/images/img-hero3.jpg";


var heroData = [
  {
    id: 1,
    image: imgHero1,
    title: "Innovating Tomorrow's Technology",
    description:
      "At NextGen, we build cutting-edge solutions to empower businesses and individuals in the digital age. Join us in shaping the future of technology.",
    link: "https://chamika.cyberyakku.com/",
  },
  {
    id: 2,
    image: imgHero2,
    title: "Transform Your Business with NextGen",
    description:
      "Our groundbreaking tools and platforms are designed to elevate your business, simplify operations, and achieve exponential growth.",
    link: "https://chamika.cyberyakku.com/",
  },
  {
    id: 3,
    image: imgHero3,
    title: "Unlock the Future with NextGen",
    description:
      "Experience the difference of seamless technology solutions that revolutionize the way you work, connect, and grow.",
    link: "https://chamika.cyberyakku.com/",
  },
];
export default function AppHero() {


  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide" + hero.id}
              ></img>
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
