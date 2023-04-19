'use client'

import { Link, useTranslations } from "next-intl";


interface UserMenuProps {

    currentUser?: any | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

    const t = useTranslations('common')


    return (
        <nav>
            <ul className="flex gap-2">
                <li><Link href="/" tw={undefined}>{t('login')}</Link></li>
                <li><Link href="/" tw={undefined}>{t('logout')}</Link></li>
            </ul>
        </nav>
    )

}

export default UserMenu;