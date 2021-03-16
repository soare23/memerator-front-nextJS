import '../styles/App.css';
import '../styles/Navbar.css';
import '../styles/LateralNavbar.css';
import '../styles/BurgerMenu.css';
import '../styles/AuthenticationModal.css';
import LateralNavbar from '../components/LateralNavbar';
import Navbar from '../components/Navbar';
import BurgerMenu from '../components/BurgerMenuIcon';
import { BurgerMenuProvider } from '../context/BurgerMenuContext';

function CustomStreams({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <BurgerMenuProvider>
        <BurgerMenu></BurgerMenu>
        <LateralNavbar></LateralNavbar>
      </BurgerMenuProvider>
      <Component {...pageProps}></Component>
    </div>
  );
}
export default CustomStreams;
