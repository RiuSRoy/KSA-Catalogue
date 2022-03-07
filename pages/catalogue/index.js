import Link from 'next/link';
import React from 'react';
import styles from "../../styles/Home.module.css"
import Image from 'next/image';
import ProductDisplay from '../../components/ProductDisplay';

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
            <h2 className='text-xl text-center pt-12 font-mono'>Click on the model you like to know more...</h2>
            <ProductDisplay models={this.state.models} brand="amt" brandName="American Tourister"/>
            <br/>
            <ProductDisplay models={this.state.models} brand="kam" brandName="Kamiliant by American Tourister"/>
            <br/>
            <ProductDisplay models={this.state.models} brand="sam" brandName="Samsonite"/>
        </>);
    }
}


export default Catalogue;