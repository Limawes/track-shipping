import { MapPin, Package, Sparkles } from 'lucide-react'
import type { TrackingData, TrackingRecord } from '../types/tracking'
import { translate } from '../services/trackingService'

interface TrackingCardProps {
  data: TrackingData
}

const deliveryTypeLabel = (type: number) => {
  switch (type) {
    case 1:
      return 'Entrega residencial'
    case 2:
      return 'Entrega em loja'
    default:
      return 'Entrega padrão'
  }
}

const formatDate = (record: TrackingRecord) => {
  const date = new Date(record.actual_time * 1000)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export default function TrackingCard({ data }: TrackingCardProps) {
  const records = data.sls_tracking_info.records
  const latest = records[0]

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-sky-600">Pedido</span>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {data.sls_tracking_info.sls_tn}
          </h1>
          <p className="mt-2 text-sm text-slate-500">Pedido nº {data.sls_tracking_info.client_order_id}</p>
        </div>
        <div className="grid gap-4 sm:w-auto sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-4 text-sm">
            <p className="font-semibold text-slate-800">Tipo de entrega</p>
            <p className="mt-2 text-slate-600">{deliveryTypeLabel(data.fulfillment_info.deliver_type)}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4 text-sm">
            <p className="font-semibold text-slate-800">Última atualização</p>
            <p className="mt-2 text-slate-600">{translate(latest?.tracking_name || 'Sem atualização')}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-5">
          <div className="flex items-center gap-3 text-sky-600">
            <Package className="h-5 w-5" />
            <span className="text-sm font-medium">Status atual</span>
          </div>
          <p className="mt-3 text-lg font-semibold text-slate-900">{translate(latest?.milestone_name || 'Indisponível')}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <div className="flex items-center gap-3 text-emerald-600">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Descrição</span>
          </div>
          <p className="mt-3 text-slate-600">{latest?.description || 'Sem detalhes'}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <div className="flex items-center gap-3 text-slate-600">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Atualizado em</span>
          </div>
          <p className="mt-3 text-slate-600">{latest ? formatDate(latest) : 'Sem data'}</p>
        </div>
      </div>
    </div>
  )
}
