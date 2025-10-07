import { useState } from 'react';
import Items from './Items';
import { toast } from "react-toastify";

const Form = ({ addItem,items ,handleRemove,editItem}) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      toast.error("Please fill the input with the correct value.")
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
      </form>
      <Items items={items} handleRemove={handleRemove} editItem={editItem}  />
    </section>
  );
};

export default Form;
