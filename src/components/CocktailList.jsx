import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!Array.isArray(drinks) || drinks.length === 0) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
      <Wrapper>
          {formattedDrinks && formattedDrinks.map((item) => (
                <CocktailCard item={item} key={item.id} />
          ))}
    
    </Wrapper>
  );
};

export default CocktailList;
