import React from 'react'

function ThirdPage() {
	return (
		<div className='third' style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
			<div>
				<h3 style={{ textAlign: 'center', color: 'deepskyblue'}}>CLOSED PHOTOGRAPHY CONTESTENTS</h3>
				<h1><span style={{color: 'deepskyblue'}}>Previous Contests</span> With Handpicked <span style={{ color: 'deepskyblue'}}>Winners</span></h1>
			</div>
			<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '100px', marginTop: '50px'}}>
				<div style={{display:'flex', flexDirection: 'column', height: "50vh",width: '25vw', borderRadius: '20px', backgroundColor: 'white'}}>
					<div>
						<img src='img1.jpg' alt='' style={{ borderStartStartRadius: '20px', borderStartEndRadius: '20px', height: '35vh', width: '25vw'}}/>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingInline: '30px', paddingBlock: '10px'}}>
						<div style={{ display: 'flex', flexDirection: 'column'}}>
							<p style={{ fontSize: '20px', fontWeight: 'bold'}}>96 Participants</p>
							<p style={{ marginTop: '-10px'}}>Number Of Artists</p>
						</div>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<p style={{ fontSize: '20px', fontWeight: 'bold' }}>410 Pictures</p>
							<p style={{ marginTop: '-10px'}}>Submitted Pics</p>
						</div>
					</div>
				</div>
				<div style={{display:'flex', flexDirection: 'column', height: "50vh",width: '25vw', borderRadius: '20px', backgroundColor: 'white'}}>
					<div>
						<img src='img3.jpg' alt='' style={{ borderStartStartRadius: '20px', borderStartEndRadius: '20px', height: '35vh', width: '25vw'}}/>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingInline: '30px', paddingBlock: '10px'}}>
						<div style={{ display: 'flex', flexDirection: 'column'}}>
							<p style={{ fontSize: '20px', fontWeight: 'bold'}}>96 Participants</p>
							<p style={{ marginTop: '-10px'}}>Number Of Artists</p>
						</div>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<p style={{ fontSize: '20px', fontWeight: 'bold' }}>410 Pictures</p>
							<p style={{ marginTop: '-10px'}}>Submitted Pics</p>
						</div>
					</div>
				</div>
				<div style={{display:'flex', flexDirection: 'column', height: "50vh",width: '25vw', borderRadius: '20px', backgroundColor: 'white'}}>
					<div>
						<img src='pexel.jpg' alt='' style={{ borderStartStartRadius: '20px', borderStartEndRadius: '20px', height: '35vh', width: '25vw'}}/>
					</div>  
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingInline: '30px', paddingBlock: '10px'}}>
						<div style={{ display: 'flex', flexDirection: 'column'}}>
							<p style={{ fontSize: '20px', fontWeight: 'bold'}}>96 Participants</p>
							<p style={{ marginTop: '-10px'}}>Number Of Artists</p>
						</div>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<p style={{ fontSize: '20px', fontWeight: 'bold' }}>410 Pictures</p>
							<p style={{ marginTop: '-10px'}}>Submitted Pics</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<button style={{ marginTop: '50px', backgroundColor: 'white', color: 'deepskyblue', borderStyle: 'solid',borderRadius: "20px", padding: '10px', height: '6vh', width: '15vw', fontSize: '20px', fontWeight: 'bold', borderColor: 'deepskyblue'}}>Browse Open Contests</button>
			</div>
		</div>
	)
}

export default ThirdPage