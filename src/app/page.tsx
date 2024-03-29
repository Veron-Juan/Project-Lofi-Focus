import Image from "next/image"
import Link from "next/link"
import { Music, PlusCircle, TimerReset, Users } from "lucide-react"
import { getServerSession } from "next-auth"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardTitle,
} from "@/components/ui/card"

import {
  ContainerSlice,
  ContainerSliceRight,
} from "@/components/ContainerSlice"

export default async function IndexPage() {
  const session = await getServerSession()

  return (
    <div className="overflow-x-hidden">
      <section className="mx-auto mt-16 flex   max-w-7xl flex-col items-center justify-center px-7 md:items-center    ">
        <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white   md:text-5xl lg:text-7xl ">
          Your space for relaxation and concentration
        </h1>

        <div className="items-center overflow-x-hidden  md:flex  ">
          <div className="flex max-w-[900px] flex-col md:mb-[40px] md:flex-1   ">
            <p className=" max-w-[600px] text-[16px] text-muted-foreground md:text-lg">
              On our website, you can find a wide variety of lofi music, share
              your favorite songs with other users and discover new artists and
              songs in the community.
            </p>
            <div className="my-8 flex gap-6">
              <Link
                href="/lofi"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                Get Started
              </Link>
              {!session ? (
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: "outline",
                    size: "default",
                  })}
                >
                  Login
                </Link>
              ) : (
                <div className="">
                  <Link
                    href="/upload"
                    className={buttonVariants({
                      variant: "outline",
                      size: "default",
                    })}
                  >
                    <PlusCircle className="mr-2  h-4 w-4" />
                    Add music
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 hidden justify-start   md:block">
            <img
              className=" h-[220px] w-[220px]  md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] "
              src="/hero.webp"
              alt="hero"
              width={220}
              height={220}
              
              
            />
          </div>
        </div>
        <div className="mt-12  flex   gap-6 md:mt-6  ">
          <Card className=" flex h-[90px] w-[90px] items-center justify-center gap-3 hover:bg-neutral-200/90 dark:hover:bg-inherit  dark:hover:opacity-60 md:h-[120px] md:w-[120px] ">
            <CardTitle className="text-md flex flex-col items-center gap-2 ">
              <Music strokeWidth={2.5} />
              Lofi Music
            </CardTitle>
          </Card>
          <Card className=" flex h-[90px] w-[90px] items-center justify-center gap-3 hover:bg-neutral-200/90 dark:hover:bg-inherit  dark:hover:opacity-60 md:h-[120px] md:w-[120px]">
            <CardTitle className="text-md flex flex-col items-center gap-2 ">
              <TimerReset strokeWidth={2.5} />
              Pomodoro
            </CardTitle>
          </Card>
          <Card className="flex h-[90px] w-[90px] items-center justify-center gap-3 hover:bg-neutral-200/90 dark:hover:bg-inherit  dark:hover:opacity-60 md:h-[120px] md:w-[120px]">
            <CardTitle className="text-md flex flex-col items-center gap-2">
              <Users strokeWidth={2.5} />
              Community
            </CardTitle>
          </Card>
        </div>
      </section>
      <ContainerSlice>
        <div className=" mt-20 flex  flex-col items-center gap-6 md:mb-40 md:flex-row md:justify-center  md:px-6">
          <Image
            src="/sculpturemusicbg.webp"
            alt="image"
            className=" rounded-lg  object-cover shadow-xl sm:h-[365px] sm:w-[380px]  "
            width={315}
            height={315}
          />
          <div className="xs:my-1 xs:text-center flex max-w-[480px]  flex-col  gap-5">
            <h3 className="ml-6 scroll-m-20 text-4xl font-extrabold tracking-tight text-black dark:text-white md:ml-4 md:text-start lg:text-5xl  ">
              Lofi Music
            </h3>
            <p className="px-7  md:px-4 break-words ">
            Explore our collection of the best lofi songs, whether you need to concentrate, create a peaceful atmosphere or simply unwind from everyday stress. In addition, you can save your favorite songs in the favorites section, allowing you to easily access them at any time.
            </p>
            <div className="ml-6 text-[15px] md:ml-3 md:text-start">
              <Link
                href="/lofi"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </ContainerSlice>

      <ContainerSliceRight>
        <div className="mt-20  flex flex-col-reverse  items-center gap-7 md:mb-40 md:flex-row md:justify-center   md:px-6  ">
          <div className="xs:my-1 xs:text-center flex max-w-[480px]  flex-col  gap-5">
            <h3 className="ml-6 scroll-m-20 text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl ">
              Pomodoro Tecnique
            </h3>

            <p className="px-7  md:px-4 break-words">
            Discover the power of productivity and focus with our Pomodoro technique section. The Pomodoro method is a proven strategy to maximize your time and get the most out of each work session.

            </p>
            <div className="ml-6 text-[15px] md:ml-3 md:text-start">
              <Link
                href="/pomodoro"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                Try Now 
              </Link>
            </div>
          </div>
          <Image
            src="/pomodorosculpture.webp"
            alt="image"
            className=" rounded-lg  object-cover shadow-xl sm:h-[365px] sm:w-[380px]  "
            width={315}
            height={315}
          />
        </div>
      </ContainerSliceRight>

      <ContainerSlice>
        <div className=" mt-20 flex  flex-col items-center gap-6  md:mb-40 md:flex-row  md:justify-center md:px-6">
          <Image
            src="/community.webp"
            alt="image"
            className=" rounded-lg  object-cover shadow-xl sm:h-[365px] sm:w-[380px]  "
            width={315}
            height={315}
          />
          <div className="xs:my-1 xs:text-center flex max-w-[480px]  flex-col  gap-5">
            <h3 className="ml-6 scroll-m-20 text-4xl font-extrabold tracking-tight text-black dark:text-white md:ml-4 md:text-start lg:text-5xl  ">
              Community
            </h3>
            <p className="px-7 md:px-4 break-words">
            Join our lofi community and share your favorite songs. In our Community section, you have the opportunity to share and discover new lofi music. Share your favorite songs and find inspiration from other users' recommendations.

            </p>
            <div className="ml-6 text-[15px] md:ml-3 md:text-start">
              <Link
                href="/community"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </ContainerSlice>
    </div>
  )
}
