import Setslayout from "./setslayout";
export default function Page({ params }) {
    const setsid = params.setsid
    return (
        <Setslayout params={params} />
    )
}