import Link from 'next/link';
import React from 'react';
import styles from "../../styles/Home.module.css"
import Image from 'next/image';

class Catalogue extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            models: []
        };
    }

    componentDidMount() {
        fetch('/api/models')
        .then((res) => res.json())
        .then((modelsResponse) => {
            this.setState({
                models: modelsResponse
            });
        });
    }

    render() {
        return (<>
            <h2 className='text-xl text-center p-12'>Click on the model you like to know more...</h2>
            <div className={styles.grid}>
                {
                    this.state.models.map(model => {
                        return (
                            <Link href={`/catalogue/${model.name}`} key={model.id} passHref>
                                <div className={styles.card} >
                                    <h2 className='uppercase text-center cursor-pointer'>{model.name}</h2>
                                    <Image src={`/${model.name}.png`} width={model.primaryImageWidth} height={model.primaryImageHeight} alt={model.name} />
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </>);
    }
}


export default Catalogue;