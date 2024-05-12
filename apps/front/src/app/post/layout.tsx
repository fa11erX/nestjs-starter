export default function PostLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
        </main>
    )
}