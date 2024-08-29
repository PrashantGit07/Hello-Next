import NotFound from "@/app/not-found"

export default function Doscs({ params }: {
    params: {
        slug: string[]
    }
}) {

    //implementing custom not found inside for a particular page

    if (params.slug.length > 2) {
        return NotFound()
    }
    if (params.slug?.length === 2) { //if there are two things provided in the url ->

        return (
            <>

                <h1>showing the feature {params.slug[0]} and concept {params.slug[1]}</h1>

            </>
        )
    }
    else if (params.slug?.length === 1) {
        return (
            <h1>Shwoing the feature {params.slug[0]}</h1>
        )
    }
    else {
        return <h1>Viewing docs page as no URL parameter was provided</h1> //this conditon will not be excuted , it will show 404 page not found
        //in order to show the parent page when no route is provided ,we use optional catch-all-segments
        //to do this we wrap one more [] around folder name ->>> [[...slug]] -->> this will show the parent page when no route paramenet is provided
    }
}