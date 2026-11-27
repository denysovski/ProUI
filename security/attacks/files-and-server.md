[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Files and the server

---

### AT-50 Uploading something that isn't a photo

**What happens.** The "profile photo" is an `.html` or `.svg` file with a script, served from your domain, so it
runs as your site (stored XSS); or a huge file or a zip bomb fills the disk; or an image with GPS data
leaks where a customer lives.

**Defend (basic).** Check the real file type from its content (magic bytes), not the name or the browser's
`Content-Type`; allow a short list (`image/jpeg`, `image/png`, `image/webp`, `application/pdf`); limit the
size; rename files to random names (`SEC-11`).

**Defend (intermediate).** Re-encode images with sharp (which also strips EXIF); never serve uploads as
`text/html` or `image/svg+xml` from the main domain: use a separate storage domain with
`Content-Disposition: attachment` and `X-Content-Type-Options: nosniff`; scan documents for malware where
people upload for others to open.

**Test it.** Upload a `.html` file renamed to `.jpg`, an SVG, and a 100 MB file to your own site: all three
rejected with a clear message.

**Rules.** `SEC-11`, `PE-25`

---

### AT-51 Reading other files (path traversal)

**What happens.** `/download?file=../../.env` or `/images/..%2f..%2fconfig.json`: a file path built from input
walks out of the intended folder.

**Defend.** Never build file paths from user input (`SEC-37`). Map an ID to a stored path, or check that the
resolved path stays inside the base folder:

```js
const full = path.resolve(BASE, name);
if (!full.startsWith(BASE + path.sep)) throw new Error('bad path');
```

**Rules.** `SEC-37`

---

### AT-52 Making the server fetch for you (SSRF)

**What happens.** A "fetch link preview", "import from URL" or webhook-tester feature fetches any URL, so an
attacker points it at `http://169.254.169.254/` (cloud metadata with keys), `http://localhost:5432` or
internal admin panels.

**Defend.** Fetch only from an allow-list of hosts; resolve the name and refuse private, loopback and
link-local addresses, also after redirects; short timeouts and size limits (`SEC-35`).

**Rules.** `SEC-35`

---

### AT-53 XML and archive tricks

**What happens.** An uploaded XML (or DOCX, SVG) uses external entities to read server files (XXE); an uploaded
zip has entries like `../../app.js` (zip slip).

**Defend.** Disable external entities in the XML parser; check every archive entry's path like AT-51;
limit the unpacked size.

**Rules.** `SEC-11`, `SEC-37`

---

### AT-54 Talkative errors and debug leftovers

**What happens.** A stack trace with file paths, SQL and versions; debug mode on in production; GraphQL
introspection and Swagger UI open; source maps published with secrets in comments.

**Defend.** Generic error pages, details only in server logs (`SEC-15`); production builds without debug
endpoints (`SEC-24`); source maps uploaded to the error tracker, not served.

**Rules.** `SEC-15`, `SEC-24`

---

### AT-55 Missing basics on the server

**What happens.** HTTP without redirect, no HSTS, no CSP, `X-Powered-By` advertising versions, old TLS.

**Defend.** HTTPS only with HSTS (`SEC-01`); the security headers set once in the host's config (`SEC-03`):

```text
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; frame-ancestors 'self'; ...
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**Test it.** `curl -sI https://your.site | grep -iE "strict-transport|content-security|x-content-type|referrer|permissions"`,
or securityheaders.com: grade A.

**Rules.** `SEC-01`, `SEC-02`, `SEC-03`
