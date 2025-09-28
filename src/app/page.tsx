import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/modern-luxury-residential-development-madinaty-al-.jpg')` }}
        />
        {/* Slight dark tint so white text is readable on the image */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">Sherif El Wabory</h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light opacity-95">
              Head of Development — 31 Years of Mega-Project Experience
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold min-w-[180px] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Link href="/projects">View Developments</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-px h-8 bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* INTRO + SMALL PROFILE CARD (light beige) */}
      <section className="py-24 px-6" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Intro */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">About Me</h2>

            <div className="flex flex-wrap gap-8 text-sm font-semibold">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">31+</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-gray-600">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10M+</span>
                <span className="text-gray-600">Sq.m Developed</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                I am a seasoned development leader with over 31 years of experience delivering city-scale, mixed-use projects across residential, commercial, hospitality, education, and healthcare sectors. My expertise spans the full development cycle from land acquisition and feasibility studies to design management, construction, and operations. 
                Throughout my career, I have led landmark projects in Egypt and the wider MENA region, managing complex stakeholder ecosystems and ensuring developments that balance architectural excellence with commercial viability. I specialize in transforming large scale visions into thriving communities, driving both financial performance and long term urban value.
              </p>
            </div>
          </div>

          {/* Profile card */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
              <div className="flex items-center gap-4">
                {/* Replace with your photo later */}
                <div className="w-20 h-20 rounded-full bg-gray-200 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Sherif El Wabory</h3>
                  <p className="text-gray-600">Head of Development</p>
                  <p className="text-gray-600">📍 Cairo, Egypt</p>
                  <p className="text-gray-600">📞 (+2) 01144408393</p>
                  <p className="text-gray-600">✉️ wabory@hotmail.com</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>
        </div>
      </section>
    </main>
  )
}
