
import { useLoaderData } from 'react-router-dom';
import CoursesDisplay from '../CourseDisplay/CoursesDisplay';
const Courses = () => {

    const store = useLoaderData()


    return (
        <div className='mt-20 mx-4  sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 grid grid-cols-3 gap-4 grid-rows-2'>
            {
                store.map((param) => <CoursesDisplay key={param._id} course={param}></CoursesDisplay>)
            }
        </div>
    );
};

export default Courses;