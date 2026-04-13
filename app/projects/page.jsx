import React from 'react'

const projects = () => {
  return (
    <div className="mr-[25%]">
      <div className="min-h-screen p-20 bg-[#c6b0ad] font-serif text-[#5a4a46]">
          
        <h1 className = "text-6xl mb-16"> Projects... </h1>

        {/*1st card*/}
        <div className = "grid grid-cols-2 gap-24 justify-align py-16">
          <div className = "text-xl space-y-7">
            <p>While working with UIC's WiCS WebDev team, I started developing my own personal website using Next.js and React.</p>
            <p>I began by designing layouts in Figma, then worked on bringing those designs to life through code. Along the way, I built reusable components and structured the site using Next.js's App Router.</p>
            <p>I also explored how to make my site more interactive, using routing and conditional rendering to create features like dynamic navigation and active page highlighting.</p>
            <p>To make the website responsive, I used Tailwind CSS and breakpoints to allow the layout to adapt cleanly across different screen sizes.</p>
            <p>During the whole process, I gained experience using Git and GitHub in a team setting.</p>
            <p>This project has been a really rewarding way to combine design and development, and to see how ideas move from concept to a fully functional site.</p>
          </div>

          <div>
            <video src = "Video Project.mp4" className = "w-150"/>
          </div>
        </div>

        {/*2nd card*/}
        <div className = "grid grid-cols-2 gap-24 justify-self py-16">
          <div>
            <img src = "_3.jpg" className = "w-full max-w-md"/>
          </div>

          <div className = "text-xl space-y-7">
            <p>To be continued...</p>
          </div>
        </div>

        {/*3rd card*/}
        <div className = "grid grid-cols-2 gap-24 justify-self py-16">
          <div className = "text-xl space-y-7">
            <p>To be continued...</p>
          </div>

          <div>
            <img src = "_3.jpg" className = "w-full max-w-md"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default projects