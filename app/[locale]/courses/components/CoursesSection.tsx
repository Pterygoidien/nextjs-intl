import { Section } from '@/app/common/utils/Section';
import { Course } from '../types/Course.interface';
import CourseCard from './CourseCard';
import getCourses from '@/app/common/providers/getCourses';


async function getData() {
    const data = await getCourses();
    return data;
}


export default async function CoursesSection() {
    const courses: any = await getData();

    return (

        <div className="flex flex-wrap gap-4 justify-between">
            {courses.map((course: Course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>

    );

}