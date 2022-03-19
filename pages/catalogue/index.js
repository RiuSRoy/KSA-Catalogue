import React, { useState , useEffect } from 'react';
import ProductDisplay from '../../components/ProductDisplay';

const Catalogue = () => {

    const [models, setModels] = useState([]);

    useEffect(() => {
        fetch(`/api/getModels`)
        .then((res) => res.json())
        .then((modelsResponse) => {
            setModels(modelsResponse);
        });
    }, []);

    return (<>
        <h2 className='text-xl text-center pt-12 font-mono'>Click on the model you like to know more...</h2>
        <ProductDisplay models={models} brand="amt" brandName="American Tourister"/>
        <br/>
        <ProductDisplay models={models} brand="kam" brandName="Kamiliant by American Tourister"/>
        <br/>
        <ProductDisplay models={models} brand="sam" brandName="Samsonite"/>
    </>);
};

export default Catalogue;