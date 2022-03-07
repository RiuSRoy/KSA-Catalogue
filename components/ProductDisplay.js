import styles from "../styles/Home.module.css"
import Link from 'next/link';
import Image from 'next/image';

const ProductDisplay = (props) => {
    const { models } = props;
    // const { modelId } = props;
    // const { imgWidth } = props;
    // const { imgHeight } = props;
    const { brand } = props;
    const { brandName } = props;
    return (
        <>
            <h2 className="text-center text-4xl my-8 font-extrabold">{brandName}</h2>
            <div className={styles.grid}>
                {
                    models.filter(item => item.brand == brand).map(model => {
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
        </>
    )
}

export default ProductDisplay;