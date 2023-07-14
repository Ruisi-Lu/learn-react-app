import { type FC, useState } from 'react';
import './HorizonalMenu.scss';
import { Link } from 'react-router-dom';

interface HorizonalMenuProps { }
interface MenuButton{
  name: string;
  link: string;
}
const HorizonalMenu: FC<HorizonalMenuProps> = () => {
  const menuButtons: MenuButton[] = [
    { name: 'Home', link: '/' },
    { name: 'Payments', link: '/' },
    { name: 'Customers', link: '/' },
    { name: 'Products', link: '/' },
    { name: 'Reports', link: '/' },
    { name: 'Connect', link: '/' },
  ];
  const [activeButton, setActiveButton] = useState('Home');

  const onButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="HorizonalMenu" data-testid="HorizonalMenu">
      {menuButtons.map((button, index) => (
        <Link
          key={index}
          className="horizontal-menu-link"
          to={button.link}
          onClick={() => { onButtonClick(button.name); }}
        >
          <div className={`horizonal-menu-btn  ${activeButton === button.name ? 'horizonal-menu-btn-active' : ''}`}>{button.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default HorizonalMenu;
