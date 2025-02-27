"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react"
import { MainNav } from "./components/MainNav"

interface Author {
  name: string
  username: string
  avatar: string
}

interface Post {
  id: number
  author: Author
  image: string
  title: string
  caption: string
  likes: number
  comments: number
  time: string
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("for-you")

  useEffect(() => {
    fetchPosts(activeTab)
  }, [activeTab])

  const fetchPosts = async (tab: string) => {
    setLoading(true)
    try {
      const response = await fetch(`https://baking.reubinoff.com/api/posts?feed=${tab}`)
      if (!response.ok) {
        throw new Error("Failed to fetch posts")
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      console.error("Error fetching posts:", err)
      setError("Failed to load posts. Please try again later.")
      // Fallback to sample data if API fails
      setPosts(samplePosts)
    } finally {
      setLoading(false)
    }
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handleLike = async (postId: number) => {
    try {
      const response = await fetch(`https://baking.reubinoff.com/api/posts/${postId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to like post")
      }

      // Update local state to reflect the like
      setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
    } catch (err) {
      console.error("Error liking post:", err)
    }
  }

  const handleSave = async (postId: number) => {
    try {
      const response = await fetch(`https://baking.reubinoff.com/api/posts/${postId}/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to save post")
      }

      // Could update UI to show saved status
    } catch (err) {
      console.error("Error saving post:", err)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8 lg:py-10">
          <Tabs defaultValue="for-you" className="mb-8" onValueChange={handleTabChange}>
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="for-you">For You</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="for-you" className="mt-6">
              {loading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : error ? (
                <div className="text-center p-8 text-red-500">{error}</div>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {posts.map((post) => (
                    <BakingPost key={post.id} post={post} onLike={handleLike} onSave={handleSave} />
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="following" className="mt-6">
              {loading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : error ? (
                <div className="text-center p-8 text-red-500">{error}</div>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {posts.map((post) => (
                    <BakingPost key={post.id} post={post} onLike={handleLike} onSave={handleSave} />
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="trending" className="mt-6">
              {loading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : error ? (
                <div className="text-center p-8 text-red-500">{error}</div>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {posts.map((post) => (
                    <BakingPost key={post.id} post={post} onLike={handleLike} onSave={handleSave} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

interface BakingPostProps {
  post: Post
  onLike: (postId: number) => void
  onSave: (postId: number) => void
}

function BakingPost({ post, onLike, onSave }: BakingPostProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <a href={`/profile/${post.author.username}`} className="font-semibold">
            {post.author.name}
          </a>
          <div className="text-xs text-muted-foreground">{post.author.username}</div>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto rounded-full">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="aspect-square w-full object-cover" />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        <div className="flex w-full items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onLike(post.id)}>
            <Heart className="h-4 w-4" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MessageCircle className="h-4 w-4" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Send className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8" onClick={() => onSave(post.id)}>
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        <div>
          <div className="font-semibold">{post.likes} likes</div>
          <div className="text-sm">
            <a href={`/profile/${post.author.username}`} className="font-semibold">
              {post.author.username}
            </a>{" "}
            {post.caption}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">View all {post.comments} comments</div>
          <div className="mt-2 text-xs text-muted-foreground">{post.time}</div>
        </div>
      </CardFooter>
    </Card>
  )
}

// Sample data as fallback if API fails
const samplePosts: Post[] = [
  {
    id: 1,
    author: {
      name: "Sweet Delights",
      username: "sweetdelights",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=600&width=600&text=Chocolate+Cake",
    title: "Chocolate Cake",
    caption: "My latest chocolate creation with raspberry filling! #chocolatelover #bakinglife",
    likes: 243,
    comments: 42,
    time: "2 hours ago",
  },
  {
    id: 2,
    author: {
      name: "Bread Master",
      username: "breadmaster",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=600&width=600&text=Sourdough+Bread",
    title: "Sourdough Bread",
    caption: "72-hour fermented sourdough with perfect crust! #sourdough #artisanbread",
    likes: 189,
    comments: 23,
    time: "5 hours ago",
  },
  {
    id: 3,
    author: {
      name: "Pastry Queen",
      username: "pastryqueen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=600&width=600&text=French+Macarons",
    title: "French Macarons",
    caption: "Rainbow macarons for a special birthday order! #macarons #frenchpastry",
    likes: 412,
    comments: 56,
    time: "1 day ago",
  },
  {
    id: 4,
    author: {
      name: "Cake Designer",
      username: "cakedesigner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=600&width=600&text=Wedding+Cake",
    title: "Wedding Cake",
    caption: "Three-tier wedding cake with handmade sugar flowers #weddingcake #cakedesign",
    likes: 528,
    comments: 78,
    time: "2 days ago",
  },
]

