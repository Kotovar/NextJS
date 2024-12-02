import type { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};