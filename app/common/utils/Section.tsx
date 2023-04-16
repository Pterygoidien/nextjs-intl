import { ReactNode } from 'react'

export const Section = ({ children, title, className }: { children: ReactNode, title?: string, className?: string }) => {
    return (
        <section className={`p-4 ${className}`}>
            <div className="container mx-auto">
                {title && <h2 className='text-3xl my-6 font-semibold'>{title}</h2>}
                {children}
            </div>

        </section>
    )
}