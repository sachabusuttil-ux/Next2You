import { Hero } from "@/components/sections/Hero"
import { Advantages } from "@/components/sections/Advantages"
import { Steps } from "@/components/sections/Steps"
import dynamic from "next/dynamic"

const Fleet = dynamic(() => import("@/components/sections/Fleet").then(mod => mod.Fleet), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50 rounded-2xl" />,
  ssr: false
})

const Reviews = dynamic(() => import("@/components/sections/Reviews").then(mod => mod.Reviews), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50 rounded-2xl" />,
  ssr: false
})

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Advantages />
      <Fleet />
      <Steps />
      <Reviews />
    </div>
  )
}
