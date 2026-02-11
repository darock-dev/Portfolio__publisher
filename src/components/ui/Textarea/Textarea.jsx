import useScrollAnimation from "../../../hooks/useScrollAnimation";

export default function Textarea({ label, placeholder, isRequired = false, name, onChange }) {
  useScrollAnimation();

  return (
    <div className="flex flex-col scroll-animate">
      <div className="font-bold text-base md:text-xl mb-3">
        {label}
        <span className="text-blue-500 ml-1">{isRequired ? "*" : ""}</span>
      </div>
      <textarea
        className="h-50 md:h-75 border border-gray-200 rounded-lg px-3 py-4 md:px-4 md:py-5 text-sm md:text-base placeholder:text-gray-400"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        minLength={1}
        maxLength={500}
      />
    </div>
  );
}
