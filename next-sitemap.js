module.exports = {
    siteUrl: 'https://inspektlabs.com',
    generateRobotsTxt: true,
    additionalPaths: async (config) => [
        await config.transform(config, '/blog'),
    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://inspektlabs.com/blog/sitemap-posts.xml',
        ],
    },
}