import { useState, useEffect } from "react";
import { ImageContext } from "./context.ts";
import UploadImage from "./components/uploadImage.tsx";
import Search from "./components/forms/search.tsx";
import ImagesList from "./components/imagesList.tsx";
import { Image } from "./types.ts";
import { fetchImages } from "./userActions.ts";
import toast from "react-hot-toast";

function App() {
  const [imagesList, setImagesList] = useState<Image[]>([]);

  useEffect(() => {
    fetchImages()
      .then((res) => {
        setImagesList(res);
      })
      .catch(() => {
        toast("Failed to fetch images");
      });
  }, []);

  return (
    <>
      <ImageContext.Provider value={imagesList}>
        <div className="w-100 vh-100 p-3">
          <div className="add-search-image">
            <div className="mb-2">
              <Search
                setImagesList={(imagesList: Image[]) =>
                  setImagesList(imagesList)
                }
              />
            </div>
            <UploadImage
              setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
            />
          </div>
          {imagesList.length === 0 ? (
            <h1 className="text-center">No images found</h1>
          ) : (
            <ImagesList
              setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
            />
          )}
        </div>
      </ImageContext.Provider>
    </>
  );
}

export default App;
