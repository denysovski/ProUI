[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Injection

Untrusted text ends up being run as code: as SQL, as HTML and JavaScript in someone's browser, as a shell
command or as a template. The defence is always the same idea: keep data and code apart, and never build
code by gluing strings together.

---

### AT-01 SQL injection

**What happens.** A query is built from user input, so the input can change the query.

```js
// vulnerable
db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`);
// the attacker sends:  ' OR '1'='1   → the WHERE clause is always true
```

**Impact.** Reading every row, logging in as anyone, changing or deleting data.

**Defend (basic).** Parameterised queries or an ORM, always (`SEC-07`):

```js
db.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
```

**Defend (intermediate).** The database user has only the rights the app needs (no `DROP`, no access to
other schemas); raw-query helpers (`$queryRawUnsafe`, `knex.raw` with interpolation, `sequelize.literal`)
are banned in review; ORDER BY and column names come from an allow-list, never from the request.

**Test it.** Send `'` and `' OR '1'='1` in every search, filter and login field of your own site: the page
must answer normally or with a validation error, never with a database error or more rows. The security
scanner flags string-built queries (`node scripts/proui-security-scan.mjs`).

**Rules.** `SEC-05`, `SEC-07`, `SEC-15`

---

### AT-02 NoSQL injection

**What happens.** A JSON body sends an operator instead of a value: `{"email": "a@b.cz", "password": {"$ne": null}}`
and a MongoDB query like `find({ email, password })` matches any password.

**Defend.** Validate the type of every field with a schema (zod, valibot, Joi) before it reaches the
database: a password is a string, never an object. Strip keys starting with `$` and dots
(`express-mongo-sanitize` or the schema itself).

**Test it.** Post an object where a string is expected; the API must answer 400.

**Rules.** `SEC-05`, `SEC-07`

---

### AT-03 Cross-site scripting (XSS)

**What happens.** Text from a user is shown as HTML, so a script in it runs in other visitors' browsers.
Three kinds:

| Kind | How it gets in |
| --- | --- |
| Stored | a username, comment, review or product name saved in the database and shown to others |
| Reflected | a search term or error message echoed from the URL |
| DOM | client code puts `location.hash`, a query parameter or a `postMessage` into `innerHTML` |

**Impact.** Stealing sessions, acting as the victim, defacing pages, card skimming on checkout.

**Defend (basic).** Let the framework escape (React, Vue, Svelte and Astro escape text by default). Never
use `dangerouslySetInnerHTML`, `v-html`, `{@html}` or `innerHTML` with user content; when rich text is
needed, sanitise with DOMPurify on output (`SEC-06`). Validate URLs before putting them in `href` or `src`:
allow only `https:` and `mailto:` (a `javascript:` link is XSS too).

**Defend (intermediate).** A Content Security Policy without `unsafe-inline` for scripts, with nonces or
hashes (`SEC-02`); cookies `HttpOnly` so a script cannot read them (`SEC-09`); Trusted Types where the
stack supports them.

**Test it.** On your own site, save the text `<img src=x onerror=alert(1)>` as a name, comment and search
term. It must show as plain text everywhere, including emails and the admin area.

**Rules.** `SEC-02`, `SEC-06`, `SEC-09`

---

### AT-04 Command injection

**What happens.** Input is passed into a shell: `exec(\`convert ${filename} out.png\`)` with the file name
`x.png; rm -rf /`.

**Defend.** Never call a shell with user input. Use `execFile` or `spawn` with an argument array, or a
library (sharp instead of ImageMagick on the command line). File names you generate yourself.

**Rules.** `SEC-05`, `SEC-37`

---

### AT-05 Template injection (SSTI)

**What happens.** User text is compiled as a template (`Handlebars.compile(req.body.message)`,
`render_template_string(user_input)`), and template syntax in it runs on the server.

**Defend.** Templates are files written by developers; user text is only ever passed as data into them.

**Rules.** `SEC-05`

---

### AT-06 Header and email injection

**What happens.** A line break in a field (`name\r\nBcc: list@spam`) adds headers to an email the
contact form sends, or to an HTTP response.

**Defend.** Reject line breaks in any field that goes into a header (name, email, subject); use the mail
provider's API with structured fields instead of building raw messages.

**Rules.** `SEC-05`, `SEC-08`

---

### AT-07 Prompt injection

Text that an AI feature reads tells the model to do something else. It has its own page because the
defences differ: [AI features](ai-features.md).
