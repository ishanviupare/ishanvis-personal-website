import React from 'react';

const about = () => {
  return (
    <>
    
    <div className="mr-[25%]">
        {/*set background color and make sure everything is horizontally centered*/}
        <div id = "main-container" className = "h-screen bg-[#c6b0ad] flex justify-center">

          {/*create two columns vertically centered, width of column, num colums, vertically center*/}
          <div className = "w-4xl grid grid-cols-2 items-center">

            {/*left side (header and photo) */}
            {/*horizontal columns, start at left edge of flex container with vertical gap 10*/}
            <div className = "flex flex-col md:items-start gap-10">
              <h1 className = "text-6xl font-serif text-[#5a4a46]"> About... </h1>
              <img src = "profile.webp" className = "w-100"/>
            </div>

            {/*right side (description)*/}
            <div className = "text-[#5a4a46] text-2xl font-serif space-y-7">
              <p>Hello! My name is Ishanvi Upare. I'm a Computer Science major and Disability Inclusion minor at UIC.</p>
              <p>I love to sing, write, and draw in my spare time.</p>
              <p>I hope to someday work in UI/UX or Product Design, where I will focus on making products
                more accessible for a broader user-base. I'd also like to 
                release my own poetry book and continue to study opera on the side.</p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default about;