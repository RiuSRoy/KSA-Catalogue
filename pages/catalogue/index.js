import React, { useState } from 'react';
import ProductDisplay from '../../components/ProductDisplay';

const Catalogue = (props) => {

    const [models, setModels] = useState(props.models)
    return (<>
        <h2 className='text-xl text-center pt-12 font-mono'>Click on the model you like to know more...</h2>
        <ProductDisplay models={models} brand="amt" brandName="American Tourister"/>
        <br/>
        <ProductDisplay models={models} brand="kam" brandName="Kamiliant by American Tourister"/>
        <br/>
        <ProductDisplay models={models} brand="sam" brandName="Samsonite"/>
    </>);
};

export async function getServerSideProps(context) {
    let data = await fetch(`https://ksaworld.in/api/models`);
    let models = await data.json();

    return {
        props: {models}
    }
};

export default Catalogue;