export default function Reviews({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    return (
        <>
            <h1>Product with {params.productId}</h1>
            <h1>review with {params.reviewId} </h1>
        </>
    )

}