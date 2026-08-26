import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "sonner";
import { loginUser } from "../../services/mockAuth";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = loginUser(data.email, data.password);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    login(result.user);
    toast.success(`Welcome back, ${result.user.name}!`);
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#212C43] via-[#182338] to-[#0F172A]">
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#334566]/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#2B3854]/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-6">
        <div className="w-full max-w-md">
          {/* Back to home */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </button>

          {/* Login card */}
          <div className="rounded-2xl border border-white/20 bg-white/95 p-7 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-9">
            {/* Brand */}
            <div className="mb-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#212C43] text-sm font-bold text-white shadow-sm">
                  K
                </div>

                <div>
                  <p className="text-lg font-semibold leading-none text-[#212C43]">
                    Kartsho
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    GST Filing Platform
                  </p>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2 text-[#212C43]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-medium">Secure sign in</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Welcome back
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Login to continue with your GST filing.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Email"
                type="email"
                variant="light"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 254,
                    message: "Email address is too long",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                error={errors.email?.message}
              />

              <Input
                label="Password"
                type="password"
                variant="light"
                placeholder="Enter your password"
                showPasswordToggle
                {...register("password", {
                  required: "Password is required",
                  maxLength: {
                    value: 128,
                    message: "Password is too long",
                  },
                })}
                error={errors.password?.message}
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-[#212C43] transition-colors hover:text-[#334566] hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full !bg-[#212C43] !text-white hover:!bg-[#182338]"
              >
                Login
              </Button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-medium text-[#212C43] transition-colors hover:text-[#334566] hover:underline"
              >
                Create an account
              </button>
            </p>
          </div>

          <p className="mt-5 text-center text-xs text-white/50">
            Your information is protected and handled securely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
