# XSlop

Jeden velký skill sheet (`SKILL.md`) pro AI agenty (Claude, ChatGPT, Cursor…), podle kterého staví weby tak,
aby nevypadaly vygenerovaně („AI slop“, „vibecoded“), ale jako hotový produkt od člověka.

Každé pravidlo má vlastní kód (např. `SL-14`, `MO-04`), takže agentovi můžu přesně říct, co zahrnout a co
vynechat.

## Jak to použít

Zadání pro agenta, například:

- `Udělej web pro kavárnu podle XSlop.` – použije všechna pravidla.
- `Podle XSlop, ale nech SL-25 (mono písmo).` – tenhle vzor povolí, ale střídmě.
- `Podle XSlop, vynech PE-10.` – tohle pravidlo přeskočí.
- `Jen XSlop SEO a PF.` – použije jen tyhle skupiny.
- `XSlop audit tohohle webu.` – nic nestaví, jen zkontroluje web a vypíše, co nesplňuje.

Jako skill: složku s `SKILL.md` stačí dát mezi skilly agenta (např. Claude), načte se sama, když se řekne „XSlop“.

## Co obsahuje

| Skupina | Kód | Obsah |
| --- | --- | --- |
| Slop, kterému se vyhnout | `SL-01` až `SL-48` | vizuální a textové vzory, podle kterých web vypadá jako od AI |
| Design craft | `DC-01` až `DC-20` | drobná rozhodnutí, díky kterým design působí promyšleně |
| Animace | `MO-01` až `MO-20` | jak animovat rychle, přirozeně a bez efektů pro efekt |
| Stavy | `ST-01` až `ST-10` | prázdný stav, načítání, chyba, offline, pomalá síť, žádné výsledky, chybějící oprávnění, vypršení přihlášení, validace, úspěch |
| Produkční základ | `PE-01` až `PE-14` | 404, CTA, favicon, OG obrázek, děkovací stránka, právní stránky, cookies, analytika, kontakt, Git, přístupnost |
| SEO | `SEO-01` až `SEO-16` | sitemap, robots.txt, canonical, title, description, H1, nadpisy, alt texty, schema, odkazy, URL, HTTPS, Search Console, llms.txt |
| Výkon | `PF-01` až `PF-21` | obrázky, lazy loading, Core Web Vitals, code splitting, cache, databáze, Lighthouse, lehké 3D a video |

Na konci je kontrolní seznam, který agent projde, než řekne, že je hotovo.

## Čemu se chci vyhnout

Tohle jsou věci, které na webu nechci (pravidla `SL`). Některé jsou označené jako „soft“: ty jsou v pořádku,
jen když jsou záměrnou součástí stylu a nejsou všude.

Barvy a plochy
- fialovo-modré přechody
- přechody na pozadí místo skutečného obsahu (soft)
- svítící rozmazané koule na pozadí
- skleněné průhledné panely všude (soft)
- zbytečné výrazné stíny
- tmavý režim s nečitelným šedým textem
- spousta odstínů a průhledností místo jednoduché palety
- zrnitý / dither efekt jen kvůli trendu (soft)

Layout a komponenty
- tři karty s ikonkou vedle sebe
- prázdné bento mřížky
- generické tři cenové tarify
- všechno v rámečcích, krabičky v krabičkách
- oddělovací čáry všude
- štítky a pilulky všude
- štítky „New“ nad nadpisy
- malý nadtitulek nad každým nadpisem (soft)
- číslování sekcí, které nic neznamená (soft)
- super-zaoblené čtverce všude
- neupravené komponenty z knihovny (shadcn/ui)
- přeplácané falešné ukázky rozhraní
- zbytečně složité diagramy

Písmo
- Instrument Serif a „AI serif“ vzhled
- kurzíva na náhodných slovech
- stažené mezery mezi písmeny v běžném textu
- mono písmo všude (soft)
- VELKÁ PÍSMENA v každém podnadpisu (soft)
- tečky na konci nadpisů (soft)
- nadpisy vyplněné barevným přechodem

Ikony a dekorace
- Lucide ikonky na každém řádku
- emoji v nadpisech a tlačítkách
- jiskřičky u všeho „AI“ a „nového“
- dekorativní „kódové“ prvky na webu, který není o kódu
- ASCII obrázky a animace
- záře a paprsky sledující kurzor

Animace
- všechno se při scrollu prolíná a vyjíždí
- poskakující pružné animace u běžných prvků

Texty
- dlouhé pomlčky v každé větě
- fráze „Není to X, je to Y“
- obecné hero texty („Supercharge your workflow“)
- upovídané, opakující se texty
- nejasná tlačítka („Get started“, „Learn more“)
- tvrzení bez důkazů

Důvěra
- vymyšlené recenze
- zapomenuté zástupné údaje (lorem ipsum, 123 Main Street)
- chybějící skutečná ukázka produktu
- rozbité vložené prvky (mapy, videa, chat)
- formuláře, které chtějí příliš údajů
- formuláře, které nejdou ovládat klávesnicí
