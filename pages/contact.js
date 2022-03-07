import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from "../styles/Home.module.css"
import { faPhone, faMailBulk, faWarehouse } from '@fortawesome/free-solid-svg-icons'

const contact = () => {
    return (<div className="mx-auto block text-center text-xl max-w-5xl my-8">
        <h2 className="font-extralight text-3xl"> A legacy built on trust </h2>
        <br/>
        <h5 className=''>Established in 1960s, we are the distributor of American Tourister, Duckback and Ketron (Electric Scooter) for the entire North-East region </h5>
        <br/>
        <p className="mb-10 italic text-2xl"> Delivering high quality products & service since 1968! </p>
        <div className={styles.grid}>
            <div className={styles.card}>
                <h2 className="py-8">CONTACT</h2>
                <p>Email: ksaworld1968@gmail.com</p>
                <FontAwesomeIcon icon={faMailBulk} className="w-12 h-12 m-6"/>
                <br/>
                <p>Phone1: +91-9085328111</p>
                <p>Phone2: +91-9435117480</p>
                <FontAwesomeIcon icon={faPhone} className="w-12 h-12 m-6"/>
            </div>
            <div className={styles.card}>
                <h2 className="py-8">LOCATION</h2>
                <p>Retail Showroom: Kamakhya Stores & Agency, SS Road, Lakhtokia, Guwahati, Assam - 781001</p>
                <br/>
                <p>Warehouse: H.M. Das Road, Rehabari, Guwahati, Assam - 781008</p>
                <FontAwesomeIcon icon={faWarehouse} className="w-12 h-12 m-6"/>
            </div>
        </div>

    </div>);
}

export default contact;