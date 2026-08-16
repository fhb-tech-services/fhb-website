import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "FHB Tech Services Inc. — Technology Consulting & Software Development";

export default function Image() {
  return renderOgImage(
    "Technology Solutions Built Around Your Business",
    "Software consulting & mobile application development for Canada and North America"
  );
}
