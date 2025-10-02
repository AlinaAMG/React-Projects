import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu && menu.map((item) => <MenuItem key={item.id} {...item} />)}
    </div>
  );
};

export default Menu;
