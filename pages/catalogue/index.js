import React from 'react';
import ProductDisplay from '../../components/ProductDisplay';

export async function getStaticProps() {
    const resp = await fetch("https://luggage-models-ksa.s3.ap-south-1.amazonaws.com/index.json");
    return {
        props: {
            models: await resp.json()
        }
    }
}

const Catalogue = ({models}) => {
    return (<>
        <h2 className='text-xl text-center pt-12 font-mono'>Click on the model you like to know more...</h2>
        <ProductDisplay models={models} brand="sam" brandName="Samsonite"/>
        <br/>
        <ProductDisplay models={models} brand="amt" brandName="American Tourister"/>
        <br/>
        <ProductDisplay models={models} brand="kam" brandName="Kamiliant by American Tourister"/>
    </>);
};

export default Catalogue;