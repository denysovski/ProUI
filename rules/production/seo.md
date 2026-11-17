# SEO (`SEO`)

- **SEO-01 sitemap.xml** listing every public page, linked from robots.txt.
- **SEO-02 robots.txt** that allows the public site and blocks private areas.
- **SEO-03 No stray `noindex`.** Make sure no public page still carries a `noindex` left from development.
- **SEO-04 Canonical tags.** One canonical URL per page (`<link rel="canonical">`).
- **SEO-05 Unique meta title per page.** Specific, about 60 characters at most.
- **SEO-06 Unique meta description per page.** About 155 characters, written to earn the click.
- **SEO-07 One H1 per page** that states what the page is about.
- **SEO-08 Logical heading order.** H1 → H2 → H3, no skipped levels for styling reasons.
- **SEO-09 Alt text on every meaningful image**, empty `alt=""` on purely decorative ones.
- **SEO-10 Schema markup.** JSON-LD for the relevant types: Organization, Product, Article, FAQPage,
  BreadcrumbList, LocalBusiness.
- **SEO-11 Internal links** between related pages with descriptive anchor text.
- **SEO-12 No broken links.** Check every internal and external link before launch.
- **SEO-13 Clean URL slugs.** `/shop/m1-puffer`, not `/page?id=8273`.
- **SEO-14 HTTPS everywhere** with a redirect from http.
- **SEO-15 Search Console verified** and the sitemap submitted.
- **SEO-16 llms.txt** at the site root: a short plain description of the site and links to its key pages for
  AI assistants.
