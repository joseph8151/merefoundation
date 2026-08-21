import { ImageResponse } from "next/og";

// Required for static export -- build-time render, no per-request data.
export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
