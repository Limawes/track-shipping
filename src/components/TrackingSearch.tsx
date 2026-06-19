import { ArrowRight } from 'lucide-react'

interface TrackingSearchProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  loading: boolean
}

export default function TrackingSearch({ value, onChange, onSearch, loading }: TrackingSearchProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur-xl sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">Informe o código de rastreamento</h2>
      <p className="mt-2 text-sm text-slate-500">Use o código recebido na confirmação do pedido.</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <label className="sr-only" htmlFor="trackingCode">
          Código de rastreamento
        </label>
        <input
          id="trackingCode"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Digite aqui o código de rastreamento"
          className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />
        <button
          onClick={onSearch}
          disabled={loading || !value.trim()}
          className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {loading ? 'Buscando...' : 'Rastrear pedido'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
