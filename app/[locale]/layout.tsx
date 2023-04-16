import { useLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { Link } from 'next-intl';
import "../global.css"


export default function RootLayout({ children, params }:
    {
        children: React.ReactNode,
        params: { locale: string }
    }) {

    const locale = useLocale();


    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

    const t = useTranslations('common');

    return (
        <html lang={locale}>


            <body className="dark:bg-black dark:text-white">
                <header className="border-b-4 p-4 flex justify-between sticky dark:text-white">
                    <Link href="/" tw={undefined}><h1>{t('website')}</h1></Link>
                    <nav>
                        <ul className="flex gap-2">
                            <li><Link href="/" tw={undefined}>{t('login')}</Link></li>
                            <li><Link href="/" tw={undefined}>{t('register')}</Link></li>
                        </ul>
                    </nav>
                </header>


                {children}

                <footer>
                    <p>{t('website')}</p>
                </footer>
            </body>

        </html>
    )

}