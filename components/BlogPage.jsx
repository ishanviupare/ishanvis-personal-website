import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link'
import { iframe } from 'framer-motion/client'
import ResponsiveIFrame from "@/components/ResponsiveIFrame"


function BlogPage({ content, data }) {
  return (
    <>
      <div className="min-h-screen p-20 bg-[#c6b0ad] font-serif text-[#5a4a46]">
        <h1 className = "text-6xl mb-2">{data.title}</h1>
        <h2 className = "text-xl mb-6">{new Date(data.date).toLocaleDateString()}</h2>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}
        components={{
          iframe: ResponsiveIFrame
        }}
      >
        {content}
      </ReactMarkdown>
      </div>
    </>
  )
}

export default BlogPage