export const dynamic = "force-dynamic";

type LabReport = {
  report_id: string;
  patient_id: string;
  alias_patient: string;
  filler_order: string;
  service_id: string;
  service_text: string;
  received_at: string;
};

async function getReports(): Promise<LabReport[]> {
  try {
    const res = await fetch(
      "https://lisapi.entrywisesolutions.com/api/v1/lab-reports",
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = (await res.json()) as LabReport[];
    if (!Array.isArray(data)) throw new Error("Invalid response shape");
    return data;
  } catch (e) {
    return [];
  }
}

export default async function DashboardPage() {
  const reports = await getReports();

  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Patients", value: "12,480", delta: "+2.1%" },
          { label: "Pending Orders", value: "324", delta: "-0.8%" },
          { label: "Critical Results", value: "18", delta: "+0.3%" },
          { label: "Avg. TAT", value: "6.2h", delta: "-5.4%" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900"
          >
            <div className="text-xs text-zinc-500 dark:text-zinc-400">{kpi.label}</div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="text-2xl font-semibold tracking-tight">{kpi.value}</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400">{kpi.delta}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Content grid */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Reports datatable (matches requested structure) */}
        <div className="lg:col-span-2 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 p-4 text-sm font-medium dark:border-white/10">
            Recent Reports
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400">
                <tr>
                  <th className="px-4 py-3 font-medium">report_id</th>
                  <th className="px-4 py-3 font-medium">patient_id</th>
                  <th className="px-4 py-3 font-medium">alias_patient</th>
                  <th className="px-4 py-3 font-medium">filler_order</th>
                  <th className="px-4 py-3 font-medium">service_id</th>
                  <th className="px-4 py-3 font-medium">service_text</th>
                  <th className="px-4 py-3 font-medium">received_at</th>
                </tr>
              </thead>
              <tbody>
                {reports.length === 0 ? (
                  <tr>
                    <td className="px-4 py-6 text-center text-zinc-500" colSpan={7}>
                      No reports found.
                    </td>
                  </tr>
                ) : (
                  reports.map((r) => (
                    <tr key={r.report_id} className="border-t border-zinc-200 hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800/50">
                      <td className="px-4 py-3 font-medium">{r.report_id}</td>
                      <td className="px-4 py-3 text-zinc-500">{r.patient_id || "—"}</td>
                      <td className="px-4 py-3">{r.alias_patient}</td>
                      <td className="px-4 py-3">{r.filler_order}</td>
                      <td className="px-4 py-3">{r.service_id}</td>
                      <td className="px-4 py-3">{r.service_text}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-zinc-500">{r.received_at}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity */}
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 p-4 text-sm font-medium dark:border-white/10">
            Activity
          </div>
          <ul className="divide-y divide-zinc-200 text-sm dark:divide-white/10">
            {[
              { who: "tech. ashton", what: "updated CBC for Jane Doe", when: "10m" },
              { who: "dr. nash", what: "acknowledged critical result", when: "54m" },
              { who: "sys", what: "auto-validated 42 results", when: "2h" },
              { who: "tech. ramos", what: "received specimen LIS-10283", when: "3h" },
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3 px-4 py-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <div className="flex-1">
                  <div className="text-zinc-900 dark:text-zinc-100">{a.what}</div>
                  <div className="text-xs text-zinc-500">{a.who} • {a.when} ago</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
