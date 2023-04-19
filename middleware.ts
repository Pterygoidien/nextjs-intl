import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'fr'
});

export const config = {
    // Skip all non-content paths
    matcher: ['/((?!_next|favicon.ico|api).*)']
};
