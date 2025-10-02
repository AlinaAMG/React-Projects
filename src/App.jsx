import { useState } from 'react';
import Menu from './Menu';
import Title from './Title';
import data from './data';
import Categories from './Categories';

// const tempCategories = data.map(item => item.category);
// tempCategories.unshift("all");
// console.log(tempCategories);
// let tempItems = new Set(tempCategories);

const allCategories = ['all', ...new Set(data.map((menu) => menu.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    console.log(category);
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
