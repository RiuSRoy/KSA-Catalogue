import React from 'react';

class Catalogue extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            models = []
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
            <div className={styles.grid}>
                {
                    this.state.models.map((model) => {
                        <a href={`/catalogue/${item.name}`} className={styles.card}>
                            <h2>{item.name}</h2>
                            
                            <p>{item.description}</p>
                        </a>
                    })
                }
            </div>
        </>);
    }
}


export default Catalogue;