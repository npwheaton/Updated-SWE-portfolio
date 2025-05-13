"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science",
    focus: "Computer Science",
    institution: "Saint Cloud State University",
    location: "St. Cloud, MN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/St._Cloud_State_Huskies_logo.svg/250px-St._Cloud_State_Huskies_logo.svg.png"
  }
]


export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
        </div>

        {/* Formal Education */}
        <div className="space-y-8">

          {education.map((edu) => (
            <Card key={edu.institution} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative w-full h-32 md:h-40 rounded-md overflow-hidden bg-white">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="md:w-3/4 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-lg text-primary font-medium">{edu.focus}</p>
                        <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
                      </div>
                    </div>
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
