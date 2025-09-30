const Person = ({ person }) => {
  return (
    <article className="person">
      <img src={person?.image} className="img" alt={person?.name} />
      <div>
        <h4>{person?.name} </h4>
        <p>{person?.age} years</p>
      </div>
    </article>
  );
};

export default Person;
