import prisma from "../utils/prisma";
const getCourseWithId = async (id: string) => {
    return prisma.course.findUnique({
        where: {
            id: id
        }
    })
}

const getCourseWithURL = async (slug: string) => {
    return prisma.course.findUnique(
        {
            where: {
                urlPath: slug
            },
            include: {
                sections: {
                    include: {
                        chapters: true
                    },
                },
            }
        })

}

export { getCourseWithId, getCourseWithURL }