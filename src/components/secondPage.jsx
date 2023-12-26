import React from "react";
import { FaRegImage } from "react-icons/fa6";
import { TbArrowsRandom } from "react-icons/tb";
import { HiCamera } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";

function SecondPage() {
  return (
    <div className="second">
      <div className="category" style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h4 style={{ color:'skyblue'}}>OUR CATEGORIES</h4>
          <h1>Check Out <span style={{color: 'skyblue'}}>Popular</span> Contest <span style={{color: 'skyblue'}}>Categories</span></h1>
        </div>
        <button style={{height: '6vh', borderRadius: '10px', padding: '10px', background: 'skyblue', color: 'whitesmoke', fontSize: '20px', border: 'transparent'}}>
          Discover All Categories
        </button>
      </div>
      <div className="card" style={{ display: "flex", gap: "50px", justifyContent:'center' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "5vw" }}>
            <div style={{ flexBasis: "10%", height: "50px" }}>
              <FaRegImage
                style={{ marginLeft: "25px", marginTop: "20px" }}
                size={50}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Nature Pic Contest</h2>
              <div style={{ display: "flex", gap: "10px", marginTop: "-20px" }}>
                <button
                  style={{
                    height: "20px",
                    marginTop: "13px",
                    color: "skyblue",
                  }}
                >
                  126
                </button>
                <p style={{ color: "gray" }}>Available Contests</p>
              </div>
            </div>
          </div>
          <img
            src="img1.jpg"
            style={{ height: "32vh", borderRadius: "20px" }}
            alt=""
          />
          <button
            style={{  
              height: "6vh",
              width: "18.5vw",
              marginTop: "20px",
              borderRadius: "20px",
              border: "2px solid skyblue",
              background: "transparent",
              fontSize: "medium",
              color: "skyblue",
            }}
          >
            Browse Nature Pic Contests
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "50px" }}>
            <div style={{ flexBasis: "10%", height: "50px" }}>
              <TbArrowsRandom
                style={{ marginLeft: "25px", marginTop: "20px" }}
                size={50}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Random Pic Contest</h2>
              <div style={{ display: "flex", gap: "10px", marginTop: "-20px" }}>
                <button
                  style={{
                    height: "20px",
                    marginTop: "13px",
                    color: "skyblue",
                  }}
                >
                  126
                </button>
                <p style={{ color: "gray" }}>Available Contests</p>
              </div>
            </div>
          </div>
          <img
            src="img3.jpg"
            style={{ height: "20rem", borderRadius: "20px" }}
            alt=""
          />
          <button
            style={{
              height: "6vh",
              width: "18.5vw",
              marginTop: "20px",
              borderRadius: "20px",
              border: "2px solid skyblue",
              background: "transparent",
              fontSize: "medium",
              color: "skyblue",
            }}
          >
            Browse Nature Pic Contests
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "50px" }}>
            <div style={{ flexBasis: "10%", height: "50px" }}>
              <ImProfile
                style={{ marginLeft: "25px", marginTop: "20px" }}
                size={50}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Portrait Pic Contest</h2>
              <div style={{ display: "flex", gap: "10px", marginTop: "-20px" }}>
                <button
                  style={{
                    height: "20px",
                    marginTop: "13px",
                    color: "skyblue",
                  }}
                >
                  126
                </button>
                <p style={{ color: "gray" }}>Available Contests</p>
              </div>
            </div>
          </div>
          <img
            src="bg.jpg"
            style={{ height: "20rem", borderRadius: "20px" }}
            alt=""
          />
          <button
            style={{
              height: "6vh",
              width: "18.5vw",
              marginTop: "20px",
              borderRadius: "20px",
              border: "2px solid skyblue",
              background: "transparent",
              fontSize: "medium",
              color: "skyblue",
            }}
          >
            Browse Nature Pic Contests
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "50px" }}>
            <div style={{ flexBasis: "10%", height: "50px" }}>
              <HiCamera
                style={{ marginLeft: "25px", marginTop: "20px" }}
                size={50}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Space Pic Contest</h2>
              <div style={{ display: "flex", gap: "10px", marginTop: "-20px" }}>
                <button
                  style={{
                    height: "20px",
                    marginTop: "13px",
                    color: "skyblue",
                  }}
                >
                  126
                </button>
                <p style={{ color: "gray" }}>Available Contests</p>
              </div>
            </div>
          </div>
          <img
            src="pexel.jpg"
            style={{ height: "20rem", borderRadius: "20px" }}
            alt=""
          />
          <button
            style={{
              height: "6vh",
              width: "18.5vw",
              marginTop: "20px",
              borderRadius: "20px",
              border: "2px solid skyblue",
              background: "transparent",
              fontSize: "medium",
              color: "skyblue",
            }}
          >
            Browse Nature Pic Contests
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
