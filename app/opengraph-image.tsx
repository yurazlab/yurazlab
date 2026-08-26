import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Юрий Зуев — руководитель AI-проектов";
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
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,102,241,0.35) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 90% 90%, rgba(34,211,238,0.15) 0%, transparent 60%), #09090F",
          color: "#EDEDF7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "fit-content",
            padding: "10px 20px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            fontSize: "22px",
            color: "#9B9BBA",
          }}
        >
          <div style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#22D3EE" }} />
          Открыт к работе в команде
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "34px", fontWeight: 600, color: "#9B9BBA" }}>Юрий Зуев</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "78px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            <div>Руководитель</div>
            <div style={{ color: "#818CF8" }}>AI-проектов</div>
          </div>
          <div style={{ fontSize: "30px", color: "#22D3EE", fontWeight: 500 }}>
            AI-продукты и автоматизация бизнес-процессов
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: "24px",
            color: "#9B9BBA",
          }}
        >
          <div style={{ display: "flex", fontWeight: 700, color: "#EDEDF7" }}>
            <span>Yuraz</span><span style={{ color: "#6366F1" }}>Lab</span>
          </div>
          <div>yurazlab.ru · t.me/yurazlab</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
