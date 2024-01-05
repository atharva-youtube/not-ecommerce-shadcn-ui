"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const GITHUB_URL = "https://github.com/atharva-youtube/not-ecommerce-shadcn-ui";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex justify-between py-5 items-center">
      <div className="text-xl font-medium">Not Ecommerce</div>
      <div className="flex items-center gap-5">
        <Button
          variant="outline"
          onClick={() => (window.location.href = GITHUB_URL)}
        >
          GitHub
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
