import "./Form.scss";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [photo, setPhoto] = useState({});
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Author", data.Author);
    formData.append("Location", data.Location);
    formData.append("Description", data.Description);
    formData.append("Image", photo);
    axios
      .post("https://instaclone-akshith-server.herokuapp.com/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/post");
  };
  return (
    <>
      <Navbar />
      <div className="form">
        <form>
          <div className="first-row">
            <span>
              {photo.name === undefined ? "No File Choosen" : photo.name}
            </span>
            <label className="file">
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/png,image/jpeg"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <span className="file-custom">Browse</span>
            </label>
          </div>
          <div className="second-row">
            <input
              type="text"
              placeholder="Author"
              onChange={(e) => setData({ ...data, Author: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => setData({ ...data, Location: e.target.value })}
            />
          </div>
          <div className="third-row">
            <input
              type="text"
              placeholder="Description"
              onChange={(e) =>
                setData({ ...data, Description: e.target.value })
              }
            />
          </div>
          <div className="fourth-row">
            <button type="submit" onClick={(e) => handlesubmit(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
