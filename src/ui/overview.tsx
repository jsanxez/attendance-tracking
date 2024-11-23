import { symbols } from './fonts'

export function Overview({ title, children }) {
    return (
        <div className="w-fit text-center bg-surface-variant rounded-xl p-4">
            <h2 className='mb-6 text-xl text-on-surface'>{title}</h2>
            <div className='inline-flex gap-4'>{children}</div>
        </div>
    )
}

export function OverviewItem({ iconName, label, counter, isError=false }) {
    return (
        <div className="inline-flex items-center gap-2 p-4 pl-6 bg-surface rounded-xl">
            <Icon iconName={iconName} isError={isError} />  
            <div className="text-right text-on-surface">
                <p className="text-xl">{counter}</p>
                <p>{label}</p>
            </div>
        </div>
    )
}

export function Icon({ iconName, isError }) {
     const style = isError ? 'bg-error-container text-on-error-container'
                           : 'bg-primary-container text-on-primary-container'
    return (
        <span className={`${symbols.variable} font-symbols material-symbols ${style} p-3 rounded-full`}>
            {iconName}
        </span>
    )
}
