import { useImageListContext } from "../context.ts";
import { Image as ImageType } from "../types.ts";
import Image from "./image.tsx";

const ImagesList = ({
  setImagesList,
}: {
  setImagesList: (imagesList: ImageType[]) => void;
}) => {
  const imagesList = useImageListContext();
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around p-2">
        {imagesList.map((image: ImageType) => {
          return (
            <div
              key={image.id}
              className="d-flex justify-content-center image-item mb-4"
            >
              <div className="card rounded m-2">
                <Image
                  key={image.id}
                  image={image}
                  setImagesList={setImagesList}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesList;
