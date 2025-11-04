"use client";

import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import * as htmlToImage from "html-to-image";

type Props = {
  targetId: string;
  filename?: string;
};

export default function ExportPngButton({ targetId, filename = "report.png" }: Props) {
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
      const link = document.createElement("a");
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Export to PNG failed", e);
    } finally {
      node.style.backgroundColor = prevBg;
    }
  };

  return (
    <Button variant="outline" size="sm" className="print:hidden" onClick={onExport}>
      <ImageIcon className="mr-2 h-4 w-4" /> Export PNG
    </Button>
  );
}

