import useScrollAnimation from "../../../hooks/useScrollAnimation";

export default function Input({
  label,
  type = "text",
  placeholder,
  isRequired = false,
  name,
  onChange,
}) {
  useScrollAnimation();

  return (
    <div className="flex flex-col scroll-animate">
      <div className="font-bold text-base md:text-xl mb-3">
        {label}
        <span className="text-blue-500 ml-1">{isRequired ? "*" : ""}</span>
      </div>
      <input 
        className="border border-gray-200 rounded-lg px-3 py-4 md:px-4 md:py-5 text-sm md:text-base placeholder:text-gray-400"
        type={type}
        placeholder={placeholder} 
        name={name} 
        onChange={onChange} />
    </div>
  );
}
