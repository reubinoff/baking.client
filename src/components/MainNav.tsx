import { Home, Search, PlusSquare, Heart, User } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <a href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">BakersGram</span>
      </a>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <a href="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
          <Home className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Home</span>
        </a>
        <a
          href="/explore"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
        >
          <Search className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Explore</span>
        </a>
        <a
          href="/create"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
        >
          <PlusSquare className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Create</span>
        </a>
        <a
          href="/activity"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
        >
          <Heart className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Activity</span>
        </a>
        <a
          href="/profile"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
        >
          <User className="h-5 w-5 mr-1" />
          <span className="hidden md:inline">Profile</span>
        </a>
      </nav>
    </div>
  )
}

