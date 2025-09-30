import { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img className="img" src={tour.image} alt={tour.name} />

      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}

          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <h4 className="tour-price">{tour.price}</h4>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(tour.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
