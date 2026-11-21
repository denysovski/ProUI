"""Renders the README cover images: one per folder README and one per rulebook.

Covers share the banner's look (near-black canvas, grid, blue accent) and carry a Figma-style wireframe
sketch of what the folder contains. Rulebook covers are generated from each rulebook.json.
Usage: python3 build.py <node_modules with @fontsource> [names...]
Needs Playwright and Google Chrome.
"""
import asyncio, json, os, sys, html
from playwright.async_api import async_playwright

NM = os.path.abspath(sys.argv[1])
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
TMP = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_html')
os.makedirs(TMP, exist_ok=True)

def ff(name, path, weight='400', extra=''):
    return f"@font-face{{font-family:{name};src:url(file://{NM}/{path}) format('woff2');font-weight:{weight};{extra}}}"

FONTS = '\n'.join([
    ff('Bricolage', '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2', '200 800'),
    ff('Bricolage', '@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-ext-wght-normal.woff2', '200 800', 'unicode-range:U+0100-024F;'),
    ff('Hanken', '@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff2', '400'),
    ff('Hanken', '@fontsource/hanken-grotesk/files/hanken-grotesk-latin-500-normal.woff2', '500'),
    ff('Hanken', '@fontsource/hanken-grotesk/files/hanken-grotesk-latin-600-normal.woff2', '600'),
    ff('JB', '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2', '400'),
    ff('JB', '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2', '500'),
])

CSS = FONTS + """
:root{--bg:#0b0d12;--panel:#11141b;--line:rgba(255,255,255,.08);--wire:rgba(255,255,255,.16);--fill:rgba(255,255,255,.045);
--text:#f4f5f8;--muted:#9aa1b2;--blue:#3b6dff;--blue2:#7da0ff;--green:#5ee09a;--red:#ff8a8a}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1600px;height:560px;background:var(--bg);color:var(--text);font-family:Hanken;overflow:hidden;position:relative}
.glow{position:absolute;right:-160px;top:-300px;width:1100px;height:900px;background:radial-gradient(closest-side,rgba(59,109,255,.20),transparent 70%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:40px 40px;mask:radial-gradient(ellipse 60% 90% at 72% 50%,#000,transparent 75%);opacity:.6}
.left{position:absolute;left:84px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center}
.crumb{font:500 15px JB;letter-spacing:.06em;color:var(--blue2);text-transform:uppercase}
.crumb span{color:#5d6475}
h1{font-family:Bricolage;font-weight:700;font-size:var(--h,88px);line-height:.95;letter-spacing:-.04em;margin-top:22px}
.lede{font-size:23px;line-height:1.4;color:#c9ced9;margin-top:22px;max-width:600px}
.chips{display:flex;gap:10px;margin-top:30px;flex-wrap:wrap}
.chip{font:500 14px JB;color:#cfd3dd;border:1px solid rgba(255,255,255,.13);border-radius:999px;padding:8px 14px;background:rgba(255,255,255,.03);letter-spacing:.02em}
.chip.b{border-color:rgba(59,109,255,.55);background:rgba(59,109,255,.14);color:#dfe7ff}
.canvas{position:absolute;left:800px;top:56px;width:720px;height:448px;background:linear-gradient(180deg,#141821,#0f1218);border:1px solid rgba(255,255,255,.1);border-radius:20px;box-shadow:0 40px 110px rgba(0,0,0,.55);overflow:hidden}
.ctop{height:44px;display:flex;align-items:center;gap:8px;padding:0 18px;border-bottom:1px solid var(--line)}
.ctop i{width:11px;height:11px;border-radius:50%;background:#2a2f3b}
.ctop em{margin-left:12px;font:500 13px JB;color:var(--muted);font-style:normal}
.stage{position:absolute;left:0;right:0;top:44px;bottom:0}
.a{position:absolute}
.box{position:absolute;border:1.5px solid var(--wire);background:var(--fill);border-radius:10px}
.ln{position:absolute;height:9px;border-radius:5px;background:rgba(255,255,255,.14)}
.ln.s{background:rgba(255,255,255,.08)}
.ln.t{height:16px;background:rgba(255,255,255,.3)}
.sel{position:absolute;border:1.5px solid var(--blue);border-radius:4px}
.sel:before,.sel:after,.sel>b:before,.sel>b:after{content:"";position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--blue)}
.sel:before{left:-5px;top:-5px}.sel:after{right:-5px;top:-5px}.sel>b:before{left:-5px;bottom:-5px}.sel>b:after{right:-5px;bottom:-5px}
.sel>i{position:absolute;left:-1.5px;top:-26px;background:var(--blue);color:#fff;font:500 12px JB;font-style:normal;padding:4px 8px;border-radius:4px;white-space:nowrap}
.dim{position:absolute;font:500 11px JB;color:var(--blue2)}
.mono{font-family:JB}
.lbl{position:absolute;font:500 12px JB;color:var(--muted);letter-spacing:.04em;text-transform:uppercase}
.txt{position:absolute;color:#dfe3ec}
.pill{position:absolute;border-radius:999px;background:var(--blue);height:26px}
.cursor{position:absolute;width:30px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.5))}
.tag{display:inline-block;font:600 11px Hanken;letter-spacing:.06em;text-transform:uppercase;padding:4px 0;border-radius:6px;text-align:center;width:52px}
.do{background:rgba(52,199,123,.14);color:var(--green)}.dont{background:rgba(255,92,92,.13);color:var(--red)}
"""

CURSOR = '<svg class="cursor" style="left:{x}px;top:{y}px" viewBox="0 0 24 24"><path d="M3 2l17 9-7.5 1.8L9 20z" fill="#3b6dff" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>'

