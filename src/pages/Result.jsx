import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const score = state?.score || 0;

  let level = "Beginner 🌱";
  if (score >= 3) level = "Intermediate 🚀";
  if (score === 5) level = "Advanced 🔥";

  return (
    <div className="text-center p-5">
      <h1>{level}</h1>
      <p>Skor: {score}/5</p>

      <a
        href={`https://wa.me/60123456789?text=Hi, anak saya dapat ${level}. Nak tuition.`}
        className="btn btn-success btn-lg"
      >
        WhatsApp Sekarang
      </a>
    </div>
  );
}
export default Result;