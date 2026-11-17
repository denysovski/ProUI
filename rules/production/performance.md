# Performance (`PF`)

- **PF-01 Compress images.** Modern formats (AVIF/WebP), correct dimensions, `srcset` and `sizes`, explicit
  `width` and `height` to prevent layout shift.
- **PF-02 Lazy loading** for below-the-fold images, iframes and heavy sections (`loading="lazy"`).
- **PF-03 Core Web Vitals.** Good LCP (under 2.5 s), INP (under 200 ms) and CLS (under 0.1).
- **PF-04 Code splitting.** Load only the JavaScript the current page needs.
- **PF-05 Minify JS and CSS** (any modern bundler does this in production builds).
- **PF-06 Defer non-critical scripts.** Analytics, chat and embeds load with `defer`, `async` or after
  interaction.
- **PF-07 Remove unused dependencies.**
- **PF-08 Avoid unnecessary re-renders.** In React and similar: keep state local, memoise expensive parts,
  avoid new objects in props on every render.
- **PF-09 Debounce input handlers.** Search-as-you-type waits about 250–300 ms after the last keystroke.
- **PF-10 Paginate or virtualise long lists.**
- **PF-11 Use a CDN** for static files.
- **PF-12 Cache API responses** on the client and server where data allows.
- **PF-13 Server-side caching** of rendered pages or fragments.
- **PF-14 Cache expensive queries** (stats, rankings) and refresh them on a schedule.
- **PF-15 Index the database** on columns used for lookups, filters and sorting.
- **PF-16 Avoid N+1 queries.** Load related data in one query (JOIN, eager loading), not one query per item.
- **PF-17 Compress API payloads.** Return only needed fields; enable gzip or brotli.
- **PF-18 Database connection pooling.**
- **PF-19 Load balancing** when traffic needs more than one server.
- **PF-20 Lighthouse audit** before launch; fix what it flags.
- **PF-21 Heavy visuals stay light.** WebGL, video and large animations render only while visible, cap pixel
  ratio and frame rate, and have a static fallback for weak devices and reduced motion.
