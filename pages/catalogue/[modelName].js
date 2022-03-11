import React from 'react'; 
import CardSlider from '../../components/CardSlider';
import PriceTag from '../../components/PriceTag';

const ModelName = (props) => {
    if (!props.model) return <div>Loading...</div>
    let data = props.model;
    return (
        <>
            <h2 className="text-center uppercase font-black p-8 text-5xl">{data.name}</h2>
            <PriceTag mrp={data.mrp} rrp={data.rrp} size={data.size}/>
            <CardSlider modelName={data.name} />
            <div className='bg-black text-stone-300 mt-8'>
                <p className='m-auto block max-w-5xl p-10 text-xl'>
                    {data.description}
                </p>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { modelName } = context.query;
    let data = await fetch(`https://ksaworld.in/api/getModel?slug=${modelName}`);
    let model = await data.json();
    return {
        props: { model }
    }
}

export default ModelName;
