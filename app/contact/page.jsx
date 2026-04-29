import { getDigestForWellKnownError } from 'next/dist/server/app-render/create-error-handler'
import React from 'react'
import Link from "next/link";

export const metadata = {
  title: "Contact Me! 𓍢ִ໋❀",
}

const contact = () => {
  return (
      <div className = "h-screen bg-[#c6b0ad] p-20">
        <h1 className = "text-4xl md:text-6xl font-serif text-[#5a4a46] mb-20"> Contacts... </h1>

      <div className="flex flex-col items-center justify-center text-center gap-12">          
        <div className = "md:flex justify-center gap-20">
            <a href = "mailto:ishanviupare@gmail.com">
              <img src = "/mail.png" className = "w-25"/>
            </a>
            <a href = "https://www.linkedin.com/in/ishanviupare/" target = "_blank">
              <img src = "/Linkedin.png" className = "w-25"/>
            </a>
            <a href = "https://github.com/ishanviupare" target = "_blank">
              <img src = "/Github.png" className = "w-25"/>
            </a>
          </div>
          <img src = "flower.png" className = "w-200 rounded-xl shadow-xl opacity-0 md:opacity-100"/>
        </div>

      </div>
  )
}

export default contact