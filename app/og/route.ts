import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>
          Ofir Giat
        </div>

        <div style={{ fontSize: 36, marginTop: 20, opacity: 0.9 }}>
          Backend Developer
        </div>

        <div style={{ fontSize: 28, marginTop: 40, opacity: 0.7 }}>
          Python · FastAPI · PostgreSQL · System Design
        </div>
      </div>
    ),
    size
  );
}
