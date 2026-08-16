import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Portfolio — FHB Tech Services Inc.";

export default function Image() {
  return renderOgImage(
    "Case Studies & Delivered Projects",
    "Mobile applications, software consulting, and system integration work"
  );
}
