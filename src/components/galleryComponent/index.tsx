import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaDownload, FaTimes } from "react-icons/fa";

interface GalleryComponentProps {
  images: string[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openImage = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `imagen-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 w-full mx-auto">
      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group cursor-pointer md:h-48">
            <img
              src={img}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md transition-opacity group-hover:brightness-75"
              onClick={() => openImage(index)}
            />
            {/* Botón de descarga */}
            <button
              onClick={() => downloadImage(img)}
              className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <FaDownload />
            </button>
          </div>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeImage}>
            <FaTimes />
          </button>

          <button className="absolute left-4 text-white text-2xl" onClick={prevImage} disabled={currentIndex === 0}>
            <FaArrowLeft />
          </button>

          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-lg"
          />

          <button className="absolute right-4 text-white text-2xl" onClick={nextImage} disabled={currentIndex === images.length - 1}>
            <FaArrowRight />
          </button>

          <button
            className="absolute bottom-4 right-4 p-2 bg-white text-black rounded-full"
            onClick={() => downloadImage(selectedImage)}
          >
            <FaDownload />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;