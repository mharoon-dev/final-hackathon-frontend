import SideModal from "../../Components/SideModal/SideModal";
import "./home.css";
import CardSocailMedia from "../../Components/CardSocaiMedia/CardSocaiMedia.jsx";
import CardFoodPanda from "../../Components/CardFoodPanda/CardFoodPanda.jsx";
import { useState } from "react";
import useUploadImage from "../../Custom Hooks/useUploadImage.jsx";

const Home = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleClick = async (e) => {
    console.log(file);
    setFileName(file.name);

    const upload = await useUploadImage(file, file.name);

    console.log(upload);
  };
  return (
    <div>
      <h1>Home</h1>
      {/* <CardSocailMedia /> */}
      {/* <CardFoodPanda /> */}
      <input
        type="file"
        accept="image/* , video/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleClick}>Upload </button>
    </div>
  );
};

export default Home;
