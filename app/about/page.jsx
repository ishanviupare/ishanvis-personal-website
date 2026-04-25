import React from 'react';

const about = () => {
  return (
    <>
    
    <div className="h-auto xl:h-screen overflow-auto xl:overflow-hidden">
        <div className = "h-full bg-[#c6b0ad] text-[#5a4a46] font-serif p-20 flex flex-col">
        <h1 className = "text-6xl mb-16"> About... </h1>
          <div className = "min-h-0 mx-auto max-w-9/10 max-h-full flex flex-col xl:flex-row gap-12">

            <div className = "xl:w-2/5 flex flexcol sm:justify-center items-center">
            <div className = "w-full h-[300px] xl:h-auto overflow-hidden rounded-xl shadow-xl">
              <img src = "profile.webp" className = "object-cover object-center w-full min-w-50 h-full min-h-130"/>
            </div>
            </div>

            
            <div className = "xl:w-3/5 bg-[#5a4a46] text-[#c6b0ad] leading-9 sm:text-lg xl:text-2xl p-12 shadow-xl rounded-xl">
            <div className = "h-full overflow-y-auto pr-10 -mr-2 scrollbar-custom space-y-6">
              <p>Hello! My name is Ishanvi Upare. I'm a Computer Science major and Disability Inclusion minor at UIC.</p>
              <p>I love to sing, write, and draw in my spare time.</p>
              <p>I hope to someday work in UI/UX or Product Design, where I will focus on making products
                more accessible for a broader user-base. I'd also like to 
                release my own poetry book and continue to study opera on the side.</p>
              <p>Over time, I've realized that I want to become someone who knows enough to help and teach others. I love how much there is to learn in the Computer Science field, and I've made it my goal to learn to the best of my ability. It's all for that feeling you when you're able to help someone!</p>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default about;