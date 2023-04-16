import { Section } from "@/app/common/utils/Section";
import { Course } from "./types/Course.interface";
import CourseCard from "./components/CourseCard";
import getCourses from "@/app/common/providers/getCourses";

async function getData() {
    const data = await fetch("http://localhost:3000/api/courses", {
        next: {
            revalidate: 10
        }
    });
    return data.json();
}

async function getAlternateCourses() {
    const data = getCourses();
    return data;
}

export default async function Courses() {
    const courses: Course[] = await getData();
    const alternateCourses: any[] = await getAlternateCourses();
    console.log(alternateCourses)

    return (
        <main className="dark:bg-slate-900">
            <Section className="bg-slate-100 dark:bg-slate-900" title="Parcourir nos cours">
                <div className="flex flex-wrap gap-4 justify-between">
                    {courses.map((course: Course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </Section>
        </main>
    );
}