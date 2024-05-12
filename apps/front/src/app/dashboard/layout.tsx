import Sidebar from "../components/sidebar/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex min-h-screen">
            <div className="basis-1/5">
                <Sidebar />
            </div>
            <div className="basis-4/5">
                {children}
            </div>
        </main>
    )
}