-- CreateEnum
CREATE TYPE "Access" AS ENUM ('PUBLIC', 'MEMBERSHIP', 'PREMIUM', 'PRIVATE');

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "urlPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "access" "Access" NOT NULL DEFAULT 'PUBLIC',

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "urlPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "urlPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "urlPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToSection" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ChapterToSection" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_urlPath_key" ON "Course"("urlPath");

-- CreateIndex
CREATE UNIQUE INDEX "Section_urlPath_key" ON "Section"("urlPath");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_urlPath_key" ON "Chapter"("urlPath");

-- CreateIndex
CREATE UNIQUE INDEX "Page_urlPath_key" ON "Page"("urlPath");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToSection_AB_unique" ON "_CourseToSection"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToSection_B_index" ON "_CourseToSection"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChapterToSection_AB_unique" ON "_ChapterToSection"("A", "B");

-- CreateIndex
CREATE INDEX "_ChapterToSection_B_index" ON "_ChapterToSection"("B");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToSection" ADD CONSTRAINT "_CourseToSection_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToSection" ADD CONSTRAINT "_CourseToSection_B_fkey" FOREIGN KEY ("B") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChapterToSection" ADD CONSTRAINT "_ChapterToSection_A_fkey" FOREIGN KEY ("A") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChapterToSection" ADD CONSTRAINT "_ChapterToSection_B_fkey" FOREIGN KEY ("B") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
