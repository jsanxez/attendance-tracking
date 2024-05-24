import { Overview, OverviewItem } from '../ui/overview'
import List from '../ui/list'

export default function Page() {
    return(
        <main className="flex flex-col gap-6 mr-8">
            <div className='inline-flex gap-8 justify-between'>
                <Overview title="Asistencia total">
                    <OverviewItem iconName="person_check" label="Asistencias" counter="329" />
                    <OverviewItem iconName="person_cancel" label="Ausencias" counter="03" isError />
                </Overview>
                <Overview title="Puntualidad promedio">
                    <OverviewItem iconName="pace" label="Hora de ingreso" counter="7:45 AM" />
                    <OverviewItem iconName="history_toggle_off" label="Ingreso fuera de la hora" counter="15 min" isError />
                </Overview>
            </div>
            <div>
                <div>
                    <List />
                </div>
            </div>
        </main>
    )
}
