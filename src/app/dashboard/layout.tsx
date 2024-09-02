export default function DashboardLayout(
    {
        children,
        analytics,
        interactions,
        notifications,
        login
    }:
        {
            children: React.ReactNode,
            analytics: React.ReactNode,
            interactions: React.ReactNode,
            notifications: React.ReactNode,
            login: React.ReactNode
        }
) {
    const isLoggedIn = true
    return isLoggedIn ? (
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
    ) : (
        <p>Login Please</p>
    )
}   