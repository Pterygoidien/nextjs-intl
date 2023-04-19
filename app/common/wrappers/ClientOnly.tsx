'use client'

import React, { useEffect, useState } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode
}



const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {


    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return
    (<>
        {children}
    </>)

}

export default ClientOnly;