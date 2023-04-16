import Link from "next/link";
import { Course } from "../types/Course.interface";

export default function CourseCard({ course }: { course: Course }) {
    return (

        <article key={course.id} className="flex grow flex-col basis-80 bg-white rounded-xl overflow-hidden dark:bg-zinc-800">
            <Link href={`./fr/courses/${course.urlPath}`}>
                <div className="card-image ">
                    <img src={course.imageURL} alt={course.name} className="w-full" />
                </div>
                <div className="card-content p-4">
                    <h3 className="text-xl font-medium">{course.name}</h3>
                    <p> {course.description}</p>

                </div>
            </Link>
        </article>
    );
}