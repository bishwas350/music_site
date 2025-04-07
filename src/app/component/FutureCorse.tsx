"use client";
import data from "../data/music.json";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  slug: string;
  price: number;
  instructor: string;
}
function FutureCorse() {
  const futureCourse = data.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <div className="bg-gray-900  py-12">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Master of music
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
        <div className="mt-10 p-4">
          <div className="grid sm:grid-cols-2  grid-cols-1 lg:grid-cols-3 justify-center gap-8">
            {futureCourse.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px  font-semibold leading-6  text-white text-xs inline-block mt-5">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                        <span>Learn More</span>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px  font-semibold leading-6  text-white text-xl inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
              <span>See All</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>
    </>
  );
}

export default FutureCorse;
