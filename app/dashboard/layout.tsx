import NavDrawer from '@/app/ui/navigation/drawer'
import Header from '@/app/ui/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-dashboard gap-20">
            <NavDrawer />
            <div>
                <Header />
                <main className="bg-blue-200">{children}</main>
            </div>
        </div>
    )
}