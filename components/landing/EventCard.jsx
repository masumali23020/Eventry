import Image from 'next/image';
import Link from 'next/link';
import ActionButtons from '../ActionButtons';

const EventCard = ({event}) => {
  const {name,details,location,imageUrl,interested_ids, going_ids,id} = event || {}
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={imageUrl}
        alt={name}
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href={`/details/${id}`} className="font-bold text-lg">
          {details}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          {location}
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{interested_ids?.length} Interested</span>
          <span>|</span>
          <span>{event?.going_ids?.length} Going</span>
        </div>
        <ActionButtons interestedUserIds={interested_ids} eventId={id} goingUserIds={going_ids} />
      </div>
    </div>
  );
};

export default EventCard;
