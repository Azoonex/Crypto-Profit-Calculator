import React, { type ComponentPropsWithRef } from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  ComponentPropsWithRef<"input">
>(function input(props, ref) {
  return (
    <label htmlFor={props.id} className="flex flex-col gap-3">
      Type inside me
      <input
        {...props}
        className="text-sm leading-none font-medium border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
        ref={ref}
      />
    </label>
  );
});

Input.displayName = "Input";

export default Input;
