import { CheckCircle2, Clock4, MapPin } from 'lucide-react'
import type { TrackingRecord } from '../types/tracking'
import { translate } from '../services/trackingService'

interface TimelineItemProps {
  record: TrackingRecord
}

const statusIcon = (name: string) => {
  if (/delivere/i.test(name)) {
    return <CheckCircle2 className="h-5 w-5 text-emerald-600" />
  }

  if (/process/i.test(name) || /transit/i.test(name)) {
    return <Clock4 className="h-5 w-5 text-amber-500" />
  }

  return <MapPin className="h-5 w-5 text-sky-600" />
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export default function TimelineItem({ record }: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm">
          {statusIcon(record.milestone_name || record.tracking_name)}
        </span>
        <span className="mt-3 h-full w-px bg-slate-200" />
      </div>

      <div className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{translate(record.tracking_name)}</h3>
            <p className="mt-1 text-sm text-slate-500">{translate(record.milestone_name)}</p>
          </div>
          <span className="whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm">
            {formatDate(record.actual_time)}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{translate(record.description)}</p>
        {record.current_location?.location_name || record.current_location?.full_address ? (
          <div className="mt-4 text-sm text-slate-500">
						<p className="font-medium text-slate-800">Localização atual</p>  
						<div className="mt-1 flex items-start gap-2 text-sm text-slate-500">
							<MapPin className="mt-1 h-4 w-4" />
							<div>
								{record.current_location.location_name && <p>{record.current_location.location_name}</p>}
								{record.current_location.full_address && <p>{record.current_location.full_address}</p>}
							</div>
						</div>
          </div>
        ) : null}

        {record.next_location?.location_name || record.next_location?.full_address ? (
					<div className="mt-4 text-sm text-slate-500">
						<p className="font-medium text-slate-800">Próxima parada</p>  
						<div className="mt-1 flex items-start gap-2 text-sm text-slate-500">
							<MapPin className="mt-1 h-4 w-4" />
							<div>
								{record.next_location.location_name && <p>{record.next_location.location_name}</p>}
								{record.next_location.full_address && <p>{record.next_location.full_address}</p>}
							</div>
						</div>
					</div>
        ) : null}
      </div>
    </div>
  )
}
