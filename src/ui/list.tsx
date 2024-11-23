import IconButton from './atoms/iconbutton'

export default function List() {
    return (
        <div className="flex flex-col gap-6">
            <ListHeader title="Historial de asistencias" />
            <div>
                <h3 className="font-medium text-on-surface mb-4">Hoy</h3>
                <div className='rounded-xl overflow-hidden'>
                    <Item />
                </div>
                <h3 className="font-medium text-on-surface mt-4 mb-4">Abril 2024</h3>
                <div className='flex flex-col gap-[2px] rounded-xl overflow-hidden'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
}

function ListHeader({ title }) {
    return (
        <header className='flex items-center justify-between'>
            <h2 className='text-2xl text-on-surface'>{title}</h2>

            <div className='inline-flex gap-6'>
                <div>
                    <IconButton iconName='grid_view'/>
                    <IconButton iconName='view_list'/>
                    <IconButton iconName='calendar_view_month'/>
                </div>
                <div>
                    <IconButton iconName='sort'/>
                    <IconButton iconName='filter_alt'/>
                    <IconButton iconName='more_vert'/>
                </div>
            </div>
        </header>
    )
}

function Item() {
    return (
        <div className='flex justify-between bg-surface p-4 pr-6'>
            <div className='inline-flex gap-4'>
                <ItemIcon />
                <div className="inline-flex flex-col justify-between p-1">
                    <p className='font-medium text-on-surface'>07:45 AM</p>
                    <p className='text-xs text-on-surface-variant'>Hora de ingreso</p>
                </div>
            </div>
            <div className='bg-primary-container text-on-primary-container text-xs font-medium px-2 py-1  h-fit rounded-md'>A tiempo</div>
        </div>
    )
}

function ItemIcon() {
    return (
        <div className='inline-flex flex-col items-center justify-center w-12 h-12 font-medium text-on-surface-variant bg-surface-variant p-1 rounded-xl'>
            <span className="text-xs font-medium">Ene</span>
            <span className=''>26</span>
        </div>
    )
}
