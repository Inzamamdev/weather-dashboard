import AuthCard from "./AuthCard";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, GitCommit } from "lucide-react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthDivider from "./AuthDivider";
import SocialButton from "./SocialButton";
import { useState } from "react";
export default function AuthSection() {
  const [isSignIn, setSignIn] = useState(false);
  const [input, setInput] = useState({
    Email: "",
    Password: "",
    Confirm_Password: "",
  });
  const navigate = useNavigate();

  const redirectSignIn = () => {
    setSignIn(!isSignIn);
    isSignIn ? navigate("/") : navigate("/login");
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  console.log(input);
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthCard
        title={isSignIn ? "Login To WeatherScope" : "Create An Account"}
      >
        <form action="" className="">
          <AuthInput
            onChange={handleInput}
            icon={Mail}
            type="mail"
            placeholder="Email address"
            name="Email"
            value={input.Email}
          />
          <AuthInput
            onChange={handleInput}
            icon={Lock}
            type="password"
            placeholder="Password"
            name="Password"
            value={input.Password}
          />
          {!isSignIn && (
            <AuthInput
              onChange={handleInput}
              icon={Lock}
              type="password"
              placeholder="Confirm Password"
              name="Confirm_Password"
              value={input.Confirm_Password}
            />
          )}
          <AuthButton
            text={isSignIn ? "Sign in" : "Create Account"}
            type="submit"
            color="bg-blue-600"
          />
        </form>
        <AuthDivider />
        <SocialButton text="Continue with GitHub" icon={GitCommit} />

        <p className="text-center mt-5 text-sm text-gray-600">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={redirectSignIn}
            className="text-blue-600 font-semibold"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </button>
        </p>
      </AuthCard>
    </div>
  );
}
