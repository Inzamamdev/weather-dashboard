type AuthButtonProps = {
  text: string;
  type: "submit" | "button";
  color: string;
};

export default function AuthButton({ text, type, color }: AuthButtonProps) {
  return (
    <button
      type={type}
      className={`${color} w-full mt-5 py-2 rounded-md text-white font-bold hover:bg-blue-700`}
    >
      {text}
    </button>
  );
}
