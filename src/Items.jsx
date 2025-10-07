import SingleItem from './SingleItem';

const Items = ({ items, handleRemove,editItem }) => {
  return (
    <div className="items">
      {items &&
        items.map((item) => (
          <SingleItem key={item.id} item={item} handleRemove={handleRemove} editItem={editItem} />
        ))}
    </div>
  );
};

export default Items;
