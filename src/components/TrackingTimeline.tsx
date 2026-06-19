import type { TrackingRecord } from '../types/tracking'
import TimelineItem from '../components/TimelineItem'
import { useState } from 'react'

interface TrackingTimelineProps {
  records: TrackingRecord[]
}

export default function TrackingTimeline({ records }: TrackingTimelineProps) {
	const [checked, setChecked] = useState(false);
  if (!records.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm text-slate-600">Nenhuma movimentação encontrada.</p>
      </div>
    )
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="mb-8 flex items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Linha do tempo</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Histórico de movimentações</h2>
        </div>
        <div className="mt-4 text-sm text-slate-500">
        	<label className="flex items-center gap-2 mt-4 text-sm text-slate-600">
						<input 
							type="checkbox" 
							checked={checked} 
							onChange={(e) => setChecked(e.target.checked)}
						/>
						Todos os registros
					</label>	
        </div>
      </div>

      <div className="space-y-6">
        {records.map((record) => (
          !checked && record.display_flag === 1 
					? <TimelineItem key={record.tracking_code + record.actual_time} record={record} />
					: checked && <TimelineItem key={record.tracking_code + record.actual_time} record={record} />
        ))}
      </div>
    </div>
  )
}
