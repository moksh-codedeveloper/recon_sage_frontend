"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeTogle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div className="flex flex-wrap items-center gap-3 rounded-3xl border bg-background/80 px-6 py-3 backdrop-blur-md shadow-md">
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>

        <Link href="/project">
          <Button variant="ghost">About</Button>
        </Link>

        <Link href="/docs">
          <Button variant="ghost">Docs</Button>
        </Link>

        <Link href="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>

        <Link href="/premiums">
          <Button>Premium</Button>
        </Link>

        <ModeToggle />
      </div>
    </nav>
  );
}
