"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react"
import ClientOnly from './components/ClientOnly'
import { useState } from 'react'
import BlinkingMessage from './components/BlinkingMessage'

export default function ResumePage() {
  const [showSocialLinks, setShowSocialLinks] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 font-sans relative overflow-hidden">
      <ClientOnly>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto grid grid-cols-12 gap-8 pt-8"
      >
          <header className="col-span-12 mb-8 relative">
            <div className="absolute top-0 right-[2rem] w-[160px] h-[80px]">
              {/* G letter */}
              <div
                className="absolute top-0 right-[45px] text-[50px] font-black tracking-tighter rotate-[-5deg]"
                style={{ fontFamily: "Helvetica" }}
              >
                <span className="absolute mix-blend-multiply text-[#FF0000] opacity-80">G</span>
                <span className="absolute mix-blend-multiply text-[#00FFFF] translate-x-2 -translate-y-2 opacity-80">G</span>
                <span className="absolute mix-blend-multiply text-[#FFFF00] -translate-x-2 translate-y-2 opacity-80">G</span>
              </div>
              {/* J letter */}
              <div
                className="absolute top-0 right-[5px] text-[50px] font-black tracking-tighter rotate-[5deg]"
                style={{ fontFamily: "Helvetica" }}
              >
                <span className="absolute mix-blend-multiply text-[#FF00FF] opacity-80">J</span>
                <span className="absolute mix-blend-multiply text-[#00FF00] translate-x-2 -translate-y-2 opacity-80">J</span>
                <span className="absolute mix-blend-multiply text-[#0000FF] -translate-x-2 translate-y-2 opacity-80">J</span>
            </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 relative group w-fit">
              Gustav Jerresand
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
            </h1>
            <div className="flex flex-wrap gap-4 text-sm h-8">
              <AnimatePresence mode="wait">
                {!showSocialLinks ? (
                  <BlinkingMessage onComplete={() => setShowSocialLinks(true)} />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex gap-4"
                  >
                    <a 
                      href="mailto:Gustavjerresand@gmail.com"
                      className="flex items-center hover:text-blue-600 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Gustavjerresand@gmail.com
                    </a>
                    <a 
                      href="https://linkedin.com/in/gustavjerresand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      linkedin.com/in/gustavjerresand
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </header>

          <section className="col-span-8">
              <h2 className="text-2xl font-bold mb-4 relative group w-fit">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
              </h2>
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

              <h2 className="text-2xl font-bold mt-8 mb-4 relative group w-fit">
                Professional Experiences & Extracurricular Activities
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
              </h2>
            <div className="space-y-4">
              <ExperienceItem
                company="Quartr"
                position="Data Quality Analyst"
                period="Aug 2024–Present"
                details="Working with data from the most followed companies. Utilizing advanced Excel and AI tools to optimize workflows."
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
              <div className="border-l-2 border-gradient pl-6 space-y-8" style={{
                borderImage: 'linear-gradient(to bottom, #0000FF, #00FFFF) 1'
              }}>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">What I'm Up To At The Moment</h2>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Exchange at UTokyo&body=Hi Gustav,%0D%0A%0D%0AI saw that you just returned from the University of Tokyo! I'd love to hear about your experience and what you learned during your time there.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Just got back from an exchange semester at the University of Tokyo
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Web Development Journey&body=Hey Gustav,%0D%0A%0D%0AI noticed you're learning Next.js, SQL, and web development! I have experience in these areas and would be happy to share some resources, tips, or help you with any questions you might have.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Teaching myself Next.JS, SQL and overall web development
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="https://beerpongtourney.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Just launched my first project (apart from this website) - beerpongtourney.com
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Quantitative Risk Management&body=Hi Gustav,%0D%0A%0D%0AI saw you're taking a course in Quantitative Risk Management. I'd be really interested to hear about what you're learning and your thoughts on modern risk management approaches.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Undertaking a course in Quantitative Risk Management
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Life in Lund&body=Hey Gustav,%0D%0A%0D%0AI noticed you're enjoying your last time in Lund! I'd love to hear about your experience at LTH and what makes Lund special to you.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Enjoying my last time in Lund
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Chat with me about</h2>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Let's Play Golf!&body=Hey Gustav,%0D%0A%0D%0AI saw on your website that you're into golf. Would love to play a round sometime if you're up for it!%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Golf
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Food and Cooking&body=Hi Gustav,%0D%0A%0D%0AI noticed you're into cooking! Would love to exchange some recipes or restaurant recommendations.%0D%0A%0D%0ACheers"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Cooking Food
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Economics Discussion&body=Dear Gustav,%0D%0A%0D%0AI came across your profile and noticed your interest in economics. Your background in both finance and technology is intriguing. I'd love to discuss your perspectives on current economic trends.%0D%0A%0D%0AKind regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Economics
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Financial Markets Discussion&body=Dear Gustav,%0D%0A%0D%0AI noticed your interest in financial markets and your experience with the student investment fund. I'd be very interested in hearing your thoughts on current market conditions and investment strategies.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Financial Markets
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Web Dev Chat&body=Hey Gustav,%0D%0A%0D%0ASaw that you're learning web development! I'm also in the field - would love to chat about your projects and maybe collaborate on something.%0D%0A%0D%0ACheers"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Web Development
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Let's Talk Travel!&body=Hey Gustav,%0D%0A%0D%0AI saw that you're into traveling! Would love to exchange travel stories and recommendations sometime.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Traveling
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=AI Discussion&body=Hi Gustav,%0D%0A%0D%0AI noticed your interest in AI and would love to discuss your thoughts on recent developments in the field and potential applications in finance and technology.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          AI
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Restaurant Recommendations&body=Hi Gustav,%0D%0A%0D%0AI saw that you're a foodie! Would love to exchange restaurant recommendations or maybe grab a meal together sometime.%0D%0A%0D%0ACheers"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Eating Food
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Beer Chat&body=Hey Gustav,%0D%0A%0D%0AI noticed you're into beer! Would love to share some beer recommendations or maybe check out a bar sometime.%0D%0A%0D%0ACheers"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Beer
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=NFL Discussion&body=Hey Gustav,%0D%0A%0D%0ASaw that you're into American Football! Would love to discuss the NFL sometime or maybe watch a game together.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          American Football
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Music Chat&body=Hey Gustav,%0D%0A%0D%0AI saw that you're into music! Would love to exchange playlists or discuss favorite artists sometime.%0D%0A%0D%0ACheers"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Music
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=EU Economics Discussion&body=Dear Gustav,%0D%0A%0D%0AI noticed your interest in EU Economics. I'd love to discuss your perspectives on current European economic policies and trends.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          EU Economics
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Golf Talk - PGA vs LIV&body=Hey Gustav,%0D%0A%0D%0AI saw your interest in the PGA Tour vs LIV Golf situation. Would love to discuss your thoughts on the future of professional golf.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          PGA Tour vs LIV Golf
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Running Partner?&body=Hey Gustav,%0D%0A%0D%0AI noticed you're into running! Would love to go for a run together sometime if you're up for it.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Running
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Stockholm StartUps Discussion&body=Hi Gustav,%0D%0A%0D%0AI saw your interest in Stockholms's Start-Up ecosystem. Would love to discuss it with you sometime.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Stockholm StartUps
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Blockchain Technology Discussion&body=Dear Gustav,%0D%0A%0D%0AI noticed your interest in blockchain technology. Would love to discuss your thoughts on its future applications and impact on financial systems.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Blockchain Tech
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Quantitative Analysis Discussion&body=Dear Gustav,%0D%0A%0D%0AI saw your background in quantitative analysis. I'd love to discuss your approach to financial modeling and risk management.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Quantitative Analysis
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Game Theory Discussion&body=Dear Gustav,%0D%0A%0D%0AI noticed your interest in game theory. Would love to discuss its applications in economics and decision-making.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Game Theory
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Sustainable Finance Discussion&body=Dear Gustav,%0D%0A%0D%0AI saw your interest in sustainable finance. Would love to discuss the future of ESG investing and sustainable financial practices.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Sustainable Finance
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start opacity-90">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Style Chat&body=Hey Gustav,%0D%0A%0D%0AI noticed you're into suits and ties! Would love to exchange style tips or recommendations sometime.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Suits and Ties
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start opacity-80">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Darts Meetup&body=Hey Gustav,%0D%0A%0D%0ASaw that you play darts! Would love to meet up for a game sometime if you're interested.%0D%0A%0D%0ACheers"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Playing Darts
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start opacity-70">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Design Chat&body=Hey Gustav,%0D%0A%0D%0AI saw your interest in design! Would love to exchange ideas and inspiration sometime.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Design
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start opacity-60 -mb-1">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Neural Networks Discussion&body=Dear Gustav,%0D%0A%0D%0AI noticed your interest in neural networks. Would love to discuss their applications in finance and your thoughts on the future of AI.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Neural Networks
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start opacity-40 -mb-2">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=System Design Discussion&body=Dear Gustav,%0D%0A%0D%0AI saw your interest in system design. Would love to discuss your thoughts on scalable architecture and efficient systems.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          System Design
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                    <li className="flex items-start opacity-20 -mb-3">
                      <span className="block w-2 h-2 mt-1.5 mr-3 rounded-full flex-shrink-0 bg-gradient-to-br from-[#0000FF] to-[#00FFFF]" />
                      <div className="relative group">
                        <a 
                          href="mailto:Gustavjerresand@gmail.com?subject=Quantum Computing Discussion&body=Dear Gustav,%0D%0A%0D%0AI noticed your interest in quantum computing. Would love to discuss its potential impact on computational finance and cryptography.%0D%0A%0D%0ABest regards"
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          Quantum Computing
                        </a>
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </aside>
        </motion.div>
      </ClientOnly>
    </div>
  )
}

function EducationItem({ institution, degree, year, details, url }: {
  institution: string;
  degree: string;
  year: string;
  details?: React.ReactNode;
  url: string;
}) {
  return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
      className="block text-sm group relative pb-3"
    >
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-semibold text-blue-600 hover:text-[#00FFFF] transition-colors duration-200">{institution}</h3>
        <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">{year}</span>
      </div>
      <div>
        <p className="text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{degree}</p>
        {details && <p className="text-gray-600 mt-1 group-hover:text-blue-600 transition-colors duration-200">{details}</p>}
    </div>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
    </a>
  )
}

function ExperienceItem({ company, position, period, details, url }: {
  company: string;
  position: string;
  period: string;
  details: string;
  url: string;
}) {
  return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
      className="block text-sm group relative pb-3"
    >
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-semibold text-blue-600 hover:text-[#00FFFF] transition-colors duration-200">{company}</h3>
        <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">{period}</span>
      </div>
      <div>
        <p className="text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{position}</p>
        <p className="text-gray-600 mt-1 group-hover:text-blue-600 transition-colors duration-200">{details}</p>
    </div>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0000FF] to-[#00FFFF] group-hover:w-full transition-all duration-500" />
    </a>
  )
}

function InterestingRead({ title, url }: {
  title: string;
  url: string;
}) {
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

