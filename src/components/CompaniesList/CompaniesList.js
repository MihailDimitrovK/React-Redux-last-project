
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import styles from './CompaniesList.module.css';

import { setCompany } from '../../store/slices/currentCompanySlice'

const CompaniesList = () => {
    const { companies } = useSelector(store => store.companies);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const clickHandler = (ev) => {
        dispatch(setCompany(ev.currentTarget.dataset.div_id));
        navigate('/info');
    }

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h3>NAME</h3>
                <h3>DESCRIPTION</h3>
            </div>
            <ul>
                {companies.map(({ id, name, description }) => {
                    return (
                        <li key={id} data-div_id={id} className={styles.li} onClick={clickHandler}>
                            <div >{name}</div>
                            <div>{description}</div>
                        </li>
                    )
                }

                )}
            </ul>
        </main>
    )
}

export default CompaniesList;