def cursor(x, y): return CURSOR.format(x=x, y=y)
def box(x, y, w, h, extra=''): return f'<div class="box" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;{extra}"></div>'
def ln(x, y, w, cls=''): return f'<div class="ln {cls}" style="left:{x}px;top:{y}px;width:{w}px"></div>'
def sel(x, y, w, h, label=''):
    i = f'<i>{label}</i>' if label else ''
    return f'<div class="sel" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px"><b></b>{i}</div>'
def lbl(x, y, t, extra=''): return f'<div class="lbl" style="left:{x}px;top:{y}px;{extra}">{t}</div>'
def txt(x, y, t, size=14, extra=''): return f'<div class="txt" style="left:{x}px;top:{y}px;font-size:{size}px;{extra}">{t}</div>'

# ------------------------------------------------------------------ sketches (720 x 404 stage)
def sk_blueprints():
    s = box(40, 22, 300, 362)
    s += ln(56, 38, 60) + ln(230, 38, 30, 's') + ln(270, 38, 30, 's') + ln(56, 74, 210, 't') + ln(56, 98, 150, 't') + ln(56, 124, 190, 's') + '<div class="pill" style="left:56px;top:146px;width:86px;height:22px"></div>'
    for i in range(3): s += box(56 + i * 92, 192, 84, 70)
    for i in range(3): s += box(56 + i * 92, 274, 84, 70, 'border-color:rgba(59,109,255,.5)' if i == 1 else '')
    s += ln(56, 360, 268, 's')
    s += sel(48, 62, 284, 116, 'Hero · what is this?')
    s += lbl(380, 30, 'Sections answer questions')
    qs = ['What is this?', 'Is it for me?', 'Does it work?', 'Can I trust it?', 'What does it cost?', 'How do I start?']
    for i, q in enumerate(qs):
        on = i in (0, 4)
        s += f'<div class="a" style="left:380px;top:{64+i*50}px;display:flex;align-items:center;gap:12px"><span style="width:26px;height:26px;border-radius:7px;border:1.5px solid {"#3b6dff" if on else "var(--wire)"};background:{"rgba(59,109,255,.18)" if on else "transparent"};font:500 12px JB;display:grid;place-items:center;color:{"#dfe7ff" if on else "#9aa1b2"}">{i+1}</span><span style="font-size:17px;color:{"#f4f5f8" if on else "#aeb4c3"}">{q}</span></div>'
    return s + cursor(300, 150)

def sk_workflow():
    stages = [('Intake', 0), ('Brief', 0), ('Research', 0), ('Direction', 1), ('Type and colour', 1), ('Structure', 1), ('First screen', 1), ('Build', 0), ('Passes', 0), ('Ship', 0)]
    s = '<div class="a" style="left:60px;top:44px;width:2px;height:330px;background:rgba(255,255,255,.12)"></div>'
    for i, (n, cp) in enumerate(stages):
        y = 30 + i * 34
        mark = f'<span style="width:14px;height:14px;transform:rotate(45deg);background:{"#3b6dff" if cp else "#1b2030"};border:1.5px solid {"#7da0ff" if cp else "rgba(255,255,255,.3)"};display:inline-block"></span>'
        s += f'<div class="a" style="left:54px;top:{y}px;display:flex;align-items:center;gap:18px">{mark}<span style="font-size:16px;color:{"#f4f5f8" if cp else "#aeb4c3"}">{n}</span>{"<span class=mono style=\"font-size:11px;color:#7da0ff;letter-spacing:.06em\">CHECKPOINT</span>" if cp else ""}</div>'
    s += box(380, 40, 300, 150)
    s += lbl(400, 58, 'proui/DECISIONS.md') + ln(400, 92, 220) + ln(400, 114, 180, 's') + ln(400, 136, 240, 's') + ln(400, 158, 150, 's')
    s += box(380, 214, 300, 150) + lbl(400, 232, 'Checkpoint · Direction')
    for i in range(3): s += box(400 + i * 90, 262, 80, 82, 'border-color:#3b6dff;background:rgba(59,109,255,.12)' if i == 1 else '')
    return s + cursor(510, 318)

def sk_rules():
    rows = [('SL-17', 'dont', 'Decorative counting'), ('TY-26', 'do', 'Test the pair on a specimen'), ('CL-23', 'dont', 'Garish colour'),
            ('PE-23', 'do', 'Consent before tracking'), ('MO-29', 'do', 'One transition for filtering'), ('ST-02', 'do', 'Loading state')]
    s = lbl(36, 26, 'rules / anti-slop · typography · colour · launch · motion · states')
    for i, (id_, k, t) in enumerate(rows):
        y = 62 + i * 54
        s += f'<div class="a" style="left:36px;top:{y}px;width:648px;height:44px;display:grid;grid-template-columns:76px 60px 1fr;align-items:center;border-top:1px solid var(--line);{"background:rgba(59,109,255,.08);box-shadow:inset 2px 0 0 #3b6dff;" if i==1 else ""}padding-left:12px"><code class="mono" style="font-size:14px;color:#cfd3dd">{id_}</code><span class="tag {k}">{"Do" if k=="do" else "Don\'t"}</span><span style="font-size:17px">{t}</span></div>'
    return s + cursor(600, 120)

