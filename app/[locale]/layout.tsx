import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from 'next-intl';
import "../global.css"

import { getCurrentUser } from '../common/providers/getCurrentUser';
import UserMenu from '../common/components/layout/UserMenu';
import ClientOnly from '../common/wrappers/ClientOnly';
import Modal from '../common/components/modals/Modal';


export default async function RootLayout({ children, params }:
    {
        children: React.ReactNode,
        params: { locale: string }
    }) {

    const locale = useLocale();
    const t = await getTranslations('common');
    if (params.locale !== locale) {
        notFound();
    }
    const currentUser = await getCurrentUser();

    return (
        <html lang={locale}>
            <body className="dark:bg-black dark:text-white">


                <header className="border-b-4 p-4 flex justify-between sticky dark:text-white">
                    <Link href="/" tw={undefined}><h1>{t('website')}</h1></Link>
                    <ClientOnly>
                        <UserMenu currentUser={currentUser} dic={{ login: t('login'), register: t('register') }} />
                    </ClientOnly>
                </header>

                <main>

                    {children}
                </main>


                <footer>
                    <p>{t('website')}</p>
                </footer>
            </body>

        </html>
    )

}