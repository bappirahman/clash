import React from "react";
import { cn } from "@workspace/ui/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text",
        className
      )}
    >
      Clash
    </h1>
  );
}

export default Logo;
