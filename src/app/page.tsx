'use client';

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { ImageReveal } from "@/components/ImageReveal"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'community-gathering')
  const visionImg = PlaceHolderImages.find(img => img.id === 'hero-church')

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section with Mobile-Compatible Parallax */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2D2B44]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10"
            style={{
              backgroundImage: `url(${heroImg?.imageUrl || "https://picsum.photos/seed/school-hero/1920/1080"})`,
              filter: 'grayscale(0.5) brightness(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="flex flex-col items-center text-white">
            <Image
              src="/images/Untitled (5).png"
              alt="Skyways Junior School Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <KineticHeadline 
              lines={["WELCOME TO"]} 
              className="text-lg md:text-2xl font-bold uppercase tracking-[0.4em] mb-12 font-headline text-center"
              staggerDelay={0}
            />
            
            <KineticHeadline 
              lines={["SKYWAYS JUNIOR", "SCHOOL"]} 
              className="text-7xl md:text-[8rem] font-[900] uppercase tracking-tighter leading-[0.75] font-headline text-left items-start"
              staggerDelay={0.1}
            />
            
            <div className="w-24 h-3 bg-white mt-12 mb-8" />
            <ChevronDown className="h-10 w-10 animate-bounce opacity-60" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="https://picsum.photos/seed/foundation/150/150"
              alt="Foundation for the Future"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8"
              data-ai-hint="children studying"
            />
            <KineticHeadline 
              lines={["A Foundation for", "the Future."]}
              className="text-[#2D2B44] text-4xl md:text-5xl font-black mb-8 uppercase leading-tight font-headline"
            />
            <InkFlowText className="text-muted-foreground text-lg mb-10 leading-relaxed font-body">
              Skyways Junior School is a mixed day and boarding primary school in Nansana, Kampala. Our mission is to provide an enriching education that fosters academic excellence, creativity, and character development, igniting the hidden spark in every child.
            </InkFlowText>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto" />
          </div>
        </div>
      </section>

      {/* Image Reveal Section with Kinetic Headline */}
      <section className="py-12 md:py-24 bg-[#6A040F] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageReveal 
                src={visionImg?.imageUrl || "/images/IMG_8930.JPG"}
                alt="Our Mission"
                className="rounded-lg shadow-2xl aspect-[4/3]"
                maskColor="bg-[#6A040F]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8 text-white">
              <span className="text-[#FFB800] font-bold uppercase tracking-widest">Our Mission</span>
              <KineticHeadline 
                lines={["INSPIRING A", "LOVE OF LEARNING"]}
                className="text-4xl md:text-6xl font-black uppercase font-headline leading-none"
              />
              <InkFlowText className="text-white/70 text-lg font-body leading-relaxed max-w-xl">
                Through dedicated teaching and a supportive environment, we are committed to nurturing well-rounded individuals. 
                Discover our approach to education.
              </InkFlowText>
              <MagneticButton>
                <Link href="/about">
                  <Button className="bg-[#FFB800] text-[#6A040F] hover:bg-[#FFB800]/90 font-bold h-14 px-8 rounded-full text-lg group">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-[#F5F5F5] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/events" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFB800]">
                <KineticHeadline lines={["Events"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Stay updated with our school calendar and special events.</InkFlowText>
                <span className="text-[#FFB800] font-bold text-sm tracking-widest uppercase">View Calendar →</span>
              </div>
            </Link>
            <Link href="/academics" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFB800]">
                <KineticHeadline lines={["Academics"]} className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline" />
                <InkFlowText className="text-muted-foreground mb-6 text-base font-body">Explore our comprehensive curriculum and learning programs.</InkFlowText>
                <span className="text-[#FFB800] font-bold text-sm tracking-widest uppercase">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
