import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <Rocket className="h-16 w-16 text-primary animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome to Your React App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A modern web application built with React, TypeScript, and Vite + SWC for lightning-fast development.
          </p>
          <Button size="lg" className="mt-8">
            Get Started
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enhanced developer experience with type safety and better tooling support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vite + SWC</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Lightning-fast development server and optimized production builds.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beautiful, accessible components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
