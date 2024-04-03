import { EventWithTickets } from "@kaboodle-events-app/db/schema";
import Image from "next/image";

interface HeroSectionProps {
  event: EventWithTickets;
}

const HeroSection: React.FC<HeroSectionProps> = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative h-[50dvh] md:h-[80dvh] flex items-end">
      <Image src={`/${event.id}.jpg`} alt={event.name} className="object-cover" fill />
      <div className="z-10 w-full px-6 py-16 bg-gradient-to-t from-background to-transparent">
        <span className="">{formattedDate}</span>
        <h1 className=" text-5xl font-bold tracking-tighter">{event.name}</h1>
      </div>
    </section>
  );
};

export default HeroSection;