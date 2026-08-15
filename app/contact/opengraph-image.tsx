import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Contact FHB Tech Services Inc.";

export default function Image() {
  return renderOgImage(
    "Let's Talk About Your Project",
    "Get in touch to discuss technology consulting, development, or modernization"
  );
}
