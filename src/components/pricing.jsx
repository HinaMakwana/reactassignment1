import React from 'react'

function Pricing() {
	return (
		<div className='fourth'>
			<div>
				<p style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600', color: 'deepskyblue'}}>OUR PRICING</p>
				<h1 style={{ textAlign: 'center'}}>Photography <span style={{color: 'deepskyblue'}}>Contest Plans</span> And Price <span style={{color: 'deepskyblue'}}>Awards</span></h1>
			</div>
			<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center',gap: '30px', marginTop: '70px'}}>
				<div style={{ height: '70vh', width: '20vw', padding: '30px', borderRadius: '20px', border: '1px solid gray	'}}>
					<img src='pricing-01.jpg' alt='' style={{marginLeft: '15%', marginTop: '20px'}}/>
					<p style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>Basic Plan</p>
					<hr />
					<p style={{ color: 'deepskyblue', textAlign: 'center', marginTop: '30px'}}>Lorem Ipsum Dolores Sonte</p>
					<p style={{ color: 'deepskyblue', textAlign: 'center'}}>Price Lorem Ipsum Dol</p>
					<p style={{ color: 'deepskyblue', textAlign: 'center'}}>Matrios Snippet Kogi</p>
					<del style={{ textAlign: 'center', marginLeft: '20px', display: 'block'}}>Denim Snippet Kogi</del><br />
					<del style={{ textAlign: 'center', display: 'block'}}>Digital Photography Awards</del>
					<h1 style={{ marginTop: '60px', textAlign: 'center'}}>$25 USD</h1>
					<button style={{ color: 'deepskyblue', backgroundColor: 'white', border: 'deepskyblue', borderStyle: "solid",borderColor: 'deepskyblue',height: '5vh', width: '10vw', fontSize: '20px', borderRadius: '10px', marginLeft: '25%'}}>Choose This Plan</button>
				</div>
				<div style={{ height: '70vh', width: '20vw', border: '1px solid gray', padding: '30px', borderRadius: '20px'}}>
					<img src='pricing-02.jpg' alt='' style={{marginLeft: '17%', marginTop: '20px'}}/>
					<p style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>Basic Plan</p>
					<hr />
					<p style={{ color: 'deepskyblue', textAlign: 'center',marginTop: '30px'}}>Lorem Ipsum Dolores Sonte</p>
					<p style={{ color: 'deepskyblue', textAlign: 'center'}}>Price Lorem Ipsum Dol</p>
					<p style={{ color: 'deepskyblue', textAlign: 'center'}}>Matrios Snippet Kogi</p>
					<p style={{ textAlign: 'center', color: 'deepskyblue'}}>Denim Snippet Kogi</p><br />
					<del style={{ textAlign: 'center', display: 'block', marginTop: '-10px'}}>Digital Photography Awards</del>
					<h1 style={{ marginTop: '60px', textAlign: 'center'}}>$25 USD</h1>
					<button style={{ color: 'deepskyblue', backgroundColor: 'white', border: 'deepskyblue', borderStyle: "solid",borderColor: 'deepskyblue',height: '5vh', width: '10vw', fontSize: '20px', borderRadius: '10px', marginLeft: '25%'}}>Choose This Plan</button>
				</div>
				<div style={{ height: '70vh', width: '20vw', border: '1px solid gray', padding: '30px', borderRadius: '20px'}}>
					<img src='pricing-01.jpg' alt='' style={{marginLeft: '15%',marginTop: '20px'}}/>
					<p style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center'}}>Basic Plan</p>
					<hr />
					<p style={{ color: 'deepskyblue', textAlign: 'center', marginTop: '30px'}}>Lorem Ipsum Dolores Sonte</p>
					<p style={{ color: 'deepskyblue', textAlign: 'center'}}>Price Lorem Ipsum Dol</p>
					<p style={{ color: 'deepskyblue', textAlign: 'center'}}>Matrios Snippet Kogi</p>
					<p style={{ textAlign: 'center', marginLeft: '20px', color: 'deepskyblue'}}>Denim Snippet Kogi</p><br />
					<p style={{ textAlign: 'center', color: 'deepskyblue', marginTop: '-10px'}}>Digital Photography Awards</p>
					<h1 style={{ marginTop: '60px', textAlign: 'center'}}>$25 USD</h1>
					<button style={{ color: 'deepskyblue', backgroundColor: 'white', border: 'deepskyblue', borderStyle: "solid",borderColor: 'deepskyblue',height: '5vh', width: '10vw', fontSize: '20px', borderRadius: '10px', marginLeft: '25%'}}>Choose This Plan</button>
				</div>
			</div>
		</div>
	)
}

export default Pricing