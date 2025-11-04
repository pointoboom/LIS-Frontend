"use client";

import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";

type Props = {
  targetId: string;
  filename?: string;
};

export default function ExportPdfButton({ targetId, filename = "report.pdf" }: Props) {
  const onExport = async () => {
    const node = document.getElementById(targetId);
    if (!node) return;
    const prevBg = node.style.backgroundColor;
    node.style.backgroundColor = "#ffffff";
    try {
      const dataUrl = await htmlToImage.toPng(node, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        style: { padding: "0.5in" },
      });

      const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const img = new Image();
      img.src = dataUrl;
      await img.decode().catch(() => {});

      // Fit image to page width and preserve aspect ratio
      const imgWidth = pageWidth;
      const scale = imgWidth / (img.naturalWidth || 1);
      const imgHeight = (img.naturalHeight || 1) * scale;

      let y = 0;
      if (imgHeight <= pageHeight) {
        pdf.addImage(dataUrl, "PNG", 0, y, imgWidth, imgHeight);
      } else {
        // Simple paginate by slicing the tall image into pages vertically
        // Draw the image multiple times with negative y offset to simulate slices
        let remaining = imgHeight;
        const sliceHeight = pageHeight;
        while (remaining > 0) {
          const h = Math.min(sliceHeight, remaining);
          // add page except first
          if (y > 0) pdf.addPage();
          pdf.addImage(dataUrl, "PNG", 0, -y, imgWidth, imgHeight);
          y += h;
          remaining -= h;
        }
      }

      pdf.save(filename);
    } catch (e) {
      console.error("Export to PDF failed", e);
    } finally {
      node.style.backgroundColor = prevBg;
    }
  };

  return (
    <Button variant="outline" size="sm" className="print:hidden" onClick={onExport}>
      <FileDown className="mr-2 h-4 w-4" /> Export PDF
    </Button>
  );
}

