import * as React from "react";
import { cn } from "../utility/cn";

interface InputProps extends React.ComponentPropsWithRef<"input"> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
    />
  );
}

interface LabelProps extends React.ComponentPropsWithRef<"label"> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={cn("block mb-1 font-medium text-gray-700", className)}
    />
  );
}
