import { getDigestForWellKnownError } from 'next/dist/server/app-render/create-error-handler'
import React from 'react'
import Link from "next/link";

export const metadata = {
  title: "Contact Me! 𓍢ִ໋❀",
}

const contact = () => {
  return (
      <div className = "h-screen bg-[#c6b0ad] p-20">
        <h1 className = "text-6xl font-serif text-[#5a4a46]"> Contacts... </h1>

        <div className = "flex flex-col items-center gap-12 p-20">
          <div className = "flex justify-center gap-20">
            <a href = "mailto:ishanviupare@gmail.com">
              <img src = "/mail.png" className = "w-25"/>
            </a>
            <a href = "https://www.linkedin.com/in/ishanvi-upare-091910344/" target = "_blank">
              <img src = "/Linkedin.png" className = "w-25"/>
            </a>
            <a href = "https://github.com/ishanviupare" target = "_blank">
              <img src = "/Github.png" className = "w-25"/>
            </a>
          </div>
          <img src = "flower.png" className = "w-200 rounded-xl shadow-xl"/>
        </div>

      </div>
  )
}

export default contact