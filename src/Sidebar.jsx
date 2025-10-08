import logo from './assets/logo.svg';
import { useGlobalContext } from './context';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen? "sidebar show-sidebar": "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links &&
          links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          ))}
      </ul>
      <ul className="social-links">
        {social &&
          social.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
