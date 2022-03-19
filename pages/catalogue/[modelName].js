import React from 'react';
import CardSlider from '../../components/CardSlider';
import PriceTag from '../../components/PriceTag';

export async function getStaticPaths({params}) {
    const resp = await fetch("https://luggage-models-ksa.s3.ap-south-1.amazonaws.com/index.json");
    const model = await resp.json();

    return {
        paths: model.map((model) => ({
            params: {modelName: model.name.toString() }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const modelNameInUrl = params.modelName.replace(/\s/g, '+')
    const resp = await fetch(`https://luggage-models-ksa.s3.ap-south-1.amazonaws.com/models/${modelNameInUrl}.json`);
    return {
        props: {
            model: await resp.json()
        }
    }
}

const ModelName = ({model}) => {
    return (
        <>
            <h2 className="text-center uppercase font-black p-8 text-5xl">{model.name}</h2>
            <PriceTag mrp={model.mrp} rrp={model.rrp} size={model.size}/>
            <CardSlider model={model} />
            <div className='bg-amber-500 mt-8'>
                <p className='m-auto block max-w-5xl p-10 text-xl'>
                    {model.description}
                </p>
            </div>
        </>
    );
}

export default ModelName;
