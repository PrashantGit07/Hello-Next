// app/profile/page.js (or profile/page.tsx if using TypeScript)

"use client";

import { useRouter } from "next/navigation"; // Use `next/navigation` for Next.js 13+

export default function Profile() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/about');
    };

    return (
        <>
            <h1>Profile Page</h1>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
