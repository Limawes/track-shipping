import { useMemo, useState } from 'react'
import { getTracking } from '../services/trackingService'
import TrackingSearch from '../components/TrackingSearch'
import TrackingCard from '../components/TrackingCard'
import TrackingTimeline from '../components/TrackingTimeline'
import Loading from '../components/Loading'
import type { TrackingData, TrackingResponse } from '../types/tracking'

function formatMessage(code: string, empty: boolean) {
  if (!code.trim()) {
    return 'Informe um código para iniciar a busca.'
  }

  if (empty) {
    return 'Nenhum rastreamento encontrado para este código.'
  }

  return 'Use o campo acima para consultar seu pedido.'
}

export default function Home() {
  const [trackingCode, setTrackingCode] = useState('')
  const [data, setData] = useState<TrackingData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emptyResult, setEmptyResult] = useState(false)

  const pageMessage = useMemo(() => formatMessage(trackingCode, emptyResult), [trackingCode, emptyResult])

  const handleSearch = async () => {
    if (!trackingCode.trim()) return
    setLoading(true)
    setError(null)
    setEmptyResult(false)
    setData(null)

    try {
      const response: TrackingResponse = await getTracking(trackingCode.trim())

      if (response.retcode !== 0 || !response.data) {
        setEmptyResult(true)
      } else {
        const sorted = [...response.data.sls_tracking_info.records].sort((a, b) => b.actual_time - a.actual_time)
        const payload = {
          ...response.data,
          sls_tracking_info: {
            ...response.data.sls_tracking_info,
            records: sorted,
          },
        }
        setData(payload)
      }
    } catch (err) {
      setError('Falha ao consultar a API. Verifique o código ou tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative overflow-hidden pb-20 pt-10 sm:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hero-gradient opacity-80" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header className="relative z-10 rounded-[40px] border border-slate-200 bg-white/95 p-8 shadow-soft backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Track Shipping</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Rastreamento de pedidos em tempo real
              </h1>
              <p className="mt-4 max-w-2xl text-slate-600 sm:text-lg">
                Informe o código de rastreamento, consulte a transportadora e acompanhe o histórico completo do seu pedido.
              </p>
            </div>
          </div>
        </header>

        <section className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <TrackingSearch value={trackingCode} onChange={setTrackingCode} onSearch={handleSearch} loading={loading} />

          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-soft sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Status da busca</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{pageMessage}</p>

            {error ? (
              <div className="mt-6 rounded-3xl border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            {!loading && !data && !error && emptyResult ? (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Tente outro código para ver resultados diferentes.
              </div>
            ) : null}
          </div>
        </section>

        <section className="grid gap-8">
          {loading && <Loading />}

          {data ? (
            <div className="grid gap-8">
              <TrackingCard data={data} />
              <TrackingTimeline records={data.sls_tracking_info.records} />
            </div>
          ) : null}
        </section>
      </div>
    </main>
  )
}
