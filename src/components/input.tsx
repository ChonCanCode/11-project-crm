import * as React from "react";
import { cn } from "../utility/cn";

interface InputProps extends React.ComponentPropsWithRef<"input"> {}

function Input({ className, ...props }: InputProps) {
  return <input {...props} className={cn("", className)} />;
}
