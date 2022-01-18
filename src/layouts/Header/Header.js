import { useNavigate } from "react-router-dom";

import styles from './Header.module.css';

import logo from '../../assets/logo.png';

const Header = () => {

    let navigate = useNavigate();

    const clickEventHandler = () => {
        navigate('/');
    }

    return (
        <div className={styles.header}>
            <img src={logo} alt='Logo' onClick={clickEventHandler} className={styles.logo} />
        </div>
    )
}

export default Header;
