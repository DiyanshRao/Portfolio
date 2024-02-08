import { useEffect } from 'react'
import Typewriter from 'typewriter-effect'

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [setLoading])

  return (
    <div className='flex justify-center items-center font-Valen h-screen w-full font-bold text-3xl text-white'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(`Diyansh Rao`).start()
        }}
      />
    </div>
  )
}
export default Loading
