export default function DashboardLayout(
    {
        children,
        analytics,
        interactions,
        notifications
    }:
        {
            children: React.ReactNode,
            analytics: React.ReactNode,
            interactions: React.ReactNode,
            notifications: React.ReactNode
        }
) {
    return (
        <>
            {children}

            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{analytics}</div>
                    <div>{interactions}</div>
                </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </>
    )
}   