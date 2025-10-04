import { useState } from 'react';
import data from './data';
import Text from './Text';


const Form = () => {
  const [count, setCount] = useState(1);
   const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = +count;
    setText(data.slice(0, amount));
  };

  return (
    <section>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          value={count}
          onChange={(e) => setCount(e.target.value)}
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
     <Text text={text}  />
    </section>
  );
};

export default Form;
