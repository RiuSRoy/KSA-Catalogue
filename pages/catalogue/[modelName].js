import React, { useState , useEffect } from 'react';
import CardSlider from '../../components/CardSlider';
import PriceTag from '../../components/PriceTag';
import { useRouter } from 'next/router';

const ModelName = () => {
    const {
        query: { modelName }
    } = useRouter();

    const [model, setModel] = useState(null);

    useEffect(() => {
        async function getModeldata() {
            const modelNameInUrl = modelName.replace(/\s/g, '+')
            const resp = await fetch(`https://luggage-models-ksa.s3.ap-south-1.amazonaws.com/models/${modelNameInUrl}.json`);
            setModel(await resp.json());
        }
        if(modelName) {
            getModeldata();
        }
    }, [modelName])

    if(!model) {
        return null;
    }

    return (
        <>
            <h2 className="text-center uppercase font-black p-8 text-5xl">{modelName}</h2>
            <PriceTag mrp={model.mrp} rrp={model.rrp} size={model.size}/>
            <CardSlider model={model} />
            <div className='bg-black text-stone-300 mt-8'>
                <p className='m-auto block max-w-5xl p-10 text-xl'>
                    {model.description}
                </p>
            </div>
        </>
    );
}

export default ModelName;
