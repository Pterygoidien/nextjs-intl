import Link from "next/link";
import { Course } from "../types/Course.interface";

export default function CourseCard({ course }: { course: Course }) {
    return (

        <article key={course.id} className="flex grow flex-col basis-80 bg-white rounded-xl overflow-hidden dark:bg-zinc-800">
            <Link href={`./fr/courses/${course.link}`}>
                <div className="card-image ">
                    <img src={course.image} alt={course.title} className="w-full" />
                </div>
                <div className="card-content p-4">
                    <h3 className="text-xl font-medium">{course.title}</h3>
                    <p> {course.description}</p>

                </div>
            </Link>
        </article>
    );
}