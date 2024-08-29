export default function Product({params}:{
    params:{
        productId:string,

    }
}){
    return <h1>Produt with id {params.productId} </h1>
}