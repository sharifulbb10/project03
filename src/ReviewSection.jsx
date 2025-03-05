import React from 'react'

function ReviewSection() {
	return (
		<div className="flex flex-col mx-5 mb-5">
			<h2 className="mb-3">Review from my teachers</h2>
			<div className="md:flex md:flex-row md:mx-5">
				<div className="border-1 rounded-3xl py-2 px-3 my-2 md:mx-3">
					<p className="mb-2">John doe was a brilliant student, always stood out with his assignments.</p>
					<p>John Doe<br/>Assistant Professor</p>
				</div>
			
				<div className="border-1 rounded-3xl py-2 px-3 my-2 md:mx-3">
					<p className="mb-2">John doe was a brilliant student, always stood out with his assignments.</p>
					<p>John Doe<br/>Assistant Professor</p>
				</div>
			
				<div className="border-1 rounded-3xl py-2 px-3 my-2 md:mx-3">
					<p className="mb-2">John doe was a brilliant student, always stood out with his assignments.</p>
					<p>John Doe<br/>Assistant Professor</p>
				</div>
			</div>
		</div>
	)
}

export default ReviewSection