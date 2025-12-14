import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

function Admin() {
  const [file, setFile] = useState(null);

  const upload = () => {
    if (!file) return;
    const imgRef = ref(storage, `gallery/${file.name}`);
    uploadBytes(imgRef, file).alert("Uploaded!");
  };

  return (
    <div className="container py-5">
      <h2>Admin Upload Gallery</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button className="btn btn-primary ms-2" onClick={upload}>
        Upload
      </button>
    </div>
  );
}
export default Admin;