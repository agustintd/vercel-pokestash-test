import Cardslayout from "./cardslayout";
export default function Page({ params }) {
    const cardsid = params.cardsid
    return (
        <Cardslayout params={params} />
    )
}