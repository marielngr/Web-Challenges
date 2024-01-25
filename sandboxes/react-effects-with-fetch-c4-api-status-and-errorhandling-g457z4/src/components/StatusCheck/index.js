import "./StatusCheck.css";
import { useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatus] = useState("⁉️");

  async function handleCheckApiStatus() {
    setStatus("⏳");
    try {
      const response = await fetch(apiStatusUrl);
      console.log(response.ok);
      setStatus(response.ok ? "✅" : "❌");
    } catch (error) {
      setStatus("🚨");
    }
  }
  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
