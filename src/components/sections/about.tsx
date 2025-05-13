"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDownToLine, Linkedin, Mail } from "lucide-react"

export function AboutSection() {
  const forpicture = () => {
    //copy this once you have taken a good picture
    return(            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src=""
                alt="Profile of Nathaniel Wheaton"
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
                priority
              />
            </div>)
   
  }

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 min-h-screen flex items-center ">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Nathaniel Wheaton</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Software Engineer
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mt-4">
              Software engineer with expertise in Warehouse Management Systems (WMS) and web development, delivering high-impact solutions to optimize operations and user engagement.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button  variant="default" asChild>
              <a href="/NateWheatonResume.pdf">
                <ArrowDownToLine className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:mr.natewheaton@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> mr.natewheaton@gmail.com
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://linkedin.com/in/nathaniel-wheaton-5b1544187/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <Card className="overflow-hidden border-none bg-muted/50">
          <CardContent className="p-0">

          </CardContent>
        </Card>
      </div>
    </section>
  )
}
