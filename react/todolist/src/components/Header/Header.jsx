import styles from './Header.module.css'
import {MdDarkMode} from 'react-icons/md';
import {BsFillSunFill} from 'react-icons/bs'
import { useDarkMode } from '../../Context/DarkModeContext';

export default function Header({filter,filters,onChangeFilter}) {
    const {darkMode, handleDarkMode } = useDarkMode();
    console.log(darkMode);

    return (
        <header className={styles.header}>
            <button className={styles.darkButton} onClick={handleDarkMode}> {!darkMode && <MdDarkMode/>}{darkMode && <BsFillSunFill />}</button>
            <ul className={styles.filters}>
                {
                    filters.map((value,index)=>
                    <li key={index}>
                        <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={()=>{onChangeFilter(value)}}>{value}</button>
                    </li>)
                }
            </ul>
        </header>
    );
}

