import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cake, Search, User, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Cake className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl hidden sm:inline-block">Baking Delights</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center relative max-w-sm w-full mx-4">
          <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
          <Input 
            placeholder="Search recipes..." 
            className="pl-9 w-full"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5 md:hidden" />
          </Button>
          <Button variant="outline" className="hidden sm:flex">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Recipe
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
