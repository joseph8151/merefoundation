import { ImageResponse } from "next/og";
import { orgInfo } from "@/data/site";

// Required for static export -- this image has no per-request data, so a
// single build-time render is safe.
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "96px",
          backgroundColor: "#29463A",
          color: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            letterSpacing: 6,
            color: "#B8A071",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {orgInfo.nameKo} · MERE FOUNDATION
        </div>
        <div style={{ display: "flex", fontSize: 200, fontWeight: 700, lineHeight: 1 }}>
          MERE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            marginTop: 36,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          PURE LOVE. REAL CHANGE.
        </div>
      </div>
    ),
    { ...size }
  );
}
