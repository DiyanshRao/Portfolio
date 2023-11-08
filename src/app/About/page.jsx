const about =
  'I am a passionate software developer with a strong foundation in technology. I earned my Bachelor&apos;s degree with a remarkable 8.01 pointer from Shoolini University, reflecting my dedication and commitment to learning. With a year of professional experience as software developer, I have honed my skills and expanded my horizons.My love for coding is the driving force behind my career, and I thriveon tackling complex problems and building innovative solutions. I possess a deep understanding of backend technologies, including Spring Boot and Express, which enables me to create robust and efficient systems. My journey also includes working with modern technologies like Next.js and Express, allowing me to develop web applications that deliver exceptional user experiences. Notably, my dedication to learning and problem-solving has been acknowledged by Geek for Geeks, where I achieved the top institutional ranking'
const Cards = [
  {
    name: 'LinkedIn',
    img: '/linkedin.png',
    text: '',
    link: 'https://www.linkedin.com/in/diyanshrao/',
  },
  {
    name: 'Github',
    img: '/github.png',
    link: 'https://github.com/DiyanshRao',
  },
  {
    name: 'LeetCode',
    img: '/leetcode.png',
    link: 'https://leetcode.com/ancient_coder/',
  },
  {
    name: 'GeeksForGeeks',
    img: '/gfg.png',
    link: 'https://auth.geeksforgeeks.org/college/shoolini-university-of-biotechnology-and-management-sciences/',
  },
  {
    name: 'HackerRank',
    img: '/hackerrank.png',
    link: 'https://www.hackerrank.com/profile/diyanshr',
  },
]
const courses = [
  {
    name: 'Google Data Analytics',
    about:
      'Data analytics is the collection, transformation, and organization of data in order to draw conclusions, make predictions, and drive informed decision making.',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/U8SXV7NA77BK',
  },
  {
    name: 'Basic System Programming on IBM Z',
    about:
      'Learn new concepts from industry experts,Gain a foundational understanding of a subject or tool,Develop job-relevant skills with hands-on projects,Earn a shareable career certificate from IBM',
    link: 'https://www.coursera.org/account/accomplishments/verify/W3GXDSQMFWWV',
  },
  {
    name: 'Git for Developers Using Github',
    about:
      'Gain familiarity with Github site to fork and clone a repository Create branches, commit and push changes, and make a pull request View and work with commits and logs',
    link: 'https://www.coursera.org/account/accomplishments/verify/XDQ94C3QFVJ9',
  },
  {
    name: 'Programming Foundations with JavaScript, HTML and CSS',
    about:
      'Learn new concepts from industry experts ,Gain a foundational understanding of a subject or tool,Develop job-relevant skills with hands-on projects',
    link: 'https://www.coursera.org/account/accomplishments/verify/639N6J7B6SJ6',
  },
]
const page = () => {
  return (
    <div className='my-10'>
      <div className='flex flex-col gap-5 justify-center items-center px-5'>
        <h1 className='sm:text-4xl text-xl font-bold'>About Me </h1>
        <p className=' sm:max-w-[1300px] text-center'>{about}</p>
      </div>
      <div className='mt-10 flex flex-wrap gap-5 items-center justify-center'>
        {Cards.map((card) => (
          <a
            href={card.link}
            className='flex-shrink-0 border border-gray-400 flex flex-row py-2 px-4 gap-4 w-[250px] h-[80px] items-center '
          >
            <img src={card.img} className='w-[50px] h-[50px] rounded-md' />
            <div>
              <h1 className='font-bold '>{card.name}</h1>
              <p>{card.text}</p>
            </div>
          </a>
        ))}
      </div>
      <div className='mt-10 flex flex-wrap gap-5 items-center justify-center mx-5'>
        {courses.map((course) => (
          <dvi className='flex-shrink-0 border border-gray-400 flex flex-row py-2 px-4 gap-4    w-full '>
            <img src='/coursera.png' className='w-[80px]' />
            <div>
              <h1 className='font-bold text-left '>{course.name}</h1>
              <p className='text-left text-sm'>{course.about}</p>
            </div>
          </dvi>
        ))}
        <a
          href='https://github.com/DiyanshRao/Cerifications-'
          className='p-5 border border-gray-400 rounded-md'
        >
          And Many More+
        </a>
      </div>
    </div>
  )
}
export default page
