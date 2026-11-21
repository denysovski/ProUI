"""Builds the ProUI type specimen sheets as HTML and renders them to JPG.

Every face is an open-licence font from Fontsource (OFL or Apache). Brand faces that are not free
are shown with a free match, clearly labelled. All sample copy is original.
Usage: python3 build.py <fontsource node_modules dir> <out dir>
"""
import asyncio, os, sys, json
from playwright.async_api import async_playwright

NM = os.path.abspath(sys.argv[1])
OUT = os.path.abspath(sys.argv[2])
HERE = os.path.dirname(os.path.abspath(__file__))
os.makedirs(OUT, exist_ok=True)

FAM = {}  # pkg -> family name
def fam(pkg):
    if pkg not in FAM:
        FAM[pkg] = json.load(open(f'{NM}/@fontsource/{pkg}/metadata.json'))['family']
    return FAM[pkg]

def css_links(pkgs):
    out = []
    for p in sorted(set(pkgs)):
        for w in (300, 400, 500, 600, 700, 800, 900):
            f = f'{NM}/@fontsource/{p}/{w}.css'
            if os.path.exists(f):
                out.append(f'<link rel="stylesheet" href="file://{f}">')
    return '\n'.join(out)

UI = ['geist-sans', 'geist-mono', 'schibsted-grotesk']
BASE_CSS = """
*{box-sizing:border-box;margin:0;padding:0}
body{background:#ecebe6;color:#151412;font-family:'Geist Sans';-webkit-font-smoothing:antialiased;width:1600px;padding:64px}
.kicker{font:500 13px/1 'Geist Mono';letter-spacing:.08em;text-transform:uppercase;color:#7d786e}
h1{font:600 60px/1 'Schibsted Grotesk';letter-spacing:-.035em;margin:18px 0 14px}
.sub{font:400 21px/1.45 'Geist Sans';color:#57534b;max-width:1060px}
.grid{display:grid;gap:18px;margin-top:44px}
.card{background:#fbfaf7;border:1px solid #dcd8cf;border-radius:16px;padding:24px 26px 22px;display:flex;flex-direction:column;gap:12px}
.meta{display:flex;justify-content:space-between;font:500 11px/1 'Geist Mono';letter-spacing:.07em;text-transform:uppercase;color:#8b867b}
.meta .no{color:#a5472c}
.name{line-height:1.05}
.sample{line-height:1.25;color:#2a2824}
.cz{font-size:15px;color:#6f6a60;line-height:1.3}
.foot{margin-top:auto;padding-top:12px;border-top:1px solid #ebe7df;font:400 13.5px/1.4 'Geist Sans';color:#57534b}
.foot b{font-weight:600;color:#2a2824}
"""

def page(title_kicker, title, sub, body, pkgs, extra_css=''):
    return f"""<!doctype html><html><head><meta charset="utf-8">{css_links(list(pkgs)+UI)}
<style>{BASE_CSS}{extra_css}</style></head><body>
<div class="kicker">{title_kicker}</div><h1>{title}</h1><p class="sub">{sub}</p>{body}</body></html>"""

CZ_MISSING = {'dotgothic16', 'italiana', 'prata', 'silkscreen', 'sixtyfour', 'workbench'}
CZ_LINE = 'Příliš žluťoučký kůň úpěl ďábelské ódy'

def card(pkg, kind, weight, name_size, sample, sample_size, best, track='-0.02em', upper=False, extra=''):
    f = fam(pkg)
    cz_ok = pkg not in CZ_MISSING
    tt = 'text-transform:uppercase;' if upper else ''
    cz = f'<div class="cz" style="font-family:\'{f}\';font-weight:400">{CZ_LINE}</div>' if cz_ok else ''
    return f"""<div class="card">
<div class="meta"><span>{kind}</span><span class="{'' if cz_ok else 'no'}">{'Czech ok' if cz_ok else 'no Czech'}</span></div>
<div class="name" style="font-family:'{f}';font-weight:{weight};font-size:{name_size}px;letter-spacing:{track};{tt}">{f}</div>
<div class="sample" style="font-family:'{f}';font-weight:{weight};font-size:{sample_size}px;letter-spacing:{track};{tt}">{sample}</div>
{cz}{extra}<div class="foot"><b>Best for</b> {best}</div></div>"""

