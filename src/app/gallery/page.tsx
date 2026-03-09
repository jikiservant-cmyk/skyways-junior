'use client';

import { KineticHeadline } from "@/components/KineticHeadline";
import { ImageReveal } from "@/components/ImageReveal";
import { InkFlowText } from "@/components/InkFlowText";

const galleryImages = [
  { src: "/images/484688063_1181339383785349_6300749383438108902_n.jpg", alt: "Gallery image 1" },
  { src: "/images/486353896_1187679929817961_4724554373967953301_n.jpg", alt: "Gallery image 2" },
  { src: "/images/486460421_1187679879817966_8937100076930363422_n.jpg", alt: "Gallery image 3" },
  { src: "/images/486466805_1187679933151294_7895560268502234535_n.jpg", alt: "Gallery image 4" },
  { src: "/images/486505257_1187679883151299_6568489799441534202_n.jpg", alt: "Gallery image 5" },
  { src: "/images/559452582_1348782660374353_1719964045368134275_n.jpg", alt: "Gallery image 6" },
  { src: "/images/560020689_1348782107041075_5027888620366757027_n.jpg", alt: "Gallery image 7" },
  { src: "/images/586171317_1380437347208884_1992856856938756084_n.jpg", alt: "Gallery image 8" },
  { src: "/images/595073746_1394167455835873_8744553215477993611_n.jpg", alt: "Gallery image 9" },
  { src: "/images/595114440_1394167532502532_5661739246197434066_n.jpg", alt: "Gallery image 10" },
  { src: "/images/608902824_1415677727018179_2868253638662345757_n.jpg", alt: "Gallery image 11" },
  { src: "/images/612005087_1418673150051970_3731473655120438810_n.jpg", alt: "Gallery image 12" },
  { src: "/images/612502260_1418673063385312_5608933433895877060_n.jpg", alt: "Gallery image 13" },
  { src: "/images/613176575_1418673436718608_3409238698708772371_n.jpg", alt: "Gallery image 14" },
  { src: "/images/621786925_1433194978599787_4334043272897827589_n.jpg", alt: "Gallery image 15" },
  { src: "/images/images.jpg", alt: "Gallery image 16" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center bg-[#6A040F]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 brightness-[0.3]"
            style={{
              backgroundImage: `url(/images/622369574_1432212165364735_7324286455604369317_n.jpg)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["OUR", "GALLERY"]} 
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-serif text-[#FFB800]"
            staggerDelay={0.2}
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20 space-y-6">
                <KineticHeadline 
                lines={["MOMENTS IN TIME"]} 
                className="text-4xl md:text-5xl font-black text-[#2D2B44] uppercase font-headline"
                />
                <InkFlowText className="text-muted-foreground text-xl font-body max-w-2xl mx-auto leading-relaxed">
                A glimpse into the vibrant life at Skyways Junior School.
                </InkFlowText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                    <ImageReveal 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full"
                    />
                </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
