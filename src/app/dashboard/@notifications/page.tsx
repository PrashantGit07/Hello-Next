import Card from "@/Components/Card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            <p>
                <Link href="/dashboard/useless"
                    style={{ backgroundColor: "blue", color: "white" }}>
                    use-less
                </Link>
            </p>
            <p style={{ marginLeft: "10px" }}>Notifications</p>
        </Card>
    );
}
