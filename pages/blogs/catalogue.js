import Link from "next/link";
import Card from "../../components/Card";

export default function catalogue(req, res) {
    return (
        <>
            <Card></Card>
            <h2>
                <Link href="/">
                    Back To Home
                </Link>
            </h2>
        </>
    );
} 