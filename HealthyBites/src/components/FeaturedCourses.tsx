import Link from 'next/link'; // Import Link for routing
import courseData from '../data/music_courses.json'; // Assuming courseData is used elsewhere

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}



function FeaturedCourses() {
    courseData.courses.filter(course=> course.isFeatured)


  return (
    <div className='py-12 bg-gray-900'>
      {/* Section Title */}
      <div>
        <div className="text-center">
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
            FEATURED CUISINES
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
          Get ready to explore our delicious range of dishes
          </p>
        </div>
      </div>

      {/* Link to All Courses */}
      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Cusines
        </Link>
      </div>
      
      {/* Placeholder Section */}
      <div className="text-center mt-20 text-white">
      Get ready to explore our delicious range of
      </div>
    </div>
  );
}

export default FeaturedCourses;