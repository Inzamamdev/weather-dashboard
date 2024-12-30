import { LucideIcon } from "lucide-react";
type AuthInputProps = {
  icon: LucideIcon;
  type: string;
  name: string;
  placeholder: string;
};

export default function AuthInput({
  icon: Icon,
  type,
  name,
  placeholder,
}: AuthInputProps) {
  return (
    <>
      <div className="flex items-center w-full rounded-md mt-5">
        <Icon className=" absolute ml-2 h-5 w-5 text-gray-400" />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="p-1 w-full pl-8 border-gray-300 border h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </>
  );
}
