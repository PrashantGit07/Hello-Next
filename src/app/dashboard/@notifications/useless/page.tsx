
import Card from "@/Components/Card";
import Link from "next/link";

export default function UselessPage() {
    return (
        <Card>
            <p>
                <Link href="/dashboard"
                    style={{ backgroundColor: "blue", color: "white" }}>
                    Dfeault
                </Link>
            </p>
            <p style={{ marginLeft: "10px" }}>Notifications</p>
        </Card>
    );
}