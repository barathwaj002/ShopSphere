function ProductSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="h-64 w-full bg-slate-700"></div>

      <div className="space-y-4 p-6">

        <div className="flex justify-between">
          <div className="h-4 w-20 rounded bg-slate-700"></div>
          <div className="h-4 w-16 rounded bg-slate-700"></div>
        </div>

        <div className="h-6 w-3/4 rounded bg-slate-700"></div>

        <div className="h-4 w-full rounded bg-slate-700"></div>

        <div className="h-4 w-2/3 rounded bg-slate-700"></div>

        <div className="h-8 w-24 rounded bg-slate-700"></div>

        <div className="flex gap-3">
          <div className="h-12 w-12 rounded-xl bg-slate-700"></div>
          <div className="h-12 flex-1 rounded-xl bg-slate-700"></div>
        </div>

      </div>
    </div>
  );
}

export default ProductSkeleton;