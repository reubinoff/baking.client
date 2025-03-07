import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">React App</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" asChild>
              <Link href="/docs">Documentation</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/examples">Examples</Link>
            </Button>
          </div>

          <nav className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
