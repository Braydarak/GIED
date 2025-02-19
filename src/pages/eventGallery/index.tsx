import { useParams } from "react-router-dom";
import GalleryComponent from "../../components/galleryComponent";
import eventsData from "../../data/events.json";

const EventGallery = () => {
  const { id } = useParams<{ id: string }>();

  const event = eventsData.events.find((event) => event.id === Number(id));

  if (!event) {
    return (
      <p className="text-center text-turquesa80 h-screen flex justify-center items-center text-lg">
        Este evento no se encuentra disponible, por favor intentelo más tarde.
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-32 items-center bg-turquesa10 text-white">
      <h1 className="text-3xl font-bold mb-8 font-panton text-principal">
        {event.title}
      </h1>
      <p className="text-lg text-turquesa80 mb-8 font-montserrat max-w-[36ch] text-center md:max-w-full">
        Disfruta de las imágenes del evento.
      </p>

      <GalleryComponent images={event.galleryImages || []} />
    </div>
  );
};

export default EventGallery;
