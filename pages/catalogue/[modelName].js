import React, { useEffect, useState } from 'react'; 
import { useRouter } from "next/router";
import CardSlider from '../../components/CardSlider';
import PriceTag from '../../components/PriceTag';

const ModelName = () => {
    const [modelName, setModelName] = useState("");
    const [modelDesc, setModelDesc] = useState("");
    const [modelMRP, setModelMRP] = useState([]);
    const [modelRRP, setModelRRP] = useState([]);
    const [modelSize, setModelSize] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        const { modelName } = router.query;
        fetch(`/api/getModel?slug=${modelName}`)
        .then((res) => res.json())
        .then((modelsResponse) => {
            setModelName(modelName);
            setModelDesc(modelsResponse.description);
            setModelMRP(modelsResponse.mrp);
            setModelRRP(modelsResponse.rrp);
            setModelSize(modelsResponse.size);
        });
      }, [router.isReady]);
    
    return (
        <>
            <h2 className="text-center uppercase font-black p-8 text-5xl">{modelName}</h2>
            <PriceTag mrp={modelMRP} rrp={modelRRP} size={modelSize}/>
            <CardSlider modelName={modelName} />
            <div className='bg-black text-stone-300 mt-8'>
                <p className='m-auto block max-w-5xl p-10 text-xl'>
                    {modelDesc}
                </p>
            </div>
        </>
    );
}

export default ModelName;
