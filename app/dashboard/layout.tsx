import NavDrawer from '@/src/ui/navigation/drawer'
import Header from '@/src/ui/header'
import Breadcrumbs from '@/src/ui/breadcrumbs'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-dashboard gap-8 bg-surface-container">
            <NavDrawer />
            <div>
                <Header />
                <Breadcrumbs className='mt-4 text-sm' />
                <main className="mt-8">{children}</main>
            </div>
        </div>
    )
}
