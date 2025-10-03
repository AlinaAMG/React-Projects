const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs &&
        jobs.map((item, index) => (
          <button
            onClick={() => setCurrentItem(index)}
            key={item.id}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        ))}
    </div>
  );
};

export default BtnContainer;
