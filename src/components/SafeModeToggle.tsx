import { useEffect, useState } from "react";
import { ModeToggle } from "./ThemeTogle";

function SafeModeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ModeToggle />;
}
export default SafeModeToggle;