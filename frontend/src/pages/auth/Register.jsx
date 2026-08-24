import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);

    // API call will be added here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-on-surface">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-on-surface-variant">
            Register to get started with GST filing.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register("name", {
              required: "Full name is required",

              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },

              maxLength: {
                value: 60,
                message: "Name cannot exceed 60 characters",
              },

              pattern: {
                value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                message: "Enter a valid name",
              },
            })}
            error={errors.name?.message}
          />

          {/* Email */}

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

          {/* Mobile Number */}

          <Input
            label="Mobile Number"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="Enter your 10 digit mobile number"
            {...register("phone", {
              required: "Mobile number is required",

              pattern: {
                value: /^[6-9][0-9]{9}$/,
                message: "Enter a valid 10 digit mobile number",
              },

              onChange: (event) => {
                event.target.value = event.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
              },
            })}
            error={errors.phone?.message}
          />

          {/* Password */}

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            showPasswordToggle
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 128,
                message: "Password cannot exceed 128 characters",
              },
            })}
            error={errors.password?.message}
          />

          {/* Confirm Password */}

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            showPasswordToggle
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            error={errors.confirmPassword?.message}
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-medium text-on-surface hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
