import React from 'react';
import ProductDisplay from '../../components/ProductDisplay';
import Link from 'next/link';

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
        <h2 className='text-xl text-center py-12 font-mono'>Click on the model you like to know more...</h2>
        <ul className='space-y-2 sm:flex justify-center sm:space-x-4 sm:space-y-0 mx-4'>
            <li className='box-content w-full md:w-fit h-fit text-white bg-black text-center py-4 md:px-4 rounded'><Link href = "#sam">Samsonite</Link></li>
            <li className='box-content w-full md:w-fit h-fit bg-amber-500 text-center py-4 md:px-4 rounded'><Link href = "#amt">American Tourister</Link></li>
            <li className='box-content w-full md:w-fit h-fit text-white bg-black text-center py-4 md:px-4 rounded'><Link href = "#kam">Kamiliant</Link></li>
        </ul>
        <ProductDisplay models={models} brand="sam" brandName="Samsonite"/>
        <br/>
        <ProductDisplay models={models} brand="amt" brandName="American Tourister"/>
        <br/>
        <ProductDisplay models={models} brand="kam" brandName="Kamiliant by American Tourister"/>
    </>);
};

export default Catalogue;