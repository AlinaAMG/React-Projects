import { useState } from 'react';
import Tour from './Tour';

const Tours = ({ tours, setTours, fetchTours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>

        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.length < 1 ? (
          <main>
            <div className="title">
              <h2>No Tours available</h2>
              <button
                style={{ marginTop: '2rem' }}
                type="button"
                className="btn"
                onClick={() => fetchTours()}
              >
             Refresh
              </button>
            </div>
          </main>
        ) : (
          tours.map((tour) => (
            <Tour
              key={tour.id}
              tour={tour}
              setTours={setTours}
              removeTour={removeTour}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Tours;
