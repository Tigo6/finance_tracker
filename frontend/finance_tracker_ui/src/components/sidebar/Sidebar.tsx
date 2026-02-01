import { Container } from 'react-bootstrap';
import './sidebar.css';
import { FaTachographDigital, FaHouse, FaWallet, FaChartLine, FaGear } from "react-icons/fa6";
import SidebarListItem from '../sidebar_list_item/SidebarListItem';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  linkTo: string;
}

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: <FaHouse />, linkTo: '/' },
    { title: 'Transações', icon: <FaWallet />, linkTo: '/transactions' },
    { title: 'Investimentos', icon: <FaChartLine />, linkTo: '/investments' },
    { title: 'Definições', icon: <FaGear />, linkTo: '/settings' },
  ];

  return (
    <aside id='sidebar'>
      <Container fluid>
        <div id="sidebar-header">
          <FaTachographDigital />
          <span>FTracker</span>
        </div>
        
        <hr />
        
        <div className="sidebar-content">
          {menuItems.map((item, index) => (
            <SidebarListItem 
              key={index}
              title={item.title}
              icon={item.icon}
              linkTo={item.linkTo}
            />
          ))}
        </div>
      </Container>
    </aside>
  );
};

export default Sidebar;