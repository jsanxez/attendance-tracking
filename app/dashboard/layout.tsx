import NavDrawer from '@/app/ui/navigation/drawer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-dashboard gap-9">
            <NavDrawer />
            <main className="bg-blue-200">{children}</main>
        </div>
    )
}