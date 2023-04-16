import prisma from "../utils/prisma";
const getCourseWithId = async (id: string) => {
    return prisma.course.findUnique({
        where: {
            id: id
        }
    })
}

const getCourseWithURL = async (slug: string) => {
    return prisma.course.findUnique({
        where: {
            urlPath: slug
        }
    })
}

export { getCourseWithId, getCourseWithURL }