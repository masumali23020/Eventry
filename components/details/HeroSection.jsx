import Image from 'next/image';
import ActionButtons from '../ActionButtons';

const HeroSection = ({eventInfo}) => {
  

  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventInfo?._doc?.imageUrl}
          alt={eventInfo?._doc?._doc?.name}
          className="h-[450px] mx-auto"
          width={900}
          height={900} />
      </div>


      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo?._doc?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo?._doc?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventInfo?._doc?.interested_ids?.length} k Interested</span>
            <span>|</span>
            <span>{ eventInfo?._doc?.going_ids?.length} K Going</span>
          </div>
        </div>

        <ActionButtons fromDetails={true}/>
      </div>
    </section>
  )
}

export default HeroSection