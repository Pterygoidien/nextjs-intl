import { getCourses } from "./services/getCourses"

export async function GET(request: Request) {
    const courses = await getCourses();
    return new Response(JSON.stringify(courses))
}
