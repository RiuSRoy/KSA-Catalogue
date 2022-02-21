import { useRouter } from "next/router";

const modelName = () => {
    const router = useRouter()
    const {modelName} = router.query
    return (
        <h1 className="text-center uppercase font-extrabold">{modelName}</h1>
    )
}

export default modelName;