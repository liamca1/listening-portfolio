import { useTheme } from "next-themes";
import Image from "next/image";

export default function Button() {
  const { theme, setTheme } = useTheme();
  return (
    <Image
      src={theme === "dark" ? "/logowhite.svg" : "/logoblack.svg"}
      className="cursor-pointer p-[3px] justify-self-end"
      width="20"
      height="20"
      alt="light dark icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
