import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../Images/1.jpeg'
import second from '../Images/2.jpeg'
import third from '../Images/3.jpeg'
import fourth from '../Images/4.jpeg'

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={fourth}
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;