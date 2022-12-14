import React, { Fragment, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";
import Header from "../Header/Header";
import { FireContext, context1 } from "../../FirebseContext/Context";
const Create = () => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const { firebase } = useContext(FireContext);
  const { nameOfuser } = useContext(context1);
  const currdate = Date.now();
  const day = new Date(currdate);
  const History = useHistory();

  // this function used for upld action /exporting upld items -fire base
  const FileHandler = (e) => {
    e.preventDefault();
    firebase
      .storage()
      .ref(`/image${image.name}`) //glob file include file name
      .put(image) //file upld
      .then(({ ref }) => {
        // upld cmlt ref obj comming
        ref
          .getDownloadURL() //dwnld img url
          .then((url) => {
            //dwnlded url showing
            console.log(url);
            firebase
              .firestore()
              .collection("items added")   //action needed
              .add({
                name,
                category,
                price,
                url,
                userId: nameOfuser.uid,
                Create: day.toDateString(),
              })
              
                History.push("/");
              
          });
      });
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="input"
              type="number"
              id="fname"
              name="Price"
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <form>
            <br />
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
            />
            <br />
            <button onClick={FileHandler} className="uploadBtn">
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
