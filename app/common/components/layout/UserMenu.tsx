'use client'

import { Link } from "next-intl";


interface UserMenuProps {

    currentUser?: any | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {


    return (
        <nav>
            <ul className="flex gap-2">
                <li><Link href="/" tw={undefined}>login</Link></li>
                <li><Link href="/" tw={undefined}>register</Link></li>
            </ul>
        </nav>
    )

}

export default UserMenu;