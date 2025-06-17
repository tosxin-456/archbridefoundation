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
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [email, setEmail] = useState("");


  const handleEmailSubmit = (e) => {
    if (e) e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("Demo email login completed");
    }, 1500);
  };

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
    <div className="w-full max-w-sm mx-auto">
      <ErrorToast error={error} onClose={clearError} />

      <div className="space-y-5">
        {/* Google Login Button */}
        <button
          onClick={login}
          disabled={isLoading}
          className="w-full group relative flex items-center justify-center gap-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl px-5 py-3 font-medium text-sm shadow-sm hover:shadow-md hover:border-gray-300 hover:bg-gray-50/50 active:bg-gray-100 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm disabled:hover:border-gray-200 disabled:hover:bg-white disabled:active:scale-100"
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span className="text-gray-600">Signing in...</span>
            </>
          ) : (
            <>
              <GoogleIcon />
              <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-150">
                Continue with Google
              </span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-400 font-medium">or</span>
          </div>
        </div>

        {/* Email Section */}
        <div className="space-y-4">
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                isEmailFocused || email
                  ? "top-2 text-xs text-blue-600 font-medium"
                  : "top-1/2 -translate-y-1/2 text-sm text-gray-500"
              }`}
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit(e)}
              className={`w-full rounded-xl border bg-white px-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                isEmailFocused || email
                  ? "pt-6 pb-2 border-blue-300 focus:border-blue-500 focus:ring-blue-500/20"
                  : "py-3 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
              }`}
            />
          </div>

          <button
            onClick={handleEmailSubmit}
            disabled={!email || isLoading}
            className="w-full bg-blue-600 text-white rounded-xl px-5 py-3 font-medium text-sm shadow-sm hover:bg-blue-700 hover:shadow-md active:bg-blue-800 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:hover:shadow-sm disabled:active:scale-100"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                <span>Sending...</span>
              </div>
            ) : (
              "Continue with Email"
            )}
          </button>
        </div>

        {/* Terms */}
        <div className="pt-2">
          <p className="text-xs text-gray-400 leading-relaxed text-center">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-150"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-150"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
