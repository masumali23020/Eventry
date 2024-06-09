import { getEventById } from "@/actions/Quries"
import EventDetails from "@/components/details/EventDetails"
import EventVenue from "@/components/details/EventVenue"
import HeroSection from "@/components/details/HeroSection"

const page =async ({params: {id}}) => {
  const eventInfo = await getEventById(id)

  

  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?._doc?.details} swags={eventInfo?.swags} />
          <EventVenue location={eventInfo?._doc?.location} />
        </div>
      </section>
    </>
  )
}

export default page