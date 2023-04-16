import {
    PrismaClient
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.course.create({
        data: {
            name: "Course 1",
            description: "Course 1 description",
            urlPath: "course-1",
            access: "PUBLIC",
            sections: {
                create: [
                    {
                        name: "Section 1",
                        description: "Section 1 description",
                        urlPath: "section-1",
                        chapters: {
                            create: [
                                {
                                    name: "Chapter 1",
                                    description: "Chapter 1 description",
                                    urlPath: "chapter-1",
                                    pages: {
                                        create: [
                                            {
                                                name: "Page 1",
                                                description: "Page 1 description",
                                                urlPath: "page-1",
                                                content: "Page 1 content",
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }]
            }
        }
    });
}

main().then(async () => {
    await prisma.$disconnect();
}).catch((e) => {
    throw e;
}
);
