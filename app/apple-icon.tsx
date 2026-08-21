import { ImageResponse } from "next/og";

// Required for static export -- build-time render, no per-request data.
export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#29463a",
          color: "#827150",
          fontFamily: "serif",
          fontSize: 108,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
