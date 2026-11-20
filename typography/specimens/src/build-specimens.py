import os
NM='../node_modules'
def css(pkgs):
    out=[]
    for p in pkgs: out.append(f'<link rel="stylesheet" href="{NM}/{p}">')
    return '\n'.join(out)
S=[
dict(id='neo-grotesk',title='One grotesk, three voices',kind='Sans only',seen='Cloudflare, xAI, X Money, Agentcard, Cosmos',
 links=['@fontsource/geist-sans/300.css','@fontsource/geist-sans/400.css','@fontsource/geist-sans/500.css','@fontsource/geist-mono/400.css'],
 bg='#151414',fg='#fffbf5',mut='rgba(255,251,245,.6)',acc='#ff5e1f',
 h='font-family:"Geist Sans";font-weight:500;font-size:96px;line-height:.98;letter-spacing:-.035em',
 b='font-family:"Geist Sans";font-weight:400;font-size:22px;line-height:1.45',
 m='font-family:"Geist Mono";font-size:14px;letter-spacing:.06em;text-transform:uppercase',
 head='Ship to every region<br>before lunch.',
 body='Deploy code, store data and protect every request from one platform. Pay only when your code runs.',
 fonts='Geist Sans 500 / 400 + Geist Mono 400',lic='SIL Open Font License (Vercel)'),
dict(id='serif-display-sans-text',title='Serif headline, grotesk text',kind='Serif + sans',seen='Mintlify, Jack & Jill, Rox',
 links=['@fontsource/source-serif-4/400.css','@fontsource/source-serif-4/400-italic.css','@fontsource-variable/inter/index.css','@fontsource/ibm-plex-mono/400.css'],
 bg='#f9f9f6',fg='#100f0f',mut='rgba(16,15,15,.62)',acc='#100f0f',
 h='font-family:"Source Serif 4";font-weight:400;font-size:100px;line-height:1.02;letter-spacing:-.025em',
 b='font-family:"Inter Variable";font-weight:450;font-size:22px;line-height:1.45',
 m='font-family:"IBM Plex Mono";font-size:14px;letter-spacing:.04em',
 head='Hiring that starts<br>with a <i>real</i> conversation',
 body='One conversation replaces forty applications. Candidates get honest feedback, companies get a shortlist by Friday.',
 fonts='Source Serif 4 400 + Inter 450 + IBM Plex Mono',lic='SIL Open Font License'),
dict(id='editorial-didone',title='Didone statement, grotesk details',kind='High-contrast serif + sans',seen='Taxi Studio, fashion and drinks brands',
 links=['@fontsource/bodoni-moda/400.css','@fontsource/bodoni-moda/400-italic.css','@fontsource/hanken-grotesk/300.css','@fontsource/hanken-grotesk/500.css'],
 bg='#faf4eb',fg='#15191d',mut='rgba(21,25,29,.6)',acc='#15191d',
 h='font-family:"Bodoni Moda";font-weight:400;font-size:92px;line-height:1.04;letter-spacing:-.02em',
 b='font-family:"Hanken Grotesk";font-weight:300;font-size:22px;line-height:1.5',
 m='font-family:"Hanken Grotesk";font-weight:500;font-size:13px;letter-spacing:.14em;text-transform:uppercase',
 head='Brands that age<br>like <i>good</i> wine',
 body='Packaging, identity and a design system for a family business that has been pressing olive oil since 1891.',
 fonts='Bodoni Moda 400 + Hanken Grotesk 300 / 500',lic='SIL Open Font License'),
dict(id='condensed-caps',title='Condensed capitals as the hero',kind='Condensed sans',seen='Taxi Studio hero, sport and event sites',
 links=['@fontsource-variable/archivo/wdth.css','@fontsource/hanken-grotesk/400.css'],
 bg='#0c0c0c',fg='#f5f2ea',mut='rgba(245,242,234,.55)',acc='#f5f2ea',
 h='font-family:"Archivo Variable";font-weight:800;font-stretch:62%;font-size:176px;line-height:.86;letter-spacing:-.01em;text-transform:uppercase',
 b='font-family:"Hanken Grotesk";font-weight:400;font-size:21px;line-height:1.5',
 m='font-family:"Hanken Grotesk";font-size:13px;letter-spacing:.16em;text-transform:uppercase',
 head='Made to be<br>picked up.',
 body='Brand and packaging for products that sit on a shelf next to forty competitors and still get picked up first.',
 fonts='Archivo Variable 800, width 62% + Hanken Grotesk',lic='SIL Open Font License'),
dict(id='soft-slab',title='Soft slab with a friendly sans',kind='Slab serif + sans',seen='Town, small-business software, education',
 links=['@fontsource/zilla-slab/300.css','@fontsource/zilla-slab/400.css','@fontsource/figtree/400.css','@fontsource/figtree/600.css'],
 bg='#fdfdfc',fg='#1c1b1b',mut='rgba(28,27,27,.62)',acc='#ffe066',
 h='font-family:"Zilla Slab";font-weight:300;font-size:108px;line-height:1;letter-spacing:-.02em',
 b='font-family:"Figtree";font-weight:400;font-size:22px;line-height:1.5',
 m='font-family:"Figtree";font-weight:600;font-size:14px;letter-spacing:.02em',
 head='Does the busywork,<br>so you can do the work.',
 body='The <mark>unusually helpful</mark> assistant for small teams. It answers the phone, books the jobs and sends the invoices.',
 fonts='Zilla Slab 300 + Figtree 400 / 600',lic='SIL Open Font License'),
dict(id='retro-terminal',title='Bitmap labels, grotesk statements',kind='Pixel + mono + sans',seen='TypeSafe AI, developer tools, games',
 links=['@fontsource/vt323/400.css','@fontsource/ibm-plex-mono/400.css','@fontsource/schibsted-grotesk/500.css'],
 bg='#f3eef8',fg='#1e1e1e',mut='rgba(30,30,30,.7)',acc='#f386a1',
 h='font-family:"Schibsted Grotesk";font-weight:500;font-size:104px;line-height:.9;letter-spacing:-.02em;text-transform:capitalize',
 b='font-family:"IBM Plex Mono";font-weight:400;font-size:19px;line-height:1.55',
 m='font-family:"VT323";font-size:26px;letter-spacing:.02em',
 head='12x faster.<br>40x cheaper.',
 body='Send structured questions, get typed decisions with probabilities your software can act on.',
 fonts='Schibsted Grotesk 500 + IBM Plex Mono + VT323',lic='SIL Open Font License'),
dict(id='warm-serif-humanist',title='Warm serif with a humanist sans',kind='Serif + sans, warm palette',seen='Heron palette, Fruitful, local brands',
 links=['@fontsource/young-serif/400.css','@fontsource/figtree/400.css','@fontsource/figtree/500.css'],
 bg='#f9faf0',fg='#4a1809',mut='rgba(74,24,9,.7)',acc='#ff835e',
 h='font-family:"Young Serif";font-weight:400;font-size:100px;line-height:1.02;letter-spacing:-.02em',
 b='font-family:"Figtree";font-weight:400;font-size:22px;line-height:1.5',
 m='font-family:"Figtree";font-weight:500;font-size:14px;letter-spacing:.04em',
 head='Clear numbers,<br>calm decisions.',
 body='Ivory paper, burnt-brown ink instead of black and one coral action. Calm, confident, never loud.',
 fonts='Young Serif 400 + Figtree 400 / 500',lic='SIL Open Font License'),
dict(id='light-grotesk',title='Light grotesk at a large size',kind='Sans only, light weight',seen='Ramp design, architecture, luxury',
 links=['@fontsource/hanken-grotesk/200.css','@fontsource/hanken-grotesk/400.css','@fontsource/ibm-plex-mono/400.css'],
 bg='#ffffff',fg='#0c0a08',mut='rgba(12,10,8,.6)',acc='#d9f24a',
 h='font-family:"Hanken Grotesk";font-weight:200;font-size:150px;line-height:.92;letter-spacing:-.045em',
 b='font-family:"Hanken Grotesk";font-weight:400;font-size:21px;line-height:1.5',
 m='font-family:"IBM Plex Mono";font-size:13px;letter-spacing:.04em;text-transform:uppercase',
 head='Beyond<br>the brief',
 body='Field trips, workshops and the in-between moments that keep a team curious. Thin weight, huge size, lots of air.',
 fonts='Hanken Grotesk 200 / 400 + IBM Plex Mono',lic='SIL Open Font License'),
]
for s in S:
    btn_fg = '#111' if s['id'] in ('condensed-caps','neo-grotesk','light-grotesk','retro-terminal','soft-slab') and s['acc'] not in ('#15191d','#100f0f') else '#fff'
    if s['id']=='neo-grotesk': btn_fg='#fffbf5'
    if s['id']=='warm-serif-humanist': btn_fg='#4a1809'
    html=f'''<!doctype html><html><head><meta charset="utf-8">{css(s['links'])}
<style>*{{margin:0;box-sizing:border-box}}body{{width:1600px;height:900px;background:{s['bg']};color:{s['fg']};position:relative;overflow:hidden}}
.wrap{{position:absolute;left:96px;right:96px;top:84px;bottom:72px;display:grid;grid-template-rows:auto 1fr auto}}
.meta{{display:flex;justify-content:space-between;{s['m']};color:{s['mut']}}}
h1{{{s['h']};align-self:center;margin-top:20px}} h1 i{{font-style:italic}}
.row{{display:grid;grid-template-columns:1.1fr .9fr;gap:64px;align-items:end}}
p{{{s['b']};color:{s['mut']};max-width:640px}} mark{{background:{s['acc']};color:inherit;padding:0 .2em}}
.ui{{display:flex;gap:14px;align-items:center;justify-content:flex-end}}
.btn{{font-family:inherit;{s['b'].split(';font-size')[0]};font-size:17px;padding:14px 26px;border-radius:999px;background:{s['acc']};color:{btn_fg}}}
.btn2{{font-size:17px;padding:13px 25px;border-radius:999px;border:1px solid {s['mut']};{s['b'].split(';font-size')[0]}}}
.cap{{position:absolute;left:96px;bottom:28px;{s['m']};font-size:12px;color:{s['mut']}}}
</style></head><body><div class="wrap"><div class="meta"><span>{s['kind']} · {s['title']}</span><span>{s['fonts']}</span></div>
<h1>{s['head']}</h1><div class="row"><p>{s['body']}</p><div class="ui"><span class="btn2">Learn more</span><span class="btn">Get started</span></div></div></div>
<div class="cap">Seen in: {s['seen']} · Free fonts, {s['lic']} · ProUI type specimen</div></body></html>'''
    open(f"/home/claude/proui-art/spec/{s['id']}.html",'w').write(html)
import json;json.dump([{k:v for k,v in s.items() if k in('id','title','kind','seen','fonts','lic')} for s in S],open('/home/claude/gen/spec.json','w'),indent=1)
print(len(S))
