import React from 'react'

function MainSection() {
  return (
    <div className="flex justify-center flex-col mx-2 md:mx-8 md:flex-row mb-5">
      <div className="m-2 md:w-2/8">
        <h2 className="mb-3 ml-4">Projects</h2>
        <ul>
          <li className="bg-green-200 p-2 m-2 rounded-md text-center md:text-left hover:bg-yellow-200 cursor-pointer">HTML Only Portfolio</li>
          <li className="bg-green-200 p-2 m-2 rounded-md text-center md:text-left hover:bg-yellow-200 cursor-pointer">Calculator</li>
          <li className="bg-green-200 p-2 m-2 rounded-md text-center md:text-left hover:bg-yellow-200 cursor-pointer">Quiz App</li>
          <li className="bg-green-200 p-2 m-2 rounded-md text-center md:text-left hover:bg-yellow-200 cursor-pointer">Countdown Timer</li>
          <li className="bg-green-200 p-2 m-2 rounded-md text-center md:text-left hover:bg-yellow-200 cursor-pointer">Product Upcoming Page</li>
        </ul>
      </div>
      
      <div className="m-2 p-2 md:w-3/8">
        <h2 className="mb-3">Work Experience</h2>

        <div className="mb-3 p-2 bg-gray-200 rounded-sm">
          <h3 className="mb-2">roadmap.sh</h3>
          <p>Solved all the frontend projects</p>
          <a href="#" className="text-blue-600">Visit my Profile</a> 
        </div>

        <div className="p-2 bg-gray-200 rounded-sm">
          <h3 className="mb-2">Opensource Work</h3>
          <p>Contributed to 50 opensource projects. Made my own projects with 200 github stars.</p>
          <a href="#" className="text-blue-600">Visit my GitHub Profile</a> 
        </div>

      </div>

      <div className="m-2 p-2 md:w-3/8 md:pl-4 md:border-l-1">
        <h2 className="mb-3">Education</h2>
        <div>
          <p>
            Graduated with 3.56 out of 4 CGPA. Won Acme Hechathon. Organized 30 sessions.<br/><br/>
            Courses I took:<br/><br/>
            &nbsp; &nbsp; - Computer Programming<br/>
            &nbsp; &nbsp; - Data Structures and Algorithms<br/>
            &nbsp; &nbsp; - Web Engineering<br/>
            &nbsp; &nbsp; - Artificial Intelligence<br/>
            &nbsp; &nbsp; - Human Computer Integration<br/>
            &nbsp; &nbsp; - Computer Graphics<br/>
            &nbsp; &nbsp; - Database Management Systems<br/>
            &nbsp; &nbsp; - Distributed Database Systems<br/>
            &nbsp; &nbsp; - Discrete Mathematics
          </p>
        </div>  
      </div>
    </div>
  )
}

export default MainSection