def sk_effects():
    s = lbl(36, 24, 'Easing · expo out')
    s += '<svg class="a" style="left:36px;top:52px" width="300" height="220" viewBox="0 0 300 220"><path d="M0 219 H300 M1 0 V220" stroke="rgba(255,255,255,.18)"/><path d="M0 219 C57 0 66 0 300 0" fill="none" stroke="#3b6dff" stroke-width="3"/><circle cx="57" cy="0" r="6" fill="#fff" stroke="#3b6dff" stroke-width="2" transform="translate(0,4)"/><circle cx="66" cy="4" r="0"/><line x1="0" y1="219" x2="57" y2="4" stroke="rgba(125,160,255,.5)" stroke-dasharray="4 4"/></svg>'
    s += '<div class="dim" style="left:36px;top:284px">cubic-bezier(0.19, 1, 0.22, 1) · 600 ms</div>'
    levels = ['None', 'Subtle', 'Modern', 'Immersive']
    s += '<div class="a" style="left:36px;top:322px;width:300px;height:6px;border-radius:3px;background:rgba(255,255,255,.1)"></div><div class="a" style="left:36px;top:322px;width:200px;height:6px;border-radius:3px;background:#3b6dff"></div><div class="a" style="left:228px;top:315px;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #3b6dff"></div>'
    for i, l in enumerate(levels): s += f'<div class="dim" style="left:{36+i*92}px;top:348px;color:{"#dfe7ff" if i==2 else "#6f7686"}">{l}</div>'
    for i in range(3):
        s += f'<div class="box" style="left:{430+i*34}px;top:{70+i*40}px;width:210px;height:150px;transform:perspective(600px) rotateY(-18deg);background:rgba({"59,109,255,.16" if i==2 else "255,255,255,.04"});border-color:{"#3b6dff" if i==2 else "var(--wire)"}"></div>'
    s += txt(470, 300, 'Kit: Modern dark', 15, 'color:#9aa1b2') + txt(470, 324, 'Budget: 2 effects', 15, 'color:#9aa1b2')
    return s + cursor(640, 210)

def sk_fx():
    names = ['Progressive blur', 'Scroll fade', 'Expanding panels', 'Stack scroll', 'Coverflow', 'Theme toggle', 'Roll link', 'Gooey', 'Scroll draw', 'Progress ring', 'Count up', 'Filter swap']
    s = ''
    for i, n in enumerate(names):
        c, r = i % 4, i // 4
        x, y = 30 + c * 168, 24 + r * 124
        on = i == 2
        s += box(x, y, 156, 112, 'border-color:#3b6dff;background:rgba(59,109,255,.12)' if on else '')
        # tiny glyph per effect
        g = ['<div class="a" style="left:14px;top:16px;width:128px;height:44px;border-radius:6px;background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.28))"></div>',
             '<div class="a" style="left:14px;top:16px;width:128px;height:44px;border-radius:6px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent)"></div>',
             ''.join(f'<div class="a" style="left:{14+o}px;top:16px;width:{w}px;height:44px;border-radius:5px;background:rgba(255,255,255,{a})"></div>' for o, w, a in ((0, 20, .12), (24, 70, .3), (98, 20, .12), (122, 20, .12))),
             ''.join(f'<div class="a" style="left:{24+k*6}px;top:{14+k*10}px;width:{108-k*12}px;height:30px;border-radius:5px;background:rgba(255,255,255,{.1+k*.1});border:1px solid rgba(255,255,255,.2)"></div>' for k in range(3)),
             ''.join(f'<div class="a" style="left:{14+k*44}px;top:{20 if k!=1 else 14}px;width:40px;height:{36 if k!=1 else 48}px;border-radius:5px;background:rgba(255,255,255,{.3 if k==1 else .12});transform:perspective(200px) rotateY({(1-k)*30}deg)"></div>' for k in range(3)),
             '<div class="a" style="left:46px;top:18px;width:64px;height:36px;border-radius:18px;background:rgba(255,255,255,.12)"></div><div class="a" style="left:78px;top:22px;width:28px;height:28px;border-radius:50%;background:#dfe3ec"></div>',
             '<div class="a mono" style="left:18px;top:24px;font-size:20px;color:#dfe3ec">r<span style="position:relative;top:-6px">o</span>ll</div>',
             '<div class="a" style="left:40px;top:18px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.3)"></div><div class="a" style="left:70px;top:24px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.3)"></div>',
             '<svg class="a" style="left:14px;top:14px" width="128" height="48"><path d="M2 40 C30 0 60 50 90 14 S120 20 126 8" fill="none" stroke="#dfe3ec" stroke-width="2.5" stroke-dasharray="120 200"/></svg>',
             '<svg class="a" style="left:56px;top:12px" width="48" height="48"><circle cx="24" cy="24" r="19" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="4"/><circle cx="24" cy="24" r="19" fill="none" stroke="#7da0ff" stroke-width="4" stroke-dasharray="80 200" transform="rotate(-90 24 24)"/></svg>',
             '<div class="a mono" style="left:22px;top:18px;font-size:30px;color:#dfe3ec;font-weight:500">1 290</div>',
             ''.join(f'<div class="a" style="left:{14+k*44}px;top:{18+(6 if k==2 else 0)}px;width:38px;height:36px;border-radius:5px;background:rgba(255,255,255,{.08 if k==2 else .22})"></div>' for k in range(3))][i]
        s += f'<div class="a" style="left:{x}px;top:{y}px;width:156px;height:112px">{g}<div class="a" style="left:14px;top:80px;font-size:13.5px;color:#cfd3dd">{n}</div></div>'
    return s + cursor(310, 92)

