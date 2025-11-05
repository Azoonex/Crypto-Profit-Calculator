import React, { type ComponentPropsWithRef } from "react";
import { cn } from "./lib/utils";

interface typeButton {
  styleButton?: "default" | "outline";
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ComponentPropsWithRef<"button"> & typeButton
>(function Button(props, ref) {
  const { styleButton } = props;
  const buttonVariants = {
    default:
      " bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 focus:outline-none",
    outline:
      "m-3 px-6 shadow-lg shadow-emerald-300 btn btn-ghost inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border-2 border-1 border-emerald-300 bg-gray-50 sm:mt-0 sm:w-auto",
    ghost:""
  };

  const setStyleButton = styleButton
    ? buttonVariants[styleButton]
    : buttonVariants["default"];

  return (
    <button
      ref={ref}
      className={(cn(props.className), setStyleButton)}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