# ---------------------------------------------------------------- grotesks
GROTESKS = [
    ('schibsted-grotesk', 'grotesk, characterful', 600, 'statements, studios, editorial'),
    ('geist-sans', 'neo-grotesk', 500, 'SaaS, developer tools, dashboards'),
    ('inter', 'neo-grotesk', 500, 'product UI, apps, long forms'),
    ('inter-tight', 'neo-grotesk, tight', 600, 'big headlines, e-shops, fashion retail'),
    ('host-grotesk', 'grotesk, characterful', 500, 'portfolios, studios, agencies'),
    ('hanken-grotesk', 'grotesk', 500, 'brands, services, small business'),
    ('space-grotesk', 'grotesk, quirky', 500, 'tech with personality, crypto, events'),
    ('familjen-grotesk', 'grotesk, characterful', 600, 'culture, magazines, festivals'),
    ('bricolage-grotesque', 'grotesk, expressive', 600, 'food, playful brands, posters'),
    ('instrument-sans', 'neo-grotesk', 500, 'startups, product launches'),
    ('mona-sans', 'grotesk, variable width', 600, 'tech brands, wide headlines'),
    ('hubot-sans', 'grotesk, wide', 700, 'wide display, gaming, tech events'),
    ('google-sans-flex', 'humanist grotesk', 500, 'friendly apps, consumer products'),
    ('zalando-sans', 'grotesk', 500, 'e-shops, fashion retail'),
    ('manrope', 'grotesk, geometric touch', 600, 'finance, business, clean B2B'),
    ('dm-sans', 'geometric grotesk', 500, 'landing pages, startups'),
    ('plus-jakarta-sans', 'geometric grotesk', 600, 'consumer apps, booking'),
    ('figtree', 'geometric grotesk', 500, 'friendly SaaS, travel, services'),
    ('onest', 'grotesk', 500, 'services, Latin and Cyrillic sites'),
    ('albert-sans', 'grotesk, Scandinavian', 500, 'interiors, design shops'),
    ('funnel-sans', 'grotesk, detailed', 500, 'modern brands, studios'),
    ('rethink-sans', 'grotesk', 500, 'AI products, tools'),
    ('archivo', 'grotesk, many widths', 600, 'e-shops, sport, news'),
    ('ibm-plex-sans', 'grotesk, engineered', 500, 'corporate, technical docs'),
]

def sheet_grotesks():
    cards = ''.join(card(p, k, w, 38, 'Clean type for modern websites', 24, b) for p, k, w, b in GROTESKS)
    body = f'<div class="grid" style="grid-template-columns:repeat(4,1fr)">{cards}</div>'
    return page('ProUI · type specimens · 01', 'Grotesks', '24 free grotesks for modern websites: neutral neo-grotesks for interfaces, characterful grotesks for statements. All are free for commercial use.', body, [g[0] for g in GROTESKS])

# ---------------------------------------------------------------- statements
STATEMENTS = [
    dict(bg='#f7f6f4', ink='#141210', mute='rgba(20,18,16,.55)', head=('schibsted-grotesk', 600, '-0.045em'),
         label=('tiny5', 'Studio / 2026'), text='We design calm websites for loud ideas.', acc='#ff5e1f'),
    dict(bg='#151414', ink='#fffbf5', mute='rgba(255,251,245,.55)', head=('geist-sans', 500, '-0.05em'),
         label=('silkscreen', 'System status: online'), text='Infrastructure that stays out of the way.', acc='#ff5e1f'),
    dict(bg='#f2f1ec', ink='#100f0f', mute='rgba(16,15,15,.55)', head=('inter-tight', 600, '-0.05em'),
         label=('doto', 'Order 0042 shipped'), text='Checkout in one tap, anywhere.', acc='#0000ff'),
    dict(bg='#f9faf0', ink='#4a1809', mute='rgba(74,24,9,.6)', head=('host-grotesk', 500, '-0.04em'),
         label=('vt323', '> loading portfolio_'), text='Selected work, 2019 to 2026.', acc='#ff835e'),
    dict(bg='#0b7443', ink='#d9ffe0', mute='rgba(217,255,224,.7)', head=('familjen-grotesk', 600, '-0.04em'),
         label=('pixelify-sans', 'New spring drop'), text='Good things, grown slowly.', acc='#d9ffe0'),
    dict(bg='#faf4eb', ink='#16130f', mute='rgba(22,19,15,.55)', head=('hanken-grotesk', 500, '-0.045em'),
         label=('micro-5', 'Edition 07 / 120 pieces'), text='Ceramics for everyday tables.', acc='#16130f'),
]

