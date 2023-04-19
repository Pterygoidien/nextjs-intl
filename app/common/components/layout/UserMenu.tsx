'use client'

import { Link, useTranslations } from "next-intl";


interface UserMenuProps {

    currentUser?: any | null;
    dic?: { login: string, register: string }
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser, dic }) => {
    return (
        <nav>
            {currentUser ? (<>Se déconnecter</>) : (<ul className="flex gap-2">
                <li><Link href="/" tw={undefined}>{dic.login ? dic.login : 'login'}</Link></li >
                <li><Link href="/" tw={undefined}>{dic.register ? dic.register : 'sign up'}</Link></li>
            </ul>)}

        </nav >
    )

}

export default UserMenu;