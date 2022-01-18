import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setError } from '../../store/slices/errorSlice';

import Button from '../../UI/Button/Button';

import styles from './ErrorModule.module.css';

const ErrorModule = () => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.companies);
    const { error } = useSelector((state) => state.companies);

    const closeHandler = () => {
        dispatch(setError(false));
    }

    

    return (
        ReactDOM.createPortal(<div className={styles.backdrop} onClick={closeHandler}>
            <div className={styles.container}>
                <p className={styles.message}>{status === 'failed' ? error.error.message : status}</p>
                <Button name='Close' onClick={closeHandler} />
            </div>
        </div>, document.getElementById('modals'))
    )
}

export default ErrorModule;
