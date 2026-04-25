import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import { iframe } from 'framer-motion/client'
import ResponsiveIFrame from "@/components/ResponsiveIFrame"
import { formatTime } from "@/helpers/time.js"

function BlogPage({ content, data }) {
  return (
    <>
      <div className="p-20 bg-[#c6b0ad] font-serif text-[#5a4a46] text-xl">
        
        <div className= "mx-auto max-w-4xl p-5 mb-12 bg-[#5a4a46] text-[#c6b0ad] rounded-xl shadow-xl">
          <h1 className = "text-6xl mb-3">{data.title}</h1>
          <h2 className = "indent-1 mb-2">{data.subtitle}</h2>
          <h2 className = "indent-1">{formatTime({start: data.start, end: data.end})} • {new Date(data.start).toLocaleDateString()}</h2>
        </div>

        <article className = {`
          prose 
          max-w-4xl mx-auto
          font-serif text-[#5a4a46] 
          prose-p:leading-8
          prose-headings:text-[#5a4a46] prose-headings:mb-2`}>

          <ReactMarkdown rehypePlugins={[rehypeRaw]}
            components={{
              iframe: ResponsiveIFrame
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

      </div>
    </>
  )
}

export default BlogPage