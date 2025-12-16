import { Hero } from "@/components/sections/Hero"
import { Advantages } from "@/components/sections/Advantages"
import { Fleet } from "@/components/sections/Fleet"
import { Steps } from "@/components/sections/Steps"
import { Reviews } from "@/components/sections/Reviews"

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