def sheet_statements():
    tiles = ''
    for s in STATEMENTS:
        hp, hw, ht = s['head']; lp, lt = s['label']
        tiles += f"""<div style="background:{s['bg']};color:{s['ink']};border-radius:20px;padding:34px 36px;height:440px;display:flex;flex-direction:column">
<div style="display:flex;justify-content:space-between;align-items:center">
<span style="font-family:'{fam(lp)}';font-size:{30 if lp in ('vt323','micro-5') else 26 if lp in ('geist-pixel','tiny5') else 18}px;font-weight:{800 if lp=='doto' else 400};text-transform:uppercase;letter-spacing:.02em;border:1.5px solid {s['ink']};padding:7px 12px 6px;border-radius:999px;line-height:1">{lt}</span>
<span style="width:12px;height:12px;border-radius:50%;background:{s['acc']}"></span></div>
<div style="margin-top:auto;font-family:'{fam(hp)}';font-weight:{hw};font-size:78px;line-height:.98;letter-spacing:{ht}">{s['text']}</div>
<div style="margin-top:26px;font:500 12px/1 'Geist Mono';letter-spacing:.07em;text-transform:uppercase;color:{s['mute']}">{fam(hp)} {hw} · tracking {ht.replace('-','−').replace('em','em')} &nbsp;/&nbsp; label {fam(lp)}</div></div>"""
    body = f'<div class="grid" style="grid-template-columns:repeat(2,1fr);gap:22px">{tiles}</div>'
    return page('ProUI · type specimens · 02', 'Grotesk statements and bitmap labels',
                'One big grotesk sentence at weight 500–600 with tight tracking, plus a small pixel label. The pairing most modern studio and product sites use. Colours are palettes measured on real sites.',
                body, [s['head'][0] for s in STATEMENTS] + [s['label'][0] for s in STATEMENTS])

# ---------------------------------------------------------------- bitmap
BITMAP = [
    ('geist-pixel', 'pixel, square grid', 'labels next to Geist, tech'),
    ('silkscreen', 'pixel caps', 'tags, counters, small caps labels'),
    ('pixelify-sans', 'pixel, rounded', 'friendly retro, games'),
    ('vt323', 'terminal', 'terminal lines, loading states'),
    ('press-start-2p', '8-bit arcade', 'game UI, one word at a time'),
    ('jersey-10', 'pixel, sporty', 'scores, sport drops'),
    ('micro-5', 'micro pixel', 'tiny labels, numbering'),
    ('tiny5', 'tiny pixel', 'meta lines, captions'),
    ('doto', 'dot matrix', 'order numbers, departures boards'),
    ('dotgothic16', 'dot gothic', 'Japanese-inspired labels'),
    ('workbench', 'scanline display', 'sci-fi, hardware'),
    ('handjet', 'LED / matrix, variable', 'displays, counters, variable effects'),
]

def sheet_bitmap():
    cards = ''
    for p, k, b in BITMAP:
        f = fam(p)
        size = 30 if p in ('vt323', 'micro-5', 'tiny5', 'jersey-10', 'handjet', 'geist-pixel') else 20 if p == 'press-start-2p' else 24
        fw = 800 if p == 'doto' else 400
        chip = f"""<div style="display:flex;gap:8px;flex-wrap:wrap"><span style="font-family:'{f}';font-weight:{fw};font-size:{size*0.7:.0f}px;text-transform:uppercase;background:#151412;color:#f7f6f4;padding:7px 10px;border-radius:6px;line-height:1">New drop 001</span><span style="font-family:'{f}';font-weight:{fw};font-size:{size*0.7:.0f}px;text-transform:uppercase;border:1.5px solid #151412;padding:6px 10px;border-radius:6px;line-height:1">Online</span></div>"""
        cz_ok = p not in CZ_MISSING
        cards += f"""<div class="card"><div class="meta"><span>{k}</span><span class="{'' if cz_ok else 'no'}">{'Czech ok' if cz_ok else 'no Czech'}</span></div>
<div style="font-family:'{f}';font-weight:{fw};font-size:{size+12}px;line-height:1.05">{f}</div>
<div style="font-family:'{f}';font-weight:{fw};font-size:{size}px;line-height:1.2;color:#2a2824">STATUS 200 / 04:21</div>{chip}
<div class="foot"><b>Use for</b> {b}</div></div>"""
    body = f'<div class="grid" style="grid-template-columns:repeat(4,1fr)">{cards}</div>'
    return page('ProUI · type specimens · 03', 'Bitmap and pixel labels',
                'Small doses only: labels, tags, numbers, status lines. Set them at sizes that match their pixel grid, in capitals, next to a clean grotesk. Never for paragraphs.',
                body, [b[0] for b in BITMAP])

