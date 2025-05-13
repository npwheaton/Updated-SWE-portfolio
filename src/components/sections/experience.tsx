"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    id: "chewy",
    title: "Software Engineer",
    company: "Chewy",
    location: "Minneapolis, MN",
    period: "Feb 2022 – Present",
    description: "Engineered and maintained WMS software across 10+ national fulfillment centers, enhancing order accuracy and reducing processing time by 20%.",
    achievements: [
      { id: "chewy1", text: "Built backend services using SQL and HighJump, increasing data throughput efficiency under high transaction volumes." },
      { id: "chewy2", text: "Partnered cross-functionally to improve inventory tracking and shipment workflows, reducing order errors by 25%." },
      { id: "chewy3", text: "Resolved critical WMS issues, achieving 95% on-time support ticket resolution for warehouse operations." },
      { id: "chewy4", text: "Contributed to automation features that enabled real-time inventory tracking and fulfillment, boosting speed by 30%." },
      { id: "chewy5", text: "Applied Agile methodologies and participated in sprint planning, reviews, and retrospectives." }
    ],
    technologies: ["SQL", "HighJump", "Agile", "Koerber Webwise","Fitnesse","HTML", "CSS"]
  },
  {
    id: "nmproperties",
    title: "Assistant Administrator",
    company: "N.M. Properties Management LLC",
    location: "Minneapolis, MN",
    period: "Apr 2019 – Jun 2020",
    description: "Managed administrative operations and built a website to enhance property visibility and renter engagement.",
    achievements: [
      { id: "nm1", text: "Designed and maintained the company website using React.js, increasing engagement by 40%." },
      { id: "nm2", text: "Tracked and recorded expenditures across 20+ rental units." },
      { id: "nm3", text: "Streamlined office operations and document handling for client and banking data." },
      { id: "nm4", text: "Cultivated positive renter relations and resolved conflicts professionally." }
    ],
    technologies: ["React.js", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "dnr",
    title: "Operation Services Intern",
    company: "Minnesota Department of Natural Resources",
    location: "St. Paul, MN",
    period: "Jul 2017 – Aug 2017",
    description: "Supported lease auditing, web security analysis, and GIS data mapping to enhance operational accuracy.",
    achievements: [
      { id: "dnr1", text: "Audited and reconciled lease data, reducing discrepancies by 35%." },
      { id: "dnr2", text: "Detected and escalated web security bugs that led to a critical patch." },
      { id: "dnr3", text: "Prepared quarterly reporting materials and digitized access applications." },
      { id: "dnr4", text: "Mapped GIS coordinates for state buildings to improve facility tracking." }
    ],
    technologies: ["GIS", "Excel"]
  }
];


export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            A timeline of my professional journey and key contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-lg text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-sm text-muted-foreground">{job.location}</span>
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{job.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      {job.achievements.map((achievement) => (
                        <li key={achievement.id}>{achievement.text}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={`${job.id}-${tech}`} variant="outline">
                          {tech}
                        </Badge>
                      ))}
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
