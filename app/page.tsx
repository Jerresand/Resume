"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 font-sans relative overflow-hidden">
      {/* Swiss style typographic initials */}
      <div className="absolute top-0 right-0 w-64 h-64 -z-10 overflow-hidden">
        <div className="absolute top-4 right-4 text-[120px] font-bold leading-none" style={{ fontFamily: "Helvetica" }}>
          <span className="absolute text-red-500 mix-blend-multiply">G</span>
          <span className="absolute -translate-x-2 translate-y-2 text-blue-500 mix-blend-multiply">G</span>
          <span className="absolute translate-x-2 -translate-y-2 text-yellow-500 mix-blend-multiply">G</span>
        </div>
        <div
          className="absolute top-4 right-4 translate-x-[85px] text-[120px] font-bold leading-none"
          style={{ fontFamily: "Helvetica" }}
        >
          <span className="absolute text-cyan-500 mix-blend-multiply">J</span>
          <span className="absolute -translate-x-2 translate-y-2 text-pink-500 mix-blend-multiply">J</span>
          <span className="absolute translate-x-2 -translate-y-2 text-green-500 mix-blend-multiply">J</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto grid grid-cols-12 gap-8"
      >
        <header className="col-span-12 mb-8">
          <h1 className="text-5xl font-bold mb-4">Gustav Jerresand</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Gustavjerresand@gmail.com
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +46 76 105 50 52
            </div>
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2" />
              linkedin.com/in/gustavjerresand
            </div>
          </div>
        </header>

        <section className="col-span-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <EducationItem
              institution="Lund Institute of Technology (LTH)"
              degree="M.Sc. in Industrial Engineering and Management"
              year="Aug 2021 – Jun 2026"
              details="Specializing in Financial Mathematics and Risk Management."
              url="https://www.lth.se/english/"
            />
            <EducationItem
              institution="University of Tokyo"
              degree="Exchange Semester"
              year="Sep 2024 - Jan 2025"
              details={
                <>
                  Assisted with research at{" "}
                  <a
                    href="https://www.ioe.t.u-tokyo.ac.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Tanaka Laboratory
                  </a>
                  .
                </>
              }
              url="https://www.u-tokyo.ac.jp/en/"
            />

            <EducationItem
              institution="Östra Reals Gymnasium"
              degree="Economics and Entrepreneurship"
              year="Aug 2017 – Jun 2020"
              url="https://ostrarealsgymnasium.stockholm.se/"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Professional Experience</h2>
          <div className="space-y-4">
            <ExperienceItem
              company="Quartr"
              position="Data Quality Analyst"
              period="Aug 2024–Present"
              details="Worked with data from the most followed companies. Utilized advanced Excel and AI tools to optimize workflows."
              url="https://quartr.com/"
            />
            <ExperienceItem
              company="Quartr"
              position="Data Sourcing Intern"
              period="Jun 2023 - Jul 2023"
              details="Sourced and verified financial data for the platform"
              url="https://quartr.com/"
            />
            <ExperienceItem
              company="Lund Institute of Technology (LTH)"
              position="Teaching Assistant in Python Programming"
              period="Jan 2024 - Jun 2024"
              details="Assisted students in the introductory Python programming course"
              url="https://www.lth.se/english/"
            />
            <ExperienceItem
              company="ISEK Student Investment Fund (IGI)"
              position="Founder & President"
              period=" Jan 2022 – Jun 2024"
              details="Founded and established faculty's student-led investment fund. Led equity research and financial analysis."
              url="https://www.isek.se/initiativ/igi"
            />
            <ExperienceItem
              company="The Business & Finance Society"
              position="Board Member"
              period="Jan 2022 - Jun 2024"
              details="Connected students with the professional world of finance"
              url="https://www.isek.se/utskott/bgi"
            />
          </div>
        </section>

        <aside className="col-span-4">
          <h2 className="text-2xl font-bold mb-4">What am I doing right now</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Just got back from an exchange semester at the University of Tokyo</li>
            <li>I am teaching myself Next.JS, SQL and just overall web development</li>
            <li>I am undertaking a course in Quantitative Risk Management</li>
            <li>Enjoying my last time in Lund</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Current Hobbies</h2>
          <div className="space-y-3">
            <li>Golf</li>
            <li>Cooking</li>
          </div>
        </aside>
      </motion.div>
    </div>
  )
}

function EducationItem({ institution, degree, year, details, url }) {
  return (
    <div className="text-sm">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-semibold">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {institution}
          </a>
        </h3>
        <span className="text-gray-600">{year}</span>
      </div>
      <p className="text-gray-800">{degree}</p>
      {details && <p className="text-gray-600 mt-1">{details}</p>}
    </div>
  )
}

function ExperienceItem({ company, position, period, details, url }) {
  return (
    <div className="text-sm">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-semibold">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {company}
          </a>
        </h3>
        <span className="text-gray-600">{period}</span>
      </div>
      <p className="text-gray-800">{position}</p>
      <p className="text-gray-600 mt-1">{details}</p>
    </div>
  )
}

function InterestingRead({ title, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
    >
      <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
      <span className="underline">{title}</span>
    </a>
  )
}

