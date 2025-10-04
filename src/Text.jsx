import { nanoid } from 'nanoid';

const Text = ({ text }) => {
  return (
    <article className="lorem-text">
      {text.map((item) => (
        <p key={nanoid()}>{item}</p>
      ))}
    </article>
  );
};

export default Text;
