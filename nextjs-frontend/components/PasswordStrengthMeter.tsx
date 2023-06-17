"use client";

import clsx from "clsx";
import { useMemo } from "react";

enum PasswordStrength {
  TooShort = 0,
  Weak = 1,
  Good = 2,
  Strong = 3,
  VeryStrong = 4,
}

function calcStrength(password: string): PasswordStrength {
  if (!password) {
    return PasswordStrength.TooShort;
  }

  if (password.length < 8) {
    return PasswordStrength.Weak;
  }

  if (password.length < 12) {
    return PasswordStrength.Good;
  }

  if (password.length < 16) {
    return PasswordStrength.Strong;
  }

  return PasswordStrength.VeryStrong;
}

function strengthText(passwordStrength: PasswordStrength): string {
  switch (passwordStrength) {
    case PasswordStrength.TooShort:
      return "Too short";

    case PasswordStrength.Weak:
      return "Weak";

    case PasswordStrength.Good:
      return "Good";

    case PasswordStrength.Strong:
      return "Strong";

    case PasswordStrength.VeryStrong:
      return "Very strong";

    default:
      return "";
  }
}

export type PasswordStrengthMeterProps = {
  password: string;
};

export default function PasswordStrengthMeter({
  password,
}: PasswordStrengthMeterProps) {
  const calculatedPasswordStrength = useMemo<number>(() => {
    return calcStrength(password);
  }, [password]);

  return (
    <div className="flex h-4 items-center gap-1">
      <Stripe isActive={calculatedPasswordStrength >= PasswordStrength.Weak} />
      <Stripe isActive={calculatedPasswordStrength >= PasswordStrength.Good} />
      <Stripe
        isActive={calculatedPasswordStrength >= PasswordStrength.Strong}
      />
      <Stripe
        isActive={calculatedPasswordStrength >= PasswordStrength.VeryStrong}
      />

      {calculatedPasswordStrength > PasswordStrength.TooShort && (
        <div className="ml-1 text-xs">
          {strengthText(calculatedPasswordStrength)}
        </div>
      )}
    </div>
  );
}

type StripProps = {
  isActive: boolean;
};

function Stripe({ isActive }: StripProps) {
  return (
    <div
      className={`
        h-1
        w-12
        rounded-full

        ${clsx({
          "bg-zinc-800": isActive,
          "bg-gray-200": !isActive,
        })}
      `}
    ></div>
  );
}
