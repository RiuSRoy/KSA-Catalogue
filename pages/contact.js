import React from 'react';

const contact = () => {
    return <div className="block m-auto">
        <h2> A legacy built on trust </h2>
        <h5>Distributor of American Tourister, Duckback and Ketron (Electric Scooter) for the entire North-East region </h5>
        <p> Delivering high quality products & service since 1968! </p>
        
        </hr>
        <div className={styles.grid}>
            <div className={styles.card}>
                <h2>CONTACT</h2>
                <p>Email: ksaworld1968@gmail.com</p>
                <p>Phone1: 9085328111</p>
                <p>Phone2: 9435117480</p>
            </div>
            <div className={styles.card}>
                <h2>LOCATION</h2>
                <p>Retail Showroom: Kamakhya Stores & Agency, SS Road, Lakhtokia, Guwahati, Assam - 781001
                <p>Warehouse: H.M. Das Road, Rehabari, Guwahati, Assam - 781008</p>
            </div>
        </div>
        
    </div>;
}

export default contact;