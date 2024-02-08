import Tech from '@/components/Tech'
import Works from '@/components/Works'
import Experience from '@/components/Experience'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center my-10'>
        <h1 className='font-bold sm:text-4xl text-xl '>Technologies I Use </h1>
        <Tech />
        <Experience />
        <Works />
      </div>
    </>
  )
}
export default page
