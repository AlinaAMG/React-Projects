import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // autoplay: true,
    //   autoplaySpeed: 1000,
    // pauseOnHover:true,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people &&
          people.map((person) => (
            <article key={person.id}>
              <img className="person-img" src={person.image} />
              <h5 className="name">{person.name}</h5>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          ))}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
