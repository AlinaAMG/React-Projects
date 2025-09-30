import Person from './Person';

const List = ({ people }) => {
  return (
    <section>
      {people &&
        people.map((person) => <Person key={person.id} person={person} />)}
    </section>
  );
};

export default List;
