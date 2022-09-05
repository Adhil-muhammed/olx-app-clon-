import React from "react";
import { useContext, useEffect, useState } from "react";
import { FireContext } from "../../FirebseContext/Context";
import Heart from "../../assets/Heart";
import "./Post.css";

function Posts() {
  const [products, setProducts] = useState([]);
  const { firebase } = useContext(FireContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection("new items") //get the data from 'new item' collection
      .get()
      .then((snapshot) => {
        // get function returning a snapshot
        const allPost = snapshot.docs.map((products) => {
          // snapshot occure  a 'docs' is array and-using map fnction
          return {
            ...products.data(), //retuning 'products.data' accsess the  document datas in fire store and using spred operator
            id: products.id, // products.id is used to get the id...
          };
        });
        setProducts(allPost);
      });
  }, []);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((items) => {
            return (
              <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>

                <div className="image">
                  <img src={items.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9;{items.price} </p>
                  <span className="kilometer">{items.category}</span>
                  <p className="name">{items.name} </p>
                </div>
                <div className="date">
                  <span>{items.Create}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
