'use client'

import { usePathname } from 'next/navigation'
import { symbols } from './fonts'

export default function Breadcrumb({ className='' }: { className?: string}) {
    const pathname = usePathname().slice(1)
    const paths = pathname.split('/')
    return (
        <p className={`${className} flex items-center gap-3 text-on-surface-variant`}>
            {paths.map(path => (
                <>
                    <span>{path}</span>
                    <span className={`${symbols.variable} font-symbols material-symbols`}>chevron_right</span>
                </>
            ))}
        </p>
    )
}
