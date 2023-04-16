export default function ChaptersViewer({ chapters }: { chapters: any }) {

    return (
        <>
            {chapters.map((chapter: any) => (
                <div key={chapter.id} className="flex flex-row gap-2">
                    <h3>{chapter.name}</h3>
                    <p>{chapter.description}</p>
                </div>
            ))}
        </>

    )
}
