import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // API call will be added later
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-on-surface">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-on-surface-variant">
            Login to continue with your GST filing.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            type="email"
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
              className="text-sm font-medium text-on-surface hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-medium text-on-surface hover:underline"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
