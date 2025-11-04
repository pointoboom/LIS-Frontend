"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import moment from "moment";
import PrintButton from "../print-button";
import ExportJpgButton from "../export-jpg-button";
import ExportPngButton from "../export-png-button";
import ExportPdfButton from "../export-pdf-button";
import { useParams } from "next/navigation";

type ReportDetail = {
  _id?: { $oid: string } | string;
  received_at?: { $date: { $numberLong: string } } | string;
  message_type?: string;
  msh?: { sending_app?: string; sending_fac?: string; timestamp?: string };
  pid?: { patient_id?: string; alt_patient_id?: string; alias_patient?: string; name?: string | null; dob?: string; sex?: string };
  orders?: Array<{
    obr?: {
      placer_order?: string;
      filler_order?: string;
      service?: { id?: string; text?: string };
      observation_datetime?: string;
    };
    observations?: Array<{
      set_id?: string;
      value_type?: string;
      id?: { id?: string; text?: string };
      value?: string;
      units?: { id?: string; text?: string };
      ref_range?: string;
      abnormal_flags?: string;
      status?: string;
    }>;
  }>;
};

export default function ReportPage() {
  const { id } = useParams() as { id: string };
  const [report, setReport] = useState<ReportDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://lisapi.entrywisesolutions.com/api/v1/lab-reports/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as ReportDetail;
        if (!cancelled) setReport(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load report");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-zinc-500">
            <Link href="/dashboard" className="underline underline-offset-2">Dashboard</Link>
            <span className="mx-2">/</span>
            <span>Report</span>
          </div>
          <div className="h-8 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-3 h-5 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-4 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-3 h-5 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-40 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }
  if (!report || error) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-zinc-500">
            <Link href="/dashboard" className="underline underline-offset-2">Dashboard</Link>
            <span className="mx-2">/</span>
            <span>Report</span>
          </div>
          <Link href="/dashboard" passHref>
            <Button variant="outline" size="sm">Back</Button>
          </Link>
        </div>
        <Card>
          <CardHeader className="p-4 pb-3">
            <CardTitle className="text-base">Report not found</CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-sm text-zinc-600 dark:text-zinc-400">
            {error ? `Error: ${error}` : "Could not load report details. Please try again later."}
          </CardContent>
        </Card>
      </div>
    );
  }

  const patient = report?.pid ?? {};
  const order = report?.orders?.[0]?.obr ?? {};
  const observations = report?.orders?.[0]?.observations ?? [];
  const receivedAt = (() => {
    const receivedRaw = report?.received_at as any;
    if (typeof receivedRaw === "string") return moment(receivedRaw).format("DD MMMM YYYY");
    if (receivedRaw?.$date?.$numberLong) return moment(Number(receivedRaw.$date.$numberLong)).format("DD MMMM YYYY");
    return "";
  })();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-zinc-500">
          <Link href="/dashboard" className="underline underline-offset-2">Dashboard</Link>
          <span className="mx-2">/</span>
          <span>Report</span>
        </div>
        <div className="flex items-center gap-2 print:hidden">
          <ExportJpgButton targetId="report-export" filename={`report-${id}.jpg`} />
          <ExportPngButton targetId="report-export" filename={`report-${id}.png`} />
          <ExportPdfButton targetId="report-export" filename={`report-${id}.pdf`} />
          <PrintButton />
          <Link href="/dashboard" passHref>
            <Button variant="outline" size="sm">Back</Button>
          </Link>
        </div>
      </div>

      <div id="report-export" className="space-y-4">
      {/* Export/Header block */}
      <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">Laboratory Information System</div>
            <div className="text-base font-semibold text-zinc-900">Laboratory Report</div>
          </div>
          <div className="text-right text-xs text-zinc-600">
            <div>Report ID: {String(id)}</div>
            <div>Generated: {moment().format("DD MMMM YYYY")}</div>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader className="p-4 pb-3">
          <CardTitle className="text-base">
            {order?.service?.id || "Service"} • {order?.service?.text || "Report"}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 p-4 text-sm sm:grid-cols-2">
          <div>
            <div className="text-zinc-500">Alias Patient</div>
            <div className="font-medium">{patient?.alias_patient || "—"}</div>
          </div>
          <div>
            <div className="text-zinc-500">Patient ID</div>
            <div className="font-medium">{patient?.patient_id || "—"}</div>
          </div>
          <div>
            <div className="text-zinc-500">Filler Order</div>
            <div className="font-medium">{order?.filler_order || "—"}</div>
          </div>
          <div>
            <div className="text-zinc-500">Received At</div>
            <div className="font-medium">{receivedAt || "—"}</div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="p-4 pb-3">
          <CardTitle className="text-sm">Observations</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-zinc-50 dark:bg-zinc-950">
              <TableRow className="hover:bg-transparent">
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Ref Range</TableHead>
                <TableHead>Flag</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {observations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-zinc-500">No observations</TableCell>
                </TableRow>
              ) : (
                observations.map((obx, i) => {
                  const code = obx?.id?.id || "";
                  const name = obx?.id?.text || "";
                  const value = obx?.value ?? "";
                  const units = obx?.units?.id || obx?.units?.text || "";
                  const ref = obx?.ref_range || "";
                  const flag = obx?.abnormal_flags || "";
                  const status = obx?.status || "";
                  const isAbn = flag && flag !== "N";
                  // Attachment detection (Base64 images/PDFs in OBX)
                  const strVal = String(value);
                  const hasBase64 = strVal.includes("Base64^");
                  let attachment: { kind: "image" | "pdf"; src: string } | null = null;
                  if (hasBase64) {
                    const base64 = strVal.split("Base64^").pop()?.trim() || "";
                    // Detect PDF vs JPEG (JVBERi0 = %PDF, /9j/ = JPEG)
                    const mime = base64.startsWith("JVBERi0") || strVal.toLowerCase().includes("pdf")
                      ? "application/pdf"
                      : "image/jpeg";
                    const uri = `data:${mime};base64,${base64}`;
                    attachment = mime === "application/pdf" ? { kind: "pdf", src: uri } : { kind: "image", src: uri };
                  }
                  return (
                    <TableRow key={`${code}-${i}`}>
                      <TableCell className="font-medium">{code}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell className={isAbn ? "text-rose-600" : undefined}>
                        {attachment ? (
                          attachment.kind === "image" ? (
                            <a href={attachment.src} target="_blank" rel="noreferrer">
                              <img src={attachment.src} alt={name || code || "attachment"} className="h-16 w-16 rounded object-cover ring-1 ring-zinc-200 dark:ring-zinc-800" />
                            </a>
                          ) : (
                            <a href={attachment.src} target="_blank" rel="noreferrer" className="underline underline-offset-2">Open PDF</a>
                          )
                        ) : (
                          <>{value}</>
                        )}
                      </TableCell>
                      <TableCell>{units}</TableCell>
                      <TableCell className="text-zinc-500">{ref}</TableCell>
                      <TableCell>
                        {flag ? (
                          <span className={isAbn ? "rounded-full bg-rose-100 px-2 py-0.5 text-xs text-rose-700 dark:bg-rose-900/30 dark:text-rose-300" : "rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}>
                            {flag}
                          </span>
                        ) : (
                          "—"
                        )}
                      </TableCell>
                      <TableCell className="text-zinc-500">{status}</TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {/* Footer block for export */}
      <div className="rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-white">
        Generated by LIS • {moment().format("DD MMMM YYYY")}
      </div>
      </div>
    </div>
  );
}
