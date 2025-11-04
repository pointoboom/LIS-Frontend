"use client";

import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import * as htmlToImage from "html-to-image";

type Props = {
  targetId: string;
  filename?: string;
};

export default function ExportJpgButton({ targetId, filename = "report.jpg" }: Props) {
  const onExport = async () => {
    const node = document.getElementById(targetId);
    if (!node) return;
    // Temporarily add white background to ensure readable capture in dark mode
    const prevBg = node.style.backgroundColor;
    node.style.backgroundColor = "#ffffff";
    try {
      const dataUrl = await htmlToImage.toJpeg(node, {
        quality: 0.95,
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        style: { padding: "0.5in" },
      });
      const link = document.createElement("a");
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Export to JPG failed", e);
    } finally {
      node.style.backgroundColor = prevBg;
    }
  };

  return (
    <Button variant="outline" size="sm" className="print:hidden" onClick={onExport}>
      <ImageIcon className="mr-2 h-4 w-4" /> Export JPG
    </Button>
  );
}

