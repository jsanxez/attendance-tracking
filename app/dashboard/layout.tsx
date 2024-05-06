
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-dashboard gap-9">
            <main className="bg-blue-200">{children}</main>
        </div>
    )
}