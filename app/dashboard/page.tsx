export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import type { LabReport } from "@/types/lab-report";
import { columns } from "./columns";
import { apiBase } from "@/lib/api";

async function getReports(): Promise<LabReport[]> {
  try {
    const res = await fetch(`${apiBase()}/api/v1/lab-reports`, { cache: "no-store" });
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
      {/* <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Patients", value: "12,480", delta: "+2.1%" },
          { label: "Pending Orders", value: "324", delta: "-0.8%" },
          { label: "Critical Results", value: "18", delta: "+0.3%" },
          { label: "Avg. TAT", value: "6.2h", delta: "-5.4%" },
        ].map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="p-4">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{kpi.label}</div>
              <div className="mt-2 flex items-baseline justify-between">
                <div className="text-2xl font-semibold tracking-tight">{kpi.value}</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">{kpi.delta}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section> */}

      {/* Content grid */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-1">
        {/* Reports datatable (matches requested structure) */}
        <Card className="overflow-hidden lg:col-span-2">
          <CardHeader className="p-4 pb-3">
            <CardTitle className="text-sm">Recent Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <DataTable columns={columns} data={reports} searchPlaceholder="Search reports..." />
          </CardContent>
        </Card>
        {/* <Card>
          <CardHeader className="p-4 pb-3">
            <CardTitle className="text-sm">Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
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
          </CardContent>
        </Card> */}
      </section>
    </div>
  );
}
