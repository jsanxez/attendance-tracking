'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { symbols } from '@/app/ui/fonts'

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: 'dashboard'},
  { name: 'Attendance', href: '/dashboard/attendance', icon: 'calendar_month'},
]

export default function NavigationDrawer() {
  return (
    <aside className="bg-surface-container-low w-[360px] p-3 h-screen">
      {links.map(link => ( <NavItem key={link.name} link={link} />))}
    </aside>
  )
}

function NavItem({ link }) {
  const pathname = usePathname()
  const activeItem = pathname == link.href && 'bg-secondary-container icon-filled'

  return (
    <Link
      href={link.href}
      className={`${activeItem} text-sm font-medium text-on-surface-variant flex gap-3 items-center py-4 pl-4 pr-6 rounded-full`}
    >
      <span className={`${symbols.variable} font-symbols material-symbols`}>{link.icon}</span>
      {link.name}
    </Link>
  )
}
