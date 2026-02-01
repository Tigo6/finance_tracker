import { type ReactNode } from 'react';
import './sidebarListItem.css';
interface SidebarListItemProps {
    title: string;
    icon: ReactNode; 
    linkTo: string;
}

const SidebarListItem = ({ title, icon, linkTo }: SidebarListItemProps) => {
    return (
        <div className="sidebar-list-item" onClick={() => console.log(`Ir para: ${linkTo}`)}>
            <span className="sidebar-icon">{icon}</span>
            <p className="sidebar-title">{title}</p>
        </div>
    );
};

export default SidebarListItem;