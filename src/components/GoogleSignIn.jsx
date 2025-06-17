import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const ErrorToast = ({ error, onClose }) => {
  if (!error) return null;
  return (
    <div className="fixed top-6 right-6 bg-white border border-red-200 shadow-xl rounded-lg overflow-hidden z-50 max-w-sm animate-in slide-in-from-right-full duration-300">
      <div className="flex items-start gap-3 p-4">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
          <svg
            className="w-3 h-3 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{error}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const GoogleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const LoadingSpinner = () => (
  <div className="relative w-5 h-5 flex-shrink-0">
    <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
    <div className="absolute inset-0 border-2 border-transparent border-t-[#0A3549] rounded-full animate-spin"></div>
  </div>
);

export default function SignInWithGoogle() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearError = () => setError("");

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ access_token: tokenResponse.access_token })
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Login failed");
        }

        const userData = await res.json();
        // Do something with userData
        console.log("User logged in:", userData);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
    onError: (err) => {
      console.error(err);
      setError("Google login failed");
    }
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <ErrorToast error={error} onClose={clearError} />

      <div className="space-y-6">
        <button
          onClick={login}
          disabled={isLoading}
          className="w-full group relative flex items-center justify-center gap-3 bg-white border border-gray-300 text-[#0A3549] rounded-lg px-6 py-3.5 font-medium shadow-sm hover:shadow-md hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0A3549] focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-sm disabled:hover:border-gray-300 disabled:hover:bg-white"
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span className="text-[#0A3549] font-medium">Signing in...</span>
            </>
          ) : (
            <>
              <GoogleIcon />
              <span className="text-[#0A3549] font-medium group-hover:text-[#0A3549]/90 transition-colors duration-200">
                Continue with Google
              </span>
            </>
          )}
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-[#0A3549] hover:text-[#0A3549]/80 font-medium underline underline-offset-2"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[#0A3549] hover:text-[#0A3549]/80 font-medium underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
