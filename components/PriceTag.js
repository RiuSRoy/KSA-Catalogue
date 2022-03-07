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
            content.push(<div className="rounded-xl py-2 sm:px-8 block text-center m-1 mx-4 bg-transparent border-2 border-black">
                            <h3 className='font-mono'>{sizeTag[i]}</h3>
                            <p className="font-semibold">{size[i]} cm</p>
                            <p className='font-extralight'>MRP: <scan className="line-through">&#8377; {mrp[i]} </scan></p>
                            <p className="font-black text-2xl">&#8377; {rrp[i]}.00</p>
                        </div>);
        }
        return content;
    }
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:mx-16">
        {tab()}
    </div>
  )
}
