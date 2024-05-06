'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: 'Dashboard', href: '/dashboard'},
  { name: 'Attendance', href: '/dashboard/attendance'},
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
  const isActive = pathname == link.href && 'bg-secondary-container'
  return (
    <Link
      href={link.href}
      className={`text-sm font-medium text-on-surface-variant ${isActive} block py-4 pl-4 pr-6 rounded-full`}
    >
    {link.name}
    </Link>
  )
}
