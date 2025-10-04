import { useState } from 'react';
import Container from './Container';
import { shortList, list} from './data';


const Carousel = () => {
  const [people, setPeople] = useState(list);
  console.log(shortList);

  return (
    <section className="slider-container">
      <Container people={people} setPeople={setPeople} />
    </section>
  );
};

export default Carousel;
