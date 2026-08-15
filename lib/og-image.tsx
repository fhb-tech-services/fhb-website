import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Shared branded Open Graph / Twitter card image generator.
 * Used by app/opengraph-image.tsx and the per-route variants, and by
 * app/twitter-image.tsx (which re-exports the same routes), so every page
 * gets a correct, on-brand social preview instead of a blank card.
 */
export function renderOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          background: "linear-gradient(135deg, #070d18 0%, #0d1729 55%, #14413e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 48 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "#ffffff",
              color: "#070d18",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            FHB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#ffffff" }}>FHB Tech Services Inc.</div>
            <div style={{ fontSize: 18, color: "#93a9c7" }}>Toronto, Ontario · Canada</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 980,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "#a5e6d8",
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
