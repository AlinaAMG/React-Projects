import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    try {
      const newItem = {
        name: itemName,
        completed: false,
        id: nanoid(),
      };
      const newItems = [...items, newItem];
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success('item added to the list');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong.Try again.');
    }
  };

  const handleRemove = (itemId) => {
    try {
      const newItems = items.filter((item) => item.id !== itemId);
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success('item deleted');
    } catch (error) {
      console.log(error);
      success.error('Item is not deleted.Try again.');
    }
  };

  const editItem = (itemId) => {
    try {
      const newItems = items.map((item) => {
        if (item.id === itemId) {
          const newItem = { ...item, completed: !item.completed };
          return newItem;
        }
        return item;
      });
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success('Item updated');
    } catch (error) {
      toast.error('Item not updated.try again');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="section-center">
        <Form
          addItem={addItem}
          items={items}
          handleRemove={handleRemove}
          editItem={editItem}
        />
      </section>
    </>
  );
};

export default App;
