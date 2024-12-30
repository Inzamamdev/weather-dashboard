import AuthCard from "./AuthCard";
import { Mail, Lock, GitCommit } from "lucide-react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthDivider from "./AuthDivider";
import SocialButton from "./SocialButton";
export default function AuthSection() {
  return (
    <div className="flex justify-center bg-red-700">
      <AuthCard title="Create An Account">
        <form action="" className="">
          <AuthInput
            icon={Mail}
            type="mail"
            placeholder="Email address"
            name="Email"
          />
          <AuthInput
            icon={Lock}
            type="password"
            placeholder="Password"
            name="Password"
          />
          <AuthInput
            icon={Lock}
            type="password"
            placeholder="Confirm Password"
            name="Password"
          />
          <AuthButton text="Sign in" type="submit" color="bg-blue-600" />
        </form>
        <AuthDivider />
        <SocialButton text="Continue with GitHub" icon={GitCommit} />

        <p className="text-center mt-5 text-sm">
          Already have an account?{" "}
          <button className="text-blue-600 font-semibold">Signup</button>
        </p>
      </AuthCard>
    </div>
  );
}
