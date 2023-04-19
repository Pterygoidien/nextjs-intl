import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }];
}



export default async function IntClientProvider({ children, locale }) {

    let messages;
    try {
        messages = (await import(`../../../dictionary/fr.json`)).default;
    } catch (e) {
        notFound()
    }

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
    )
}