def sk_briefs():
    s = lbl(30, 22, 'Timeline · stacking cards')
    tracks = [('section pin', [(0, 640)]), ('card 1', [(20, 200)]), ('card 2', [(160, 360)]), ('card 3', [(300, 520)]), ('heading', [(0, 120)])]
    for i, (n, spans) in enumerate(tracks):
        y = 60 + i * 50
        s += f'<div class="a mono" style="left:30px;top:{y+6}px;font-size:12px;color:#9aa1b2;width:110px">{n}</div>'
        s += f'<div class="a" style="left:150px;top:{y}px;width:540px;height:28px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid var(--line)"></div>'
        for a, b in spans:
            s += f'<div class="a" style="left:{150+a*0.84:.0f}px;top:{y+5}px;width:{(b-a)*0.84:.0f}px;height:18px;border-radius:4px;background:{"rgba(59,109,255,.55)" if i==2 else "rgba(255,255,255,.16)"}"></div>'
            for k in (a, b):
                s += f'<div class="a" style="left:{150+k*0.84-6:.0f}px;top:{y+8}px;width:12px;height:12px;transform:rotate(45deg);background:#fff;border:2px solid #3b6dff"></div>'
    s += '<div class="a" style="left:390px;top:46px;width:2px;height:260px;background:#3b6dff"></div><div class="a mono" style="left:372px;top:316px;font-size:12px;color:#7da0ff">0.62 s</div>'
    s += txt(30, 346, 'Structure · timeline · options · accessibility · mobile', 15, 'color:#9aa1b2')
    return s

def sk_code(title, lines, cur=None):
    s = lbl(30, 22, title)
    for i, (indent, parts) in enumerate(lines):
        y = 56 + i * 27
        s += f'<div class="a mono" style="left:30px;top:{y}px;font-size:12px;color:#4b5263;width:26px;text-align:right">{i+1}</div><div class="a mono" style="left:{70+indent*18}px;top:{y}px;font-size:15px;white-space:pre">{parts}</div>'
    if cur: s += cursor(*cur)
    return s

def k(t): return f'<span style="color:#7da0ff">{t}</span>'
def st(t): return f'<span style="color:#5ee09a">{t}</span>'
def cm(t): return f'<span style="color:#5d6475">{t}</span>'
def pl(t): return f'<span style="color:#dfe3ec">{t}</span>'

def sk_commands():
    rows = [('ProUI workflow: portfolio for a ceramics studio', 'run everything, stop at checkpoints'), ('ProUI critique', 'scores, personas, P0–P3 issues'),
            ('ProUI polish', 'refine without redesigning'), ('ProUI effects', 'pick a kit within the budget'), ('ProUI ship', 'SEO, speed, security, deploy'), ('ProUI continue', 'resume from DECISIONS.md')]
    s = ''
    for i, (c, d) in enumerate(rows):
        y = 30 + i * 58
        s += f'<div class="a mono" style="left:34px;top:{y}px;font-size:16px"><span style="color:#5ee09a">›</span> <span style="color:#f4f5f8">{c}</span></div><div class="a" style="left:54px;top:{y+24}px;font-size:14px;color:#7f8698">{d}</div>'
    s += '<div class="a" style="left:34px;top:376px;width:10px;height:18px;background:#7da0ff"></div>'
    return s

