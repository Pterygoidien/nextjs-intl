'use client';

import { NextIntlClientProvider } from 'next-intl';
import React, { useEffect, useState } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode,
    locale: string
}
const ClientOnly: React.FC<ClientOnlyProps> = ({
    children, locale
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) return null;

    return (

        <NextIntlClientProvider locale={locale}>
            {children}
        </NextIntlClientProvider>

    );
};

export default ClientOnly;