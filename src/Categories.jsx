const Categories = ({ categories,filterItems }) => {
  return (
    <div className="btn-container">
      { categories && categories.map((category) => (
        <button className="btn" key={category} type="button" onClick={()=>filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
