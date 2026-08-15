import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Services — FHB Tech Services Inc.";

export default function Image() {
  return renderOgImage(
    "Technology Services Built for Real Business Outcomes",
    "Consulting, mobile, web, cloud, modernization, AI & automation, and staff augmentation"
  );
}
