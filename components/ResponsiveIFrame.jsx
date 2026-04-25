'use client' 
{/*using for weird scroll behavior with embed*/}

export default function ResponsiveIFrame({ className = "", ...props }){
    const src = props.src || ""
    if (src.includes("youtube") || src.includes("youtu.be")) {
        return (
        <iframe {...props} className={`${className}`}></iframe>
        )
    }
    return (
        <div
            className=""
            onPointerEnter={() => {
                document.body.style.overflow = 'hidden'
            }}
            onPointerLeave={() => {
                document.body.style.overflow = ''
            }}
        >
        <iframe {...props} className = {`${className}`}> </iframe>
        </div>
    )
}