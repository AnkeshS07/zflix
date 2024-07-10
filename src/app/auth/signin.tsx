"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signIn("credentials", { email, password });
  };

  return (
    <div className="lg:min-w-[300px] w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
          style={{ backgroundColor: "#224957"}}
            className="bg-[#224957] rounded-[10px] px-4 py-2.5 text-sm text-white font-normal w-full"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="bg-[#224957] rounded-[10px] px-4 py-2.5 text-sm text-white font-normal w-full"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="remember" className="w-[18px] h-[17px] text-blue-600 bg-[#224957] border-[#224957] rounded-[5px] focus:ring-blue-500 me-2"></input>
          <label htmlFor="remember" className="text-sm font-normal text-white">Remember me</label>
        </div>
        <button type="submit" className="bg-[#2BD17E] rounded-[15px] py-[15px] px-7 text-base font-bold leading-6 text-white w-full">Login</button>
      </form>
    </div>
  );
};
export default SignIn;
