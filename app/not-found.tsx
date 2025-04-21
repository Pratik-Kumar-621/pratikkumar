"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    if (seconds === 0) {
      router.replace("/");
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="bg-white/80 shadow-2xl rounded-2xl p-10 flex flex-col items-center max-w-lg w-full">
        <div className="mb-6">
          <svg
            className="w-20 h-20 text-blue-400 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="currentColor"
              strokeWidth="3"
              fill="#e0e7ff"
            />
            <path
              d="M16 30c1.5-2 4.5-2 6 0m6-10v-2a6 6 0 10-12 0v2"
              stroke="#6366f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="24" cy="34" r="2" fill="#6366f1" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center">
          404
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          The page you are looking for doesn&apos;t exist.
        </p>
        <p className="text-gray-500 mb-6 text-center">
          You will be redirected to the homepage in{" "}
          <span className="font-semibold text-blue-600">{seconds}</span> second
          {seconds !== 1 && "s"}.
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
          onClick={() => router.replace("/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
