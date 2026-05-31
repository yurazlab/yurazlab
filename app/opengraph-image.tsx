import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yuraz Lab — AI-продукты для бизнеса";
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
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              fontSize: "22px",
              color: "#9B9BBA",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#22D3EE",
              }}
            />
            Открыт для новых проектов
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              color: "#EDEDF7",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              Создаю <span style={{ color: "#818CF8" }}>AI-продукты</span>
            </div>
            <div>для бизнеса</div>
          </div>

          <div
            style={{
              fontSize: "32px",
              color: "#22D3EE",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            25+ лет в продажах
            <span style={{ color: "#9B9BBA" }}>→</span>
            теперь строю AI-продукты
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
          <div
            style={{
              fontWeight: 700,
              color: "#EDEDF7",
              display: "flex",
              gap: "2px",
            }}
          >
            <span>Yuraz</span>
            <span style={{ color: "#6366F1" }}>Lab</span>
          </div>
          <div>yurazlab.ru · t.me/yurazlab</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
