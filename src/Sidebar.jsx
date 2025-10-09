import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks &&
            sublinks.map((sublink) => (
              <article key={sublink.pageId}>
                <h4>{sublink.page}</h4>
                <div className="sidebar-sublinks">
                  {sublink &&
                    sublink.links.map((link) => {
                      const { url, icon, label, id } = link;
                      return (
                        <a key={id} href={url}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                </div>
              </article>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