def sk_modes():
    ms = [('Persuade', 'decide and act'), ('Operate', 'get a job done'), ('Read', 'understand'), ('Experience', 'explore')]
    s = ''
    for i, (n, d) in enumerate(ms):
        x, y = 30 + (i % 2) * 336, 20 + (i // 2) * 186
        on = i == 0
        s += box(x, y, 324, 172, 'border-color:#3b6dff;background:rgba(59,109,255,.10)' if on else '')
        s += txt(x + 18, y + 16, n, 20, 'font-family:Bricolage;font-weight:650') + txt(x + 18, y + 44, d, 14, 'color:#9aa1b2')
        if i == 0: s += ln(x + 18, y + 84, 200, 't') + ln(x + 18, y + 110, 150, 's') + f'<div class="pill" style="left:{x+18}px;top:{y+130}px;width:90px;height:22px"></div>'
        if i == 1: s += ''.join(box(x + 18 + c * 98, y + 80, 88, 34) for c in range(3)) + ''.join(ln(x + 18, y + 126 + r * 14, 284, 's') for r in range(3))
        if i == 2: s += ''.join(ln(x + 18, y + 80 + r * 16, 280 - (r % 3) * 30, 's') for r in range(5))
        if i == 3: s += box(x + 18, y + 78, 180, 80, 'background:linear-gradient(135deg,rgba(59,109,255,.4),rgba(255,255,255,.05))') + box(x + 206, y + 78, 100, 80)
    return s + cursor(250, 150)

def sk_inspiration():
    pal = [('#151414', '#fffbf5', '#ff5e1f'), ('#f7f6f4', '#0c0a08', '#0c0a08'), ('#f2f1ec', '#100f0f', '#0000ff'), ('#f9faf0', '#4a1809', '#ff835e'), ('#0b7443', '#d9ffe0', '#d9ffe0'), ('#faf4eb', '#16130f', '#16130f')]
    s = ''
    for i, (bg, ink, acc) in enumerate(pal):
        x, y = 30 + (i % 3) * 224, 24 + (i // 3) * 184
        s += f'<div class="a" style="left:{x}px;top:{y}px;width:210px;height:168px;border-radius:12px;background:{bg};border:1px solid rgba(255,255,255,.08)"></div>'
        s += f'<div class="a" style="left:{x+16}px;top:{y+60}px;width:150px;height:14px;border-radius:4px;background:{ink};opacity:.85"></div><div class="a" style="left:{x+16}px;top:{y+82}px;width:110px;height:14px;border-radius:4px;background:{ink};opacity:.85"></div><div class="a" style="left:{x+16}px;top:{y+120}px;width:64px;height:22px;border-radius:11px;background:{acc}"></div>'
    s += sel(28, 22, 214, 172, 'warm near-black · one accent')
    return s + cursor(220, 160)

def sk_typography():
    s = '<div class="a" style="left:40px;top:6px;font-family:Bricolage;font-weight:600;font-size:250px;line-height:1;letter-spacing:-.04em;color:#f4f5f8">Ag</div>'
    for y, n in ((70, 'ascender'), (147, 'x-height'), (238, 'baseline'), (300, 'descender')):
        s += f'<div class="a" style="left:30px;top:{y}px;width:380px;height:1px;background:rgba(125,160,255,.6)"></div><div class="dim" style="left:416px;top:{y-7}px">{n}</div>'
    rows = [('Grotesk', 'Schibsted Grotesk'), ('Pixel', 'Jersey 10'), ('Mono', 'Geist Mono'), ('Serif', 'EB Garamond')]
    for i, (a, b) in enumerate(rows):
        s += f'<div class="a" style="left:520px;top:{40+i*82}px"><div class="mono" style="font-size:11px;letter-spacing:.06em;color:#7da0ff;text-transform:uppercase">{a}</div><div style="font-size:18px;margin-top:8px">{b}</div></div>'
    return s

def sk_recipes():
    return sk_code('recipes/RECIPES.md · split-text headline', [
        (0, cm('/* MO-10: reveal once, respect reduced motion */')),
        (0, k('const') + pl(' lines = ') + k('split') + pl('(h1, ') + st("'lines'") + pl(');')),
        (0, k('if') + pl(' (!matchMedia(') + st("'(prefers-reduced-motion)'") + pl(').matches) {')),
        (1, pl('gsap.') + k('from') + pl('(lines, {')),
        (2, pl('yPercent: ') + k('110') + pl(', duration: ') + k('0.8') + pl(',')),
        (2, pl('ease: ') + st("'expo.out'") + pl(', stagger: ') + k('0.06')),
        (1, pl('});')), (0, pl('}')),
        (0, cm('/* tokens: --accent, --font-display */')),
    ], (520, 200))

def sk_scripts():
    return sk_code('terminal', [
        (0, st('$') + pl(' node scripts/proui-scan.mjs ./src')),
        (0, cm('scanning 48 files')),
        (0, '<span style="color:#ff8a8a">HARD</span>' + pl('  SL-17  hero.html:12   decorative counting 01 / 02')),
        (0, '<span style="color:#ffcf6b">WARN</span>' + pl('  SL-01  theme.css:4    purple-to-blue gradient')),
        (0, '<span style="color:#ffcf6b">WARN</span>' + pl('  CL-23  sale.css:18    three saturated accents')),
        (0, cm('')), (0, st('$') + pl(' node scripts/build-rulebooks.mjs --check')),
        (0, pl('24 rulebooks, 587 rules ') + st('valid')),
        (0, st('$') + pl(' node scripts/build-package.mjs 4.2.0')),
    ])

def sk_style():
    styles = [('BLACK COAL', '#0e0e0e', '#ff5e1f'), ('EDITORIAL CREAM', '#f6efe3', '#2a1f14'), ('SWISS MINIMAL', '#ffffff', '#e30613'), ('MEGA TYPE', '#111', '#f4f5f8'),
              ('LIGHT BEAM', '#0b0d12', '#7da0ff'), ('DITHER GRAIN', '#d9d4c7', '#1a1a1a'), ('CHROME OBJECT', '#1a1c20', '#c9ced9'), ('PLAYFUL POP', '#ffe14d', '#1d1d1b')]
    s = ''
    for i, (n, bg, fg) in enumerate(styles):
        x, y = 30 + (i % 2) * 336, 22 + (i // 2) * 92
        on = i == 1
        s += f'<div class="a" style="left:{x}px;top:{y}px;width:324px;height:78px;border-radius:12px;border:1.5px solid {"#3b6dff" if on else "var(--wire)"};background:rgba(255,255,255,.03)"></div>'
        s += f'<div class="a" style="left:{x+14}px;top:{y+14}px;width:50px;height:50px;border-radius:9px;background:{bg};border:1px solid rgba(255,255,255,.12)"></div><div class="a" style="left:{x+36}px;top:{y+36}px;width:20px;height:20px;border-radius:50%;background:{fg}"></div>'
        s += f'<div class="a mono" style="left:{x+80}px;top:{y+30}px;font-size:15px;letter-spacing:.04em">{n}</div>'
    return s + cursor(300, 140)

def doc(x, y, name, lines=4, on=False):
    s = f'<div class="box" style="left:{x}px;top:{y}px;width:150px;height:186px;{"border-color:#3b6dff;background:rgba(59,109,255,.1)" if on else ""}"></div>'
    s += f'<div class="a" style="left:{x+120}px;top:{y}px;width:30px;height:30px;background:linear-gradient(225deg,#0f1218 50%,rgba(255,255,255,.12) 50%);border-bottom-left-radius:6px"></div>'
    s += ''.join(ln(x + 16, y + 44 + r * 18, 118 - (r % 2) * 30, 's') for r in range(lines))
    s += f'<div class="a mono" style="left:{x+16}px;top:{y+150}px;font-size:13px;color:#dfe3ec">{name}</div>'
    return s

def sk_templates():
    s = ''
    for i, n in enumerate(['INTAKE.md', 'BRIEF.md', 'DECISIONS.md', 'CRITIQUE.md']):
        s += doc(30 + i * 168, 40 + (i % 2) * 24, n, 5, i == 2)
    s += txt(30, 300, 'Copied into the project, filled in by the agent, kept as the record.', 16, 'color:#9aa1b2')
    return s + cursor(470, 180)

def sk_github():
    checks = [('ci / build', 'ok'), ('ci / lint and types', 'ok'), ('quality / lighthouse budgets', 'ok'), ('quality / axe accessibility', 'ok'), ('quality / links', 'ok'), ('quality / proui scan', 'warn')]
    s = lbl(34, 22, 'Pull request · checks')
    for i, (n, st_) in enumerate(checks):
        y = 56 + i * 52
        col = '#5ee09a' if st_ == 'ok' else '#ffcf6b'
        s += f'<div class="a" style="left:34px;top:{y}px;width:650px;height:42px;border-top:1px solid var(--line);display:flex;align-items:center;gap:14px"><span style="width:18px;height:18px;border-radius:50%;border:2px solid {col};display:grid;place-items:center"><span style="width:8px;height:8px;border-radius:50%;background:{col}"></span></span><span class="mono" style="font-size:15px">{n}</span><span style="margin-left:auto;font:500 13px JB;color:{col}">{"passed" if st_=="ok" else "1 warning"}</span></div>'
    return s

def sk_toolkit():
    tools = ['GSAP', 'Lenis', 'three.js', 'Spline', 'React Bits', '21st.dev', 'Fontshare', 'OKLCH', 'ShaderGradient', 'Book of Shapes', 'SVGOMG', 'Squoosh']
    s = ''
    for i, t in enumerate(tools):
        x, y = 30 + (i % 4) * 166, 26 + (i // 4) * 120
        on = i == 0
        s += box(x, y, 154, 106, 'border-color:#3b6dff;background:rgba(59,109,255,.12)' if on else '')
        s += f'<div class="a" style="left:{x+16}px;top:{y+16}px;width:30px;height:30px;border-radius:8px;border:1.5px solid {"#7da0ff" if on else "var(--wire)"}"></div><div class="a" style="left:{x+16}px;top:{y+66}px;font-size:15px">{t}</div>'
    return s + cursor(150, 100)

def sk_references():
    s = ''
    for i, n in enumerate(['apple-hig.md', 'fluent-2.md', 'impeccable.md', 'opendesign.md']):
        s += doc(30 + i * 168, 30, n, 6, i == 0)
    s += lbl(30, 250, 'Distilled in our own words · mapped to rule IDs')
    for i, t in enumerate(['PL-03', 'TY-05', 'AX-12', 'DC-10', 'LY-05', 'CL-09']):
        s += f'<div class="a mono" style="left:{30+i*110}px;top:288px;font-size:14px;padding:8px 12px;border-radius:8px;border:1px solid var(--wire);color:#cfd3dd">{t}</div>'
    return s

def sk_studies():
    s = ''
    sw = [('#151414', 'Cloudflare'), ('#f2f1ec', 'Agentcard'), ('#f9faf0', 'Heron'), ('#0b7443', 'Fruitful'), ('#faf4eb', 'Taxi Studio'), ('#f7f6f4', 'Rox')]
    for i, (c, n) in enumerate(sw):
        x = 30 + i * 112
        s += f'<div class="a" style="left:{x}px;top:30px;width:100px;height:150px;border-radius:10px;background:{c};border:1px solid rgba(255,255,255,.1)"></div><div class="a" style="left:{x}px;top:190px;font-size:13px;color:#cfd3dd">{n}</div>'
    s += lbl(30, 234, 'Easing seen on the sites')
    for i, (n, c) in enumerate([('expo out', '0.19,1,0.22,1'), ('quint out', '0.22,1,0.36,1'), ('sheet', '0.32,0.72,0,1')]):
        s += f'<div class="a" style="left:{30+i*222}px;top:264px;width:210px;height:110px;border-radius:10px;border:1px solid var(--wire)"><svg style="position:absolute;left:14px;top:12px" width="80" height="80"><path d="M0 80 C{float(c.split(",")[0])*80} {80-float(c.split(",")[1])*80} {float(c.split(",")[2])*80} {80-float(c.split(",")[3])*80} 80 0" fill="none" stroke="#3b6dff" stroke-width="2.5"/></svg><div class="mono" style="position:absolute;left:104px;top:24px;font-size:13px">{n}</div><div class="mono" style="position:absolute;left:104px;top:50px;font-size:11px;color:#7f8698;white-space:nowrap">{c}</div></div>'
    return s

def sk_primitives():
    return sk_code('effects/kits/motion-primitives/components', [
        (0, pl('text-effect.tsx') + cm('          animated headline')),
        (0, pl('in-view.tsx') + cm('              reveal on scroll')),
        (0, pl('spotlight.tsx') + cm('            cursor light on cards')),
        (0, pl('tilt.tsx') + cm('                 3D tilt on hover')),
        (0, pl('morphing-dialog.tsx') + cm('      card that opens in place')),
        (0, pl('accordion.tsx') + cm('            smooth disclosure')),
        (0, pl('animated-number.tsx') + cm('      counting values')),
        (0, cm('… 33 components · MIT · ibelick')),
    ], (560, 120))

def sk_assets():
    s = box(30, 30, 330, 186, 'background:linear-gradient(135deg,#0b0d12,#161b2a)') + txt(54, 90, 'Pro<span style="color:#3b6dff">UI</span>', 54, 'font-family:Bricolage;font-weight:750;letter-spacing:-.04em')
    s += box(380, 30, 186, 186) + '<svg class="a" style="left:420px;top:66px" width="110" height="110" viewBox="0 0 24 24"><path d="M3 2l17 9-7.5 1.8L9 20z" fill="#3b6dff" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/></svg>'
    s += box(30, 236, 536, 140) + ''.join(f'<div class="a" style="left:{54+i*100}px;top:290px;width:70px;height:34px;border-radius:8px;border:1.5px solid {"#3b6dff" if i in (3,4) else "var(--wire)"}"></div>' for i in range(5))
    return s

def sk_root():
    return sk_blueprints()

SKETCH = {
    'blueprints': sk_blueprints, 'workflow': sk_workflow, 'rules': sk_rules, 'effects': sk_effects, 'fx': sk_fx, 'briefs': sk_briefs,
    'commands': sk_commands, 'modes': sk_modes, 'inspiration': sk_inspiration, 'typography': sk_typography, 'recipes': sk_recipes,
    'scripts': sk_scripts, 'style': sk_style, 'templates': sk_templates, 'github': sk_github, 'toolkit': sk_toolkit,
    'references': sk_references, 'site-studies': sk_studies, 'motion-primitives': sk_primitives, 'assets': sk_assets,
}

# (out path, crumb, title, lede, chips, sketch key, frame label)
COVERS = [
    ('blueprints/cover.jpg', 'blueprints', 'Blueprints', 'How real websites are put together: pages, sections, pricing, contact, footers and legal pages.', ['10 guides', 'Structure', 'Design system'], 'blueprints', 'Landing page · 1440'),
    ('workflow/cover.jpg', 'workflow', 'Workflow', 'From a short brief to a live site, with four checkpoints where you decide.', ['10 stages', '4 checkpoints', 'GitHub'], 'workflow', 'Workflow · stages'),
    ('rules/cover.jpg', 'rules', 'Rulebooks', '24 rulebooks of Do and Don\'t rules that keep a site looking designed, not generated.', ['24 rulebooks', '587 rules', 'IDs you can switch'], 'rules', 'rules / overview'),
    ('effects/cover.jpg', 'effects', 'Effects library', 'Kits, levels and an effect budget, plus catalogues of ready components and motion recipes.', ['4 levels', '7 kits', '133 recipes'], 'effects', 'Motion · kit and budget'),
    ('effects/fx/cover.jpg', 'effects / fx', 'ProUI fx', 'Twelve small effects in plain HTML, CSS and JavaScript. No library, no credit line.', ['12 effects', 'no dependencies', 'reduced motion'], 'fx', 'fx / demo.html'),
    ('effects/briefs/cover.jpg', 'effects / briefs', 'Motion briefs', 'Twenty detailed briefs for signature motion: structure, timeline, options and access.', ['20 briefs', 'GSAP', 'own words'], 'briefs', 'briefs / stacking-cards.md'),
    ('effects/kits/motion-primitives/cover.jpg', 'effects / kits', 'Motion Primitives', 'All 33 Motion Primitives components by ibelick, saved here under their MIT licence.', ['33 components', 'MIT', 'Quiet kit'], 'motion-primitives', 'motion-primitives / components'),
    ('commands/cover.jpg', 'commands', 'Commands', 'Short commands for the agent: build, review, polish, ship and continue.', ['21 commands', 'combine with rule IDs'], 'commands', 'agent'),
    ('modes/cover.jpg', 'modes', 'Modes', 'What the visitor came to do decides how far the style may lead.', ['persuade', 'operate', 'read', 'experience'], 'modes', 'modes / four surfaces'),
    ('inspiration/cover.jpg', 'inspiration', 'Inspiration', 'Where to look before designing, and what good sites have in common.', ['galleries', '17 site studies', 'palettes'], 'inspiration', 'palettes measured on real sites'),
    ('inspiration/site-studies/cover.jpg', 'inspiration / site-studies', 'Site studies', 'Seventeen live sites studied in the browser, each with a prompt that rebuilds the idea.', ['17 sites', 'animations', 'easing'], 'site-studies', 'site-studies / measured'),
    ('typography/cover.jpg', 'typography', 'Typography', 'Which fonts modern sites use, which free fonts match them, and which fit which site.', ['32 brands', '76 free fonts', 'specimens'], 'typography', 'type / metrics'),
    ('recipes/cover.jpg', 'recipes', 'Recipes', 'Tested code for motion, components, gradients and dashboards, adapted to the project\'s tokens.', ['motion', 'components', 'gradients'], 'recipes', 'recipes / RECIPES.md'),
    ('scripts/cover.jpg', 'scripts', 'Scripts', 'The slop scanner and the builders for rulebooks, catalogues and the marketplace package.', ['Node 18+', 'no dependencies'], 'scripts', 'terminal'),
    ('style/cover.jpg', 'style', 'Style keywords', 'Named directions you can put in a prompt to say exactly what a site should look like.', ['14 styles', '11 modifiers'], 'style', 'style / STYLES.md'),
    ('templates/cover.jpg', 'templates', 'Templates', 'Files the agent copies into a project and fills in: brief, decisions, reports, GitHub setup.', ['context', 'workflow', 'reports', 'github'], 'templates', 'templates'),
    ('templates/github/cover.jpg', 'templates / github', 'GitHub templates', 'CI, quality gates and deploy workflows to copy into a website project.', ['CI', 'Lighthouse', 'Pages'], 'github', 'github / checks'),
    ('toolkit/cover.jpg', 'toolkit', 'Toolkit', 'Libraries, assets and design tools, and when the agent reaches for each.', ['libraries', 'gradients', 'design tools'], 'toolkit', 'toolkit'),
    ('references/cover.jpg', 'references', 'References', 'The guidelines and tools the rulebooks are built on, distilled and mapped to rule IDs.', ['Apple HIG', 'Fluent 2', 'Impeccable'], 'references', 'references'),
    ('assets/cover.jpg', 'assets', 'Assets', 'The banner, logo and diagrams used in the READMEs, with their sources.', ['banner', 'logo', 'covers'], 'assets', 'assets'),
]

AREA = {}

def rule_cover(folder):
    b = json.load(open(os.path.join(ROOT, 'rules', folder, 'rulebook.json')))
    rules = b['rules']
    dos = [r for r in rules if r['kind'] == 'do']
    donts = [r for r in rules if r['kind'] != 'do']
    picks = dos[:4] + donts[:2]
    if len(picks) < 6: picks += [r for r in rules if r not in picks][:6 - len(picks)]
    picks.sort(key=lambda r: int(r['id'].split('-')[1]))
    rows = ''
    for i, r in enumerate(picks):
        t = r['title'] if len(r['title']) < 40 else r['title'][:38] + '…'
        rows += f'<div class="a" style="left:30px;top:{62+i*54}px;width:660px;height:44px;display:grid;grid-template-columns:86px 62px 1fr;align-items:center;border-top:1px solid var(--line);padding-left:10px;{"background:rgba(59,109,255,.08);box-shadow:inset 2px 0 0 #3b6dff;" if i==0 else ""}"><code class="mono" style="font-size:14px;color:#cfd3dd">{r["id"]}</code><span class="tag {"do" if r["kind"]=="do" else "dont"}">{"Do" if r["kind"]=="do" else "Don&#39;t"}</span><span style="font-size:16.5px">{html.escape(t)}</span></div>'
    sketch = lbl(30, 24, f'{b["prefix"]} · {b["category"]} · {len(rules)} rules') + rows + cursor(620, 92)
    name = b['name']
    summary = b['summary']
    if len(summary) > 130: summary = summary[:summary.rfind(' ', 0, 128)] + '…'
    chips = ([f'{len(dos)} do'] if dos else []) + [f"{len(donts)} don't", b['category']]
    return (f'rules/{folder}/cover.jpg', f'rules / {folder}', name, summary, chips, None, f'rules / {folder} / README.md', sketch)

def page(crumb, title, lede, chips, frame, sketch_html):
    hsize = 88 if len(title) <= 16 else 72 if len(title) <= 24 else 60
    parts = crumb.split(' / ')
    crumb_html = 'ProUI <span>/</span> ' + ' <span>/</span> '.join(html.escape(p) for p in parts)
    chip_html = ''.join(f'<span class="chip{" b" if i == 0 else ""}">{html.escape(c)}</span>' for i, c in enumerate(chips))
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body style="--h:{hsize}px">
<div class="glow"></div><div class="grid"></div>
<div class="left"><div class="crumb">{crumb_html}</div><h1>{html.escape(title)}</h1><p class="lede">{html.escape(lede)}</p><div class="chips">{chip_html}</div></div>
<div class="canvas"><div class="ctop"><i></i><i></i><i></i><em>{html.escape(frame)}</em></div><div class="stage">{sketch_html}</div></div>
</body></html>"""

MAP = [('rules', 'rules', '24 rulebooks · 587 rules'), ('workflow', 'workflow', 'brief to launch'), ('blueprints', 'blueprints', 'pages and sections'), ('typography', 'typography', 'fonts and specimens'),
       ('effects', 'effects', 'kits, levels, catalogues'), ('fx', 'effects / fx', '12 plain effects'), ('inspiration', 'inspiration', 'galleries and studies'), ('commands', 'commands', 'critique, polish, ship')]

def map_page():
    frames = ''
    for i, (key, name, sub) in enumerate(MAP):
        x, y = 64 + (i % 4) * 376, 120 + (i // 4) * 300
        frames += f'<div class="a mono" style="left:{x}px;top:{y-26}px;font-size:14px;color:#9aa1b2">{name} <span style="color:#5d6475">· {sub}</span></div>'
        frames += f'<div class="a" style="left:{x}px;top:{y}px;width:352px;height:236px;border-radius:14px;background:linear-gradient(180deg,#141821,#0f1218);border:1px solid {"#3b6dff" if i==0 else "rgba(255,255,255,.1)"};overflow:hidden"><div style="position:absolute;left:0;top:0;width:720px;height:448px;transform:scale(.4889);transform-origin:0 0"><div class="stage" style="top:22px">{SKETCH[key]()}</div></div></div>'
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS} body{{height:680px}}</style></head><body>
<div class="glow"></div><div class="grid" style="background-size:32px 32px;mask:none;opacity:.35"></div>
<div class="a" style="left:64px;top:36px;font:500 15px JB;letter-spacing:.06em;color:#7da0ff;text-transform:uppercase">ProUI <span style="color:#5d6475">/</span> what is inside</div>
{frames}</body></html>"""

async def main():
    only = set(sys.argv[2:])
    jobs = []
    for out, crumb, title, lede, chips, key, frame in COVERS:
        if only and out not in only and 'covers' not in only: continue
        jobs.append((out, page(crumb, title, lede, chips, frame, SKETCH[key]())))
    for folder in sorted(os.listdir(os.path.join(ROOT, 'rules'))):
        if not os.path.exists(os.path.join(ROOT, 'rules', folder, 'rulebook.json')): continue
        out, crumb, title, lede, chips, _, frame, sketch = rule_cover(folder)
        if only and out not in only and 'rulebooks' not in only: continue
        jobs.append((out, page(crumb, title, lede, chips, frame, sketch)))
    if not only or 'assets/map.jpg' in only:
        jobs.append(('assets/map.jpg', map_page()))
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox', '--allow-file-access-from-files'])
        pg = await b.new_page(viewport={'width': 1600, 'height': 560}, device_scale_factor=1.25)
        for out, doc_ in jobs:
            await pg.set_viewport_size({'width': 1600, 'height': 680 if out == 'assets/map.jpg' else 560})
            path = os.path.join(TMP, out.replace('/', '__') + '.html')
            open(path, 'w').write(doc_)
            await pg.goto('file://' + path)
            await pg.evaluate('document.fonts.ready')
            await pg.wait_for_timeout(150)
            await pg.screenshot(path=os.path.join(ROOT, out), type='jpeg', quality=84)
            print('rendered', out)
        await b.close()

asyncio.run(main())
