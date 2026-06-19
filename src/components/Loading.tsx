export default function Loading() {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="animate-pulse space-y-6">
        <div className="h-5 w-48 rounded-full bg-slate-200" />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="h-28 rounded-[28px] bg-slate-200" />
          <div className="h-28 rounded-[28px] bg-slate-200" />
          <div className="h-28 rounded-[28px] bg-slate-200" />
        </div>
        <div className="space-y-4">
          <div className="h-12 rounded-[28px] bg-slate-200" />
          <div className="h-12 rounded-[28px] bg-slate-200" />
          <div className="h-12 rounded-[28px] bg-slate-200" />
        </div>
      </div>
    </div>
  )
}
