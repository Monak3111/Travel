import HotelCard from "./HotelCard";
import { Hotel } from "../types/hotel";

type Props = {
  title?: string;
  hotels: Hotel[];
};

export default function HotelSection({
  title = "Recommended Hotels",
  hotels,
}: Props) {

  if (!hotels || hotels.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">

      <h2 className="text-4xl font-extrabold mb-8">
        🏨 {title}
      </h2>


      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {hotels.map((hotel) => (

          <HotelCard

            key={hotel.id}

            id={hotel.id}

            name={hotel.name}

            image={hotel.image}

            location={hotel.location}

            price={hotel.price}

            rating={hotel.rating}

            reviews={hotel.reviews}

          />

        ))}

      </div>


    </section>
  );
}