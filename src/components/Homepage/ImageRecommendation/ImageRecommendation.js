import { useState } from "react";
import "./ImageRecommendation.css";
import ml5 from "ml5";
import axios from "axios";

function ImageRecommendatio() {
  const [images, setImages] = useState([]);

  var loadFile = (event) => {
    document.getElementById("image").style.visibility = "visible";
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log("Model Loaded!");
  }

  const predict = () => {
    var text;
    classifier.predict(
      document.getElementById("image"),
      function (err, results) {
        // console.log(results[1].label);
        fetchRecommendedImages(results[0].label);
      }
    );
    document.getElementById("recImagesForYou").style.visibility = "visible";
  };
  const fetchRecommendedImages = async (value) => {
    // console.log(value);
    await axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=5W6phrZkPFR3Du3AcNjRK5tGnLA5qoToY547YO268u0`
      )
      .then((res) => {
        console.log(res.data.results);
        setImages(res.data.results);
      });
  };
  // useEffect(() => {
  //   fetchRecommendedImages();
  // }, []);

  return (
    <div className="ImageRecommendation">
      <center>
        <b>Please Upload a post</b>
        <br />
        <br />
        <input
          type="file"
          accept="image/*"
          class="custom-file-input"
          onChange={(event) => loadFile(event)}
          name="image"
          id="file"
        />
        <button className="btn btn-outline-primary" onClick={predict}>
          Get Recommendations
        </button>

        <br></br>
        <img
          src=""
          className="uploadImage mt-5"
          alt=""
          id="image"
          width="315px"
          height="200px"
        />
      </center>

      {/* ------------- */}
      <h5 className="my-2 text-center" id="recImagesForYou">
        Recommended Images for you
      </h5>
      <div className="row">
        {images.map((val, idx) => {
          return (
            <div className="col-4">
              <img className="recommendedImages" src={val.urls.thumb} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageRecommendatio;
