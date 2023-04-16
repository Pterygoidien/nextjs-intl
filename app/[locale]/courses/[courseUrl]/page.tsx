import { getCourseWithURL } from "@/app/common/providers/getSingleCourse";
import { Section } from "@/app/common/utils/Section";
import SectionsViewer from "./components/SectionsViewer";


const getData = async (courseUrl: string) => {
    const data = getCourseWithURL(courseUrl);
    return data;
}


export default async function CourseViewer({ params }: { params: { courseUrl: string } }) {
    const { courseUrl } = params;
    const courses = await getData(courseUrl);

    if (!courses) return (
        <main>
            <Section>

                <h1>Course Viewer</h1>
                <p>Course not found</p>
            </Section>
        </main>)

    console.log(courses)

    return (
        <main>
            <Section title='visionner un cours'>
                <nav className="w-full rounded-md">
                    <ol className="list-reset flex">
                        <li>
                            <a
                                href="#"
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            >Home</a
                            >
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            >Library</a
                            >
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                        </li>
                        <li className="text-neutral-500 dark:text-neutral-400">Data</li>
                    </ol>
                </nav>
                <h2>{courses.name}</h2>
                <p>Description: {courses.description}</p>
                {courses.sections && <SectionsViewer sections={courses.sections} />}
            </Section>

        </main>
    )
}  