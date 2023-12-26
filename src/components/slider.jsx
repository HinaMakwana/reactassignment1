import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider() {
  const divsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
	const startIndex = 0;
  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 5));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage < 5 ? prevPage + 1 : 0));
  };

  const endIndex = currentPage + divsPerPage;

  return (
    <div className="middle">
      <div>
				<button className="circle-button" onClick={handlePreviousClick} >
					<IoIosArrowBack size={30} />
				</button>
			</div>
			{currentPage <= startIndex && startIndex < endIndex && (
				<div className={`bx`}>
					<img src="img1.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
				</div>
      )}
			{currentPage <= startIndex + 1 && startIndex + 1 < endIndex && (
				<div className={`rate bx`} style={{display: 'flex',flexDirection:'column',alignItems:'center'}}>
					<div style={{display: 'flex',gap:'10px',marginTop: '20px'}}>
						<h2 >Walk In The Nature</h2>
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
      )}
			{currentPage <= startIndex + 2 && startIndex + 2 < endIndex && (
				<div className={`bx`}>
					<img src="pexel.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
				</div>
      )}
			{currentPage <= startIndex + 3 && startIndex + 3 < endIndex && (
				<div className={`bx rate`} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
					<div style={{display:'flex', gap: '10px', marginTop: '20px'}}>
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
      )}
			{currentPage <= startIndex + 4 && startIndex + 4 < endIndex && (
				<div className={`bx`}>
					<img src="img3.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
				</div>
      )}
			{currentPage <= startIndex + 5 && startIndex + 5 < endIndex && (
				<div className={`bx rate`} style={{display: 'flex',flexDirection:'column',alignItems:'center'}}>
					<div style={{display: 'flex',gap:'10px',marginTop: '20px'}}>
						<h2 >Walk In The Nature</h2>
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
      )}
			{currentPage <= startIndex + 6 && startIndex + 6 < endIndex && (
				<div className={`bx`}>
					<img src="bg.jpg" style={{ height:'18rem', width:'25rem'}} alt=""/>
				</div>
      )}
			{currentPage <= startIndex + 7 && startIndex + 7 < endIndex && (
				<div className={`bx rate`} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
					<div style={{display:'flex', gap: '10px', marginTop: '20px'}}>
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
      )}
      <div>
				<button className="circle-button" onClick={handleNextClick}>
					<IoIosArrowForward size={30}/>
				</button>
			</div>
    </div>
  );
}

export default Slider;
