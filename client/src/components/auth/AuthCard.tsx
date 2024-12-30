import React from "react";

type AuthCardProps = {
  children: React.ReactNode;
  title: string;
};

export default function AuthCard({ children, title }: AuthCardProps) {
  return (
    <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-md">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      {children}
    </div>
  );
}
