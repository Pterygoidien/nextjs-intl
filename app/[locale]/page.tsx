
import { Link, useTranslations } from "next-intl";
import { Section } from "../common/utils/Section";

export default function Home() {
    const t = useTranslations('index');
    return (
        <main>
            <Section title={t('welcome')}>
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
