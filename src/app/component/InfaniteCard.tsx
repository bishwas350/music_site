' use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "../utils/cn";
import Container from "./Container";

function InfaniteCard() {
  const musicSchoolTestimonials = [
    {
      quote:
        "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
      name: "Alex Johnson",
      title: "Guitar Student",
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: "Samantha Lee",
      title: "Piano Student",
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: "Michael Chen",
      title: "Vocal Student",
    },
    {
      quote:
        "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
      name: "Emily Taylor",
      title: "Violin Student",
    },
    {
      quote:
        "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
      name: "Chris Morales",
      title: "Music Production Student",
    },
  ];
  return (
    <>
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
       <Container>
       <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        >
          <h2 className="text-3xl font-bold text-center mt-36 z-10 ">
            Hear our Harmony: Voices of success
          </h2>
          <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
       </Container>
      </div>
    </>
  );
}

export default InfaniteCard;
