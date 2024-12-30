import { LucideIcon } from "lucide-react";
type SocialButtonProps = {
  text: string;

  icon: LucideIcon;
};

export default function SocialButton({ text, icon: Icon }: SocialButtonProps) {
  return (
    <button className=" w-full flex items-center justify-center mt-5 py-2 rounded-md border border-gray-300 text-gray-800  hover:bg-gray-100">
      <Icon className="mx-2" />
      {text}
    </button>
  );
}
