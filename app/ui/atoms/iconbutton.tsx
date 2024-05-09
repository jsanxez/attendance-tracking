import { symbols } from '../fonts'

export default function IconButton({ iconName='settings', enabled=false }) {
    const iconFilled = enabled && 'icon-filled'
    return (
        <button className={`${iconFilled} w-12 h-12 inline-flex items-center justify-center`}>
            <p className="w-10 h-10 inline-flex items-center justify-center hover:bg-on-surface-08 active:bg-on-surface-12 rounded-full">
                <span className={`${symbols.variable} font-symbols material-symbols text-on-surface-variant`}>
                    {iconName}
                </span>
            </p>
        </button>
    )
}