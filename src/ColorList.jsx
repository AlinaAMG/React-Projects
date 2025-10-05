import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors &&
        colors.map((color) => <SingleColor color={color} key={nanoid()} />)}
    </section>
  );
};

export default ColorList;
