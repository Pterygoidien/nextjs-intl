import { Section } from "@/app/common/utils/Section";

export default function SectionsViewer({ sections }: { sections: any }) {

    return (
        <Section title="Sections du livre">
            {sections.map((section: any) => (
                <div key={section.id} className="flex flex-row gap-2">
                    <h3>{section.name}</h3>
                    <p>{section.description}</p>
                    {sections.chapters && (
                        <div className="flex flex-col gap-2">
                            {section.chapters.map((chapter: any) => (
                                <div key={chapter.id} className="flex flex-row gap-2">
                                    <h4>{chapter.name}</h4>
                                    <p>{chapter.description}</p>
                                </div>
                            ))}
                        </div>

                    )}
                </div>
            ))}
        </Section>

    )
}