import NavDrawer from '@/app/ui/navigation/drawer'
import Header from '@/app/ui/header'
import Breadcrumbs from '@/app/ui/breadcrumbs'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-dashboard gap-20">
            <NavDrawer />
            <div>
                <Header />
                <Breadcrumbs className='mt-4 text-sm' />
                <main className="bg-blue-200">{children}</main>
            </div>
        </div>
    )
}