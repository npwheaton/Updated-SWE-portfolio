"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Layers, MessageSquare, Share2 } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages and Frameworks",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "C++", "Java", "SQL", "HTML", "CSS", "JavaScript", "React.js"
    ]
  },
  {
    title: "Development Tools",
    icon: <Layers className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Visual Studio Code", "GitHub", "HighJump Software", "Koerber one Webwise"
    ]
  },
  {
    title: "Soft Skills",
    icon: <MessageSquare className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Strong Communication", "Problem Solving", "Quick Learner"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical and professional skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
