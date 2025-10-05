import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js'; //values.js npm package
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values().all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