# ---------------------------------------------------------------- mono
MONO = [
    ('geist-mono', 'with Geist, SaaS'), ('jetbrains-mono', 'code blocks, docs'), ('ibm-plex-mono', 'labels, technical brands'),
    ('space-mono', 'retro-tech, editorial labels'), ('dm-mono', 'soft labels, light UIs'), ('fragment-mono', 'Helvetica-like mono labels'),
    ('martian-mono', 'wide labels, data'), ('commit-mono', 'code, neutral'), ('overpass-mono', 'labels in luxury (Hermès uses it)'),
    ('source-code-pro', 'docs, payment UIs'), ('fira-code', 'code with ligatures'), ('red-hat-mono', 'friendly technical'),
]

def sheet_mono():
    cards = ''.join(card(p, 'monospace', 400, 30, 'ORDER-2026 / 1 290 Kč<br>status: shipped', 20, b, track='0') for p, b in MONO)
    body = f'<div class="grid" style="grid-template-columns:repeat(4,1fr)">{cards}</div>'
    return page('ProUI · type specimens · 04', 'Monospace labels', 'Mono faces carry numbers, prices, code and small uppercase labels. One mono per site, next to the grotesk.', body, [m[0] for m in MONO])

# ---------------------------------------------------------------- serif
SERIF = [
    ('eb-garamond', 'old-style', 500, 'luxury, heritage (Hermès uses it)'), ('bodoni-moda', 'didone', 500, 'fashion headlines, magazines'),
    ('playfair-display', 'transitional display', 500, 'restaurants, events'), ('cormorant-garamond', 'garamond display', 500, 'jewellery, weddings'),
    ('instrument-serif', 'condensed display', 400, 'studios, launches, editorial'), ('fraunces', 'soft wonky serif', 500, 'food, craft, warm brands'),
    ('libre-caslon-text', 'Caslon', 400, 'books, law, long reading'), ('newsreader', 'news serif', 500, 'journals, blogs, long reading'),
    ('gloock', 'high-contrast display', 400, 'posters, fashion statements'), ('dm-serif-display', 'display', 400, 'hospitality, beauty'),
    ('young-serif', 'heavy old-style', 400, 'friendly editorial, cafés'), ('italiana', 'thin didone caps', 400, 'perfume, beauty, logos'),
    ('prata', 'didone', 400, 'fashion, beauty'), ('cinzel', 'roman capitals', 500, 'hotels, wine, monuments'),
    ('gilda-display', 'didone, light', 400, 'boutiques, salons'), ('source-serif-4', 'text serif', 500, 'docs, product writing'),
]

def sheet_serif():
    cards = ''.join(card(p, k, w, 38, 'Autumn collection, quietly made', 26, b, track='-0.01em') for p, k, w, b in SERIF)
    body = f'<div class="grid" style="grid-template-columns:repeat(4,1fr)">{cards}</div>'
    return page('ProUI · type specimens · 05', 'Serifs for fashion, luxury and editorial',
                'Fashion and luxury sites set a serif or didone for statements and keep a clean grotesk for prices, sizes and navigation.', body, [s[0] for s in SERIF])

