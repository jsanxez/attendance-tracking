import { symbols } from '@/app/ui/fonts'
export default function Header() {
    return (
        <header className='flex items-center justify-between py-3 pr-8'>
            <div>
                <SearchBar />
            </div>
            <div className='inline-flex items-center'>
                <IconButton iconName='help'/>
                <IconButton iconName='notifications'/>
                <Monogram initial='A'/>
            </div>
        </header>
    )
}

 function Monogram( { initial }: {initial: string}) {
    return (
        <button className="text-base font-medium w-10 h-10 m-1 mr-0 text-on-primary-contanier bg-primary-container rounded-full">
            {initial}
        </button>
    )
 }

 function IconButton({ iconName }: {iconName: string}) {
    return (
        <button className="inline-flex items-center justify-center w-10 h-10 m-1 rounded-full hover:bg-on-surface-08">
            <span className={`${symbols.variable} font-symbols material-symbols`}>{iconName}</span>
        </button>
    )
 }

 function SearchBar() {
    return (
        <div className='inline-flex gap-1 p-1 bg-surface-container-high rounded-full overflow-hidden'>
            <IconButton iconName='search' />
            <input type="text" placeholder="Search text" className='bg-surface-container-high text-on-surface-variant' />
            <IconButton iconName='more_vert' />
        </div>
    )
 }