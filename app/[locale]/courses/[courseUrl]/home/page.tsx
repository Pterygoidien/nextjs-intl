import { Link } from 'next-intl';
import { Section } from '@/app/common/utils/Section';

export default function Home() {

    return (
        <main>
            <Section title="Welcome">
                <p>Hello darkness my old friend</p>
            </Section>
            <Section className="bg-slate-200 dark:bg-slate-800 p-4">
                <p>Je suis le contenu de la section</p>
                <p>
                    <Link href="/courses" tw={undefined}>Voir les cours</Link>

                </p>
            </Section>
        </main>
    );
}