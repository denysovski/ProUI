// ProUI fx · Petal loader. Builds the petals and gives each one the direction its fill comes from.
// Usage: petalLoader(document.querySelector(".petal-loader"))  ->  returns done() to hide it.
// Pair it with the warm-up of MO-32: call done() only after every stage of the scene has rendered once.

// petal centres on an 84 x 76 field (offset 8, 12), clockwise from top left, centre last
const PETALS = [
  [35, 24], [65, 24], [80, 50], [65, 76], [35, 76], [20, 50], [50, 50],
];

export function petalLoader(root, { timeout = 12000 } = {}) {
  const flower = root.querySelector(".petal-flower");
  PETALS.forEach(([x, y], i) => {
    const [px, py] = PETALS[i === 0 ? 5 : i - 1];
    const len = Math.hypot(x - px, y - py) || 1;
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${((x - 8) / 84) * 100}%`;
    petal.style.top = `${((y - 12) / 76) * 100}%`;
    petal.style.setProperty("--i", i);
    petal.style.setProperty("--dx", `${((px - x) / len) * 104}%`);
    petal.style.setProperty("--dy", `${((py - y) / len) * 104}%`);
    const fill = document.createElement("span");
    fill.className = "petal-fill";
    petal.append(fill);
    flower.append(petal);
  });

  // scroll stays locked while it shows (MO-30)
  const html = document.documentElement;
  const prev = html.style.overflow;
  html.style.overflow = "hidden";
  let finished = false;
  const done = () => {
    if (finished) return;
    finished = true;
    root.dataset.done = "true";
    html.style.overflow = prev;
  };
  setTimeout(done, timeout); // never wait forever: show the page as it is
  return done;
}
