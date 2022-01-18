
import { useSelector } from "react-redux";

import styles from './CurrentCompany.module.css'

const CurrentCompany = () => {

    const { company } = useSelector((state) => state.company);
    const { companies } = useSelector((state) => state.companies);

    const currentCompanyInfo = companies.filter(curr => curr.id === company);
    const { address: { zip, number, city, street }, phone, email } = currentCompanyInfo[0];

    const nearBy = companies.filter(curr => curr.address.city === city);

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <img className={styles.img} src={currentCompanyInfo[0].image} alt='Logo' />
            </section>
            <section className={styles.info}>
                <div>
                    <h3>Addres</h3>
                    <div className={styles.flex}>
                        <div>{`${number} ${street}`}</div>
                        <div>{`${city} ${zip}`}</div>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div className={styles.flex}>
                        <div>{phone}</div>
                        <div>{email}</div>
                    </div>
                </div>
                <aside className={styles.aside}>
                    <h3>Nearby Places</h3>
                    <main className={styles.container}>
                        <ul>
                            {nearBy.map(({ id, name, address: { number, street, city, zip } }) => {
                                return (

                                    <li key={id} className={styles.li}>
                                        <div >{name}</div>
                                        <div >{`${number}, ${street}, ${city}, ${zip}}`}</div>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </main>
                </aside>
            </section>
        </main >
    )
}

export default CurrentCompany;