import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, "gallery");
    listAll(listRef).then(res => {
      res.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setImages(prev => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="container py-5">
      <h2>Gallery</h2>
      <div className="row">
        {images.map((img, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <img src={img} className="img-fluid rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;