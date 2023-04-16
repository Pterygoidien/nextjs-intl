import prisma from "../utils/prisma";

export default async function getCourses() {
    return prisma.course.findMany();
}