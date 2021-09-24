import React from "react";
import ReactModernDrawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './side-menu';


const Drawer = () => {
 
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div>
      <div className="d-block d-lg-none">
        <div className="d-flex justify-content-between align-items-center text-nowrap mt-3">
          <div className="d-block d-lg-none">
            <MenuIcon className="menu-icon" onClick={toggleDrawer} />
          </div>
          <div className="d-block d-lg-none">
            <a href="/">
              <img src="./images/logo02-h.png" className="covid-logo-sp" />
            </a>
          </div>

        </div>
        <ReactModernDrawer open={isOpen} onClose={toggleDrawer} direction='right'>
          <SideMenu />
        </ReactModernDrawer>
      </div>
    </div>
  );
};
 
export default Drawer;