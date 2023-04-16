import { getChaptersFromSection } from "@/app/common/providers/getSingleCourse";
import { Section } from "@/app/common/utils/Section";



export default function SectionsViewer({ sections }: { sections: any }) {



    return (
        <Section title="Sections du livre">
            {sections.map((section: any) => (
                <div key={section.id} className="flex flex-row gap-2">
                    <h3>{section.name}</h3>
                    <p>{section.description}</p>
                    {section.chapters ? (


                        <ul>
                            {section.chapters.map((chapter: any) => (
                                <li key={chapter.id}>
                                    <h4>{chapter.name}</h4>
                                    <p>{chapter.description}</p>
                                </li>
                            ))}

                        </ul>

                    ) : 'aucun chapitre'}


                </div>
            ))}
        </Section>

    )
}