# ---------------------------------------------------------------- display
DISPLAY = [
    ('anton', 'condensed heavy', 400, 'sport, sale banners', True), ('bebas-neue', 'condensed caps', 400, 'posters, events', True),
    ('oswald', 'condensed grotesk', 600, 'sport e-shops (Nike-like headlines)', True), ('league-gothic', 'condensed gothic', 400, 'news, posters', True),
    ('big-shoulders-display', 'condensed industrial', 800, 'events, festivals', True), ('barlow-condensed', 'DIN-like condensed', 600, 'sport, automotive (adidas-like)', True),
    ('archivo-black', 'heavy grotesk', 400, 'bold launches, merch', False), ('archivo-narrow', 'narrow grotesk', 600, 'news, catalogues', False),
    ('jost', 'geometric (Futura-like)', 500, 'fashion houses, architecture', False), ('outfit', 'geometric', 500, 'apps, friendly brands', False),
    ('syne', 'expressive', 700, 'art, galleries, studios', False), ('unbounded', 'wide rounded', 600, 'web3, music, events', False),
]

def sheet_display():
    cards = ''.join(card(p, k, w, 40, 'New season, limited run', 28, b, track='0' if up else '-0.02em', upper=up) for p, k, w, b, up in DISPLAY)
    body = f'<div class="grid" style="grid-template-columns:repeat(4,1fr)">{cards}</div>'
    return page('ProUI · type specimens · 06', 'Condensed, geometric and display',
                'Condensed capitals sell sport and sales; geometric sans reads as fashion and architecture. Use them for headlines only.', body, [d[0] for d in DISPLAY])

# ---------------------------------------------------------------- brands
# (brand, measured, free pkg, weight, tracking, same font?)
BRANDS = {
    'tech': [
        ('Apple', 'SF Pro Display 600 / SF Pro Text', 'inter', 600, '-0.02em', False),
        ('Microsoft', 'Segoe UI Variable 500, −1 px', 'open-sans', 500, '-0.02em', False),
        ('Google Store', 'Google Sans Flex 500, −1 px', 'google-sans-flex', 500, '-0.02em', True),
        ('GitHub', 'Mona Sans 440–465 + Mona Sans Mono', 'mona-sans', 500, '-0.01em', True),
        ('Vercel', 'Geist 400–450, −6 % + Geist Pixel', 'geist-sans', 450, '-0.06em', True),
        ('Linear', 'Inter Variable 510, −2 % + Berkeley Mono', 'inter', 500, '-0.022em', True),
        ('Stripe', 'Söhne 300, −2 %', 'schibsted-grotesk', 400, '-0.02em', False),
        ('Notion', 'Die Grotesk 500 + Lyon Text', 'host-grotesk', 500, '-0.02em', False),
        ('Figma', 'figmaSans 400, body at 330', 'instrument-sans', 400, '-0.01em', False),
        ('OpenAI', 'OpenAI Sans 500, −2.5 %', 'rethink-sans', 500, '-0.025em', False),
        ('Spotify', 'Spotify Mix 900 headlines', 'figtree', 800, '-0.02em', False),
        ('Airbnb', 'Airbnb Cereal 500–700', 'plus-jakarta-sans', 600, '-0.02em', False),
        ('Netflix', 'Netflix Sans 700', 'hanken-grotesk', 700, '-0.01em', False),
        ('Tesla', 'Universal Sans Display 500', 'onest', 500, '-0.01em', False),
    ],
    'shops': [
        ('Amazon', 'Amazon Ember', 'albert-sans', 600, '0', False),
        ('Alza', 'Roboto 400–700', 'roboto', 700, '0', True),
        ('IKEA', 'Noto IKEA 700, −3 %', 'noto-sans', 700, '-0.03em', False),
        ('Zalando', 'Zalando Sans 520', 'zalando-sans', 500, '-0.005em', True),
        ('Nike', 'Nike Futura ND caps + Helvetica Now', 'oswald', 600, '0', False),
        ('adidas', 'AdihausDIN + adidasFG caps, +3 px', 'barlow-condensed', 700, '0.06em', False),
        ('H&M', 'HM Slussen (own family)', 'hanken-grotesk', 600, '-0.01em', False),
        ('Zara', 'Helvetica Now Text + Didot 300 caps', 'bodoni-moda', 400, '0.02em', False),
        ('COS', 'Suisse Int\'l 400, caps labels', 'inter-tight', 400, '0.02em', False),
    ],
    'fashion': [
        ('Hermès', 'EB Garamond 440 + Manrope + Overpass Mono', 'eb-garamond', 500, '0', True),
        ('Louis Vuitton', 'Louis Vuitton Web (geometric)', 'jost', 400, '0.02em', False),
        ('Jacquemus', 'Futura PT 400, +0.8 px', 'jost', 400, '0.05em', False),
        ('Gucci', 'Gucci Sans Pro caps, −3 %', 'archivo', 500, '-0.03em', False),
        ('Prada', 'GT America 500', 'albert-sans', 500, '0', False),
        ('SSENSE', 'Favorit caps −3.5 % + Times Now', 'space-grotesk', 400, '-0.035em', False),
        ('Acne Studios', 'Helvetica Now Text + Micro + Mono', 'inter-tight', 400, '0', False),
        ('Zara editorial', 'Didot 300 capitals', 'bodoni-moda', 400, '0.04em', False),
    ],
}
BRAND_COPY = {'tech': 'Build faster with less', 'shops': 'Free delivery over 1 500 Kč', 'fashion': 'The winter edit'}
BRAND_UPPER = {'Nike', 'adidas', 'Gucci', 'SSENSE', 'Zara', 'Zara editorial', 'COS', 'Louis Vuitton'}

