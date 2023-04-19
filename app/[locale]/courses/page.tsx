import { Section } from "@/app/common/utils/Section";
import { Course } from "./types/Course.interface";
import CourseCard from "./components/CourseCard";
import getCourses from "@/app/common/providers/getCourses";
import { getTranslations } from "next-intl/server";
import CoursesSection from "./components/CoursesSection";

async function getData() {
    const data = await getCourses();
    return data;
}

export default async function Courses() {
    const t = await getTranslations('courses');
    const courses: any = await getData();

    return (
        <main className="dark:bg-slate-900">
            <Section className="bg-slate-100 dark:bg-slate-900" title={t('browse')}>
                <div className="flex flex-wrap gap-4 justify-between">
                    {courses.map((course: Course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </Section>
        </main>
    );
}
