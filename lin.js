const { LinkedinScraper, events, } = require("linkedin-jobs-scraper");

(async () => {
    // Programatically disable logger
    setTimeout(() => LinkedinScraper.disableLogger(), 5000);

    // Each scraper instance is associated with one browser.
    // Concurrent queries will be runned on different pages within the same browser instance.
    const scraper = new LinkedinScraper({
        headless: false,
		  executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
 
        slowMo: 10,
    });

    // Listen for custom events
    scraper.on(events.custom.data, ({ 
        query,
        location,
        link,
        title,
        company,
        place,
        date,
        description,
        senorityLevel,
        jobFunction,
        employmentType,
        industries 
    }) => {
        console.log(
            description.length,
            `Query='${query}'`,
            `Location='${location}'`,
            `Title='${title}'`,
            `Company='${company}'`,
            `Place='${place}'`,
            `Date='${date}'`,
            `Link='${link}'`,
            `senorityLevel='${senorityLevel}'`,
            `function='${jobFunction}'`,
            `employmentType='${employmentType}'`,
            `industries='${industries}'`,
        );
    });

    scraper.on(events.custom.error, (err) => { console.error(err); });
    scraper.on(events.custom.end, () => { console.log('All done!'); });

    // Listen for puppeteer specific browser events
    scraper.on(events.puppeteer.browser.targetcreated, () => { });
    scraper.on(events.puppeteer.browser.targetchanged, () => { });
    scraper.on(events.puppeteer.browser.targetdestroyed, () => { });
    scraper.on(events.puppeteer.browser.disconnected, () => { });

    // This will be executed on browser side
    const descriptionProcessor = () => document.querySelector(".description__text")
            .innerText
            .replace(/[\s\n\r]+/g, " ")
            .trim();

    // Run queries concurrently
    await Promise.all([
        scraper.run(
            "Graphic Designer",
            "London",
            {
                paginationMax: 2,
            }
        ),
        scraper.run(
            ["Developer", "Software Engineer"],
            ["San Francisco", "New York"],
            {
                paginationMax: 1,
                descriptionProcessor,
            }
        )
    ]);

    // Close browser
    await scraper.close();
})();