def sheet_brands(key, n, title, sub):
    cards = ''
    pk = []
    for brand, uses, p, w, t, same in BRANDS[key]:
        pk.append(p)
        f = fam(p)
        up = brand in BRAND_UPPER
        tt = 'text-transform:uppercase;' if up else ''
        extra_mono = ''
        if brand == 'Hermès':
            pk += ['manrope', 'overpass-mono']
            extra_mono = "<div style=\"font-family:'Manrope';font-size:15px;color:#57534b\">Silk scarves, 90 × 90 cm</div><div style=\"font-family:'Overpass Mono';font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#8b867b\">Ref. H0042 · 14 900 Kč</div>"
        if brand == 'Vercel':
            pk.append('geist-pixel')
            extra_mono = "<div style=\"font-family:'Geist Pixel';font-size:22px;text-transform:uppercase\">Deploy 0042 ready</div>"
        cards += f"""<div class="card">
<div class="meta"><span>{brand}</span><span>{'same font, free' if same else 'free match'}</span></div>
<div style="font-family:'{f}';font-weight:{w};font-size:40px;line-height:1.02;letter-spacing:{t};{tt}">{BRAND_COPY[key]}</div>{extra_mono}
<div class="foot"><b>Uses</b> {uses}<br><b>{'Free' if same else 'Try'}</b> {f}</div></div>"""
    body = f'<div class="grid" style="grid-template-columns:repeat({4 if len(BRANDS[key]) % 3 else 3},1fr)">{cards}</div>'
    return page(f'ProUI · type specimens · {n:02d}', title, sub, body, pk)

# ---------------------------------------------------------------- pairings
PAIRS = [
    ('SaaS / developer tool', '#151414', '#fffbf5', 'geist-sans', 500, '-0.05em', 'geist-mono', 'Ship the product, skip the setup.', 'Deploy from Git, preview every branch, scale without config.', 'Start free', '#ff5e1f', '#151414', 'Geist 500 + Geist Mono'),
    ('E-shop', '#ffffff', '#111111', 'inter-tight', 600, '-0.045em', 'inter', 'Everyday basics, made to last.', 'Free delivery over 1 500 Kč. Returns within 30 days.', 'Shop now', '#111111', '#ffffff', 'Inter Tight 600 + Inter'),
    ('Fashion / luxury', '#faf4eb', '#16130f', 'eb-garamond', 500, '-0.01em', 'manrope', 'The winter edit', 'Wool coats and silk scarves, made in small series.', 'Discover', '#16130f', '#faf4eb', 'EB Garamond + Manrope'),
    ('Studio / portfolio', '#f7f6f4', '#141210', 'schibsted-grotesk', 600, '-0.05em', 'jersey-10', 'Calm websites for loud ideas.', 'Brand, web and motion for teams that ship.', 'See work', '#141210', '#f7f6f4', 'Schibsted Grotesk + Jersey 10'),
    ('Sport / sale', '#f1f1ef', '#111111', 'oswald', 600, '0', 'barlow', 'RUN THE CITY', 'New running collection. Up to 40 % off this week.', 'Shop running', '#111111', '#ffffff', 'Oswald caps + Barlow'),
    ('Editorial / blog', '#fbfaf7', '#1b1915', 'newsreader', 500, '-0.02em', 'familjen-grotesk', 'Why small shops win online', 'A long read on craft, trust and slow growth.', 'Read the essay', '#1b1915', '#fbfaf7', 'Newsreader + Familjen Grotesk'),
]

