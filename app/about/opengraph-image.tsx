import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "About FHB Tech Services Inc.";

export default function Image() {
  return renderOgImage(
    "A Canada-Based Technology Consulting Partner",
    "Learn about our approach to technical consulting and software development"
  );
}
