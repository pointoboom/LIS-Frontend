"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import type { LabReport } from "@/types/lab-report";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export const columns: ColumnDef<LabReport>[] = [
  {
    accessorKey: "report_id",
    header: "report_id",
    cell: ({ row }) => {
      const id = row.original.report_id;
      return (
        <Link href={`/dashboard/reports/${id}`} className="font-medium underline underline-offset-2">
          {id}
        </Link>
      );
    },
  },
  {
    accessorKey: "patient_id",
    header: "patient_id",
    cell: ({ row }) => <span className="text-zinc-500">{(row.getValue("patient_id") as string) || "—"}</span>,
  },
  {
    accessorKey: "alias_patient",
    header: "alias_patient",
  },
  {
    accessorKey: "filler_order",
    header: "filler_order",
  },
  {
    accessorKey: "service_id",
    header: "service_id",
  },
  {
    accessorKey: "service_text",
    header: "service_text",
  },
  {
    accessorKey: "received_at",
    header: "received_at",
    cell: ({ row }) => {
      const value = row.getValue("received_at") as string;
      let formatted = value;
      try {
        const normalized = typeof value === "string" ? value.replace(/\s\+\d{2}:\d{2}:\d{2}$/, "Z") : value;
        const m = moment(normalized);
        formatted = m.isValid() ? m.format("DD MMMM YYYY") : value;
      } catch {
        formatted = value;
      }
      return <span className="whitespace-nowrap text-zinc-500">{formatted}</span>;
    },
  },
  {
    id: "actions",
    header: "",
    enableSorting: false,
    cell: ({ row }) => {
      const id = row.original.report_id;
      return (
        <Link href={`/dashboard/reports/${id}`}>
          <Button variant="outline" size="sm" className="h-8">
            <Eye className="mr-2 h-4 w-4" /> View
          </Button>
        </Link>
      );
    },
  },
];
