import { title } from "process";

export const metadata = {
    title: "Profile Layout"

}

export default function ProfileLayout({ children }: {
    children: React.ReactNode
}) {
    return (

        <>
            <header>

                <h1>this is profile page layout</h1>
            </header>

            <main>{children}</main>
        </>
    )
}