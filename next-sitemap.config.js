module.exports = {
    siteUrl: 'http://www.gigdarshan.com',  // Your website URL
    generateRobotsTxt: true,  // This will generate robots.txt
    changefreq: 'daily',      // Frequency of updates
    priority: 0.7,            // Default priority for your pages
    additionalPaths: async (config) => [
        { loc: '/', changefreq: 'daily', priority: 1.0 },
        { loc: '/blogs', changefreq: 'daily', priority: 0.9 },
        { loc: '/blogs/bhooteshwar-mahadev', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/krishna-janmbhoomi', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/raman-reti', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/chaurasi-khamba', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/nand-bhawan', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/chintaharan-mahadev', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/brahmand-ghat', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/dwarkadhish-mandir', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/vishram-ghat', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/bankey-bihari', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/radha-raman', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/radha-vallabh', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/rangji-maharaj', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/nidhivan', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/seesh-mahal', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/vaishnodevi-mandir', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/prem-mandir', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/iskcon-mandir', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/radha-madan-mohan', changefreq: 'monthly', priority: 0.7 },
        { loc: '/blogs/places-to-visit-in-mathura', changefreq: 'monthly', priority: 0.7 },
        { loc: '/hotels-in-mathura', changefreq: 'weekly', priority: 0.8 },
        { loc: '/rental-cars-mathura', changefreq: 'weekly', priority: 0.8 },
        { loc: '/guides-in/mathura', changefreq: 'weekly', priority: 0.8 },
        { loc: '/planbot', changefreq: 'weekly', priority: 0.8 },
        { loc: '/poojabooking-in-mathura', changefreq: 'weekly', priority: 0.8 },
        { loc: '/activites-in-mathura', changefreq: 'weekly', priority: 0.8 },
        { loc: '/about', changefreq: 'monthly', priority: 0.6 },
        { loc: '/tel:7505866498', changefreq: 'monthly', priority: 0.5 },
        // Add any other custom or dynamic routes here
      ]
  };
  