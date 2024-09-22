import Link from "next/link";
import { Button } from "@/components/ui/button";
// import AuthPopup from "./AuthPopup";
// import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <Link href={`/`}>
        <div className="flex items-center space-x-2">
          <img src={"logo.svg"} alt="website-logo" className="w-9" />
          <span className="text-xl font-bold text-black -tracking-tighter">
            Code_it_Online
          </span>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          href="/dashboard"
          className="text-sm font-medium text-muted-foreground hover:text-primary mr-5"
        >
          My Dashboard
        </Link>
        <Button variant="outline" className="text-black" asChild>
          <Link href="/login">Login</Link>
          {/* <AuthPopup /> */}
        </Button>
        <Button asChild>
          <Link href="/signup">Create Account</Link>
        </Button>
        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}
