import React from "react";

function Slider() {
  return (
    <div className="middle">
      <div></div>
      <div className="bx">
        <img src="img1.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
      </div>
      <div className="rate bx" style={{display: 'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{display: 'flex',gap:'10px'}}>
          <h2>Walk In The Nature</h2>
          <h2 className="rating">4</h2>
        </div>
				<div>
					<div style={{ display:'flex'}}>
						<h4>Contest Winner:</h4>
						<p style={{marginTop: '22px'}}> Name</p>
					</div>
					<div style={{ display:'flex'}}>
						<h4>Content Author:</h4>
						<p style={{marginTop: '22px'}}> Name</p>
					</div>
					<div style={{ display:'flex'}}>
						<h4>Awards:</h4>
						<p style={{marginTop: '22px'}}> Name</p>
					</div>
				</div>
      </div>
      <div className="bx">
        <img src="img2.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
      </div>
      <div className="rate bx" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{display:'flex', gap: '10px'}}>
          <h2>Walk In The Nature </h2>
          <h2 className="rating">4</h2>
        </div>
				<div>
					<div style={{ display:'flex'}}>
						<h4>Contest Winner:</h4>
						<p style={{marginTop: '22px'}}> Name</p>
					</div>
					<div style={{ display:'flex'}}>
						<h4>Content Author:</h4>
						<p style={{marginTop: '22px'}}> Name</p>
					</div>
					<div style={{ display:'flex'}}>
						<h4>Awards:</h4>
						<p style={{marginTop: '22px'}}> Name</p>
					</div>
				</div>
      </div>
      {/* <div className="bx">
        <img src="img3.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
      </div> */}
      <div></div>
    </div>
  );
}

export default Slider;