def sheet_pairs():
    tiles = ''
    pk = []
    for kind, bg, ink, hp, hw, ht, tp, head, para, btn, bbg, bfg, label in PAIRS:
        pk += [hp, tp]
        hf, tf = fam(hp), fam(tp)
        mono_label = tp in ('geist-mono', 'jersey-10')
        label_style = f"font-family:'{tf}';font-size:{24 if tp=='jersey-10' else 13}px;text-transform:uppercase;letter-spacing:.04em"
        para_font = 'Geist Sans' if mono_label else tf
        upper = 'text-transform:uppercase;' if hp == 'oswald' else ''
        tiles += f"""<div style="background:{bg};color:{ink};border-radius:20px;border:1px solid rgba(0,0,0,.08);padding:26px 30px 30px;height:430px;display:flex;flex-direction:column">
<div style="display:flex;justify-content:space-between;align-items:center;font-family:'{para_font}';font-size:14px;opacity:.75"><span style="font-family:'{hf}';font-weight:{hw};font-size:18px;opacity:1;{upper}">Brand</span><span>Shop &nbsp; About &nbsp; Journal &nbsp; Contact</span></div>
<div style="margin-top:auto;{label_style};opacity:.6">{kind}</div>
<div style="margin-top:12px;font-family:'{hf}';font-weight:{hw};font-size:64px;line-height:.98;letter-spacing:{ht};{upper}">{head}</div>
<div style="margin-top:16px;font-family:'{para_font}';font-size:18px;line-height:1.45;opacity:.7;max-width:520px">{para}</div>
<div style="margin-top:22px;display:flex;justify-content:space-between;align-items:center"><span style="background:{bbg};color:{bfg};font-family:'{para_font}';font-weight:500;font-size:15px;padding:12px 20px;border-radius:999px">{btn}</span>
<span style="font:500 12px/1 'Geist Mono';letter-spacing:.07em;text-transform:uppercase;opacity:.5">{label}</span></div></div>"""
    body = f'<div class="grid" style="grid-template-columns:repeat(2,1fr);gap:22px">{tiles}</div>'
    return page('ProUI · type specimens · 10', 'Pairings by kind of site', 'Six ready pairings, each set as a small hero. Pick the one closest to the site, then adjust weight and tracking.', body, pk)

SHEETS = {
    'grotesk-statements': sheet_statements,
    'grotesks': sheet_grotesks,
    'bitmap-labels': sheet_bitmap,
    'mono': sheet_mono,
    'serif-fashion': sheet_serif,
    'display-condensed': sheet_display,
    'brands-tech': lambda: sheet_brands('tech', 7, 'What tech brands use', 'Measured on the live sites in November 2026. Where the brand font is free it is shown as is; otherwise a free font with a similar feel.'),
    'brands-eshops': lambda: sheet_brands('shops', 8, 'What e-shops use', 'Measured on the live sites in November 2026 (Czech versions where they exist). Free fonts shown as is; others with a similar free font.'),
    'brands-fashion': lambda: sheet_brands('fashion', 9, 'What fashion and luxury use', 'Measured on the live sites in November 2026. Luxury leans on one serif or geometric face and a very plain grotesk for everything else.'),
    'pairings': sheet_pairs,
}

async def main():
    only = sys.argv[3:] or list(SHEETS)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox', '--allow-file-access-from-files'])
        pg = await b.new_page(viewport={'width': 1600, 'height': 300}, device_scale_factor=1.25)
        for name in only:
            html = SHEETS[name]()
            path = os.path.join(HERE, f'{name}.html')
            open(path, 'w').write(html)
            await pg.goto('file://' + path)
            await pg.evaluate('document.fonts.ready')
            await pg.wait_for_timeout(600)
            await pg.screenshot(path=os.path.join(OUT, f'{name}.jpg'), full_page=True, type='jpeg', quality=86)
            print('rendered', name)
        await b.close()

asyncio.run(main())
