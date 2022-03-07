import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PriceTag(props) {
    const {mrp} = props;
    const {rrp} = props;
    const {size} = props;
    const sizeTag = ["Cabin-Size", "Medium-Size", "Large-Size"];
    const tab = () => {
        let content = [];
        for(let i = 0; i < 3; ++i) {
            content.push(<div className="rounded-xl py-2 sm:px-8 block text-center m-1 bg-transparent border-2 border-black min-w-max">
                            <h3>{sizeTag[i]}</h3>
                            <p className="font-semibold">{size[i]} cm</p>
                            <p>MRP: <scan className="line-through">&#8377; {mrp[i]} </scan></p>
                            <p className="font-black text-2xl">&#8377; {rrp[i]}.00</p>
                        </div>);
        }
        return content;
    }
    
  return (
    <div className="flex flex-col sm:flex-row mx-8 place-content-center justify-around lg:mx-48">
        {tab()}
    </div>
  )
}
