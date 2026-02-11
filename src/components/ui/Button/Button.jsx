import useScrollAnimation from "../../../hooks/useScrollAnimation";

export default function Button({ text, color = "blue", onClick, animateDelay = 0 }) {
  useScrollAnimation();

  return (
    <button
      className={`${color === "blue" ? "btn-blue" : "btn-white"} btn-base scroll-animate`}
      onClick={onClick}
      style={{ transitionDelay: `${animateDelay}s` }}
    >
      {text}
    </button>
  );
}
