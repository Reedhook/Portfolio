const PAL = {
  k: "#161616",
  d: "#4a4a44",
  m: "#8d8d86",
  w: "#ffffff",
  g: "#1f8a4c",
  y: "#e2a63a",
  a: "#d5e7ee",
  n: "#f3c7a5",
  S: "#ffffff",
};

const SCALE = 7;

function blank(w, h) {
  return Array.from({ length: h }, () => ".".repeat(w));
}

function paint(rows, x, y, w, h, ch) {
  for (let j = 0; j < h; j += 1) {
    if (y + j < 0 || y + j >= rows.length) continue;
    const line = rows[y + j].split("");
    for (let i = 0; i < w; i += 1) {
      if (x + i < 0 || x + i >= line.length) continue;
      line[x + i] = ch;
    }
    rows[y + j] = line.join("");
  }
}

function frame(rows, x, y, w, h, edge, fill) {
  paint(rows, x, y, w, h, edge);
  paint(rows, x + 1, y + 1, w - 2, h - 2, fill);
}

function pixelSvg(rows, scale, glow) {
  const h = rows.length;
  const w = Math.max(...rows.map((row) => row.length));
  let body = "";
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < rows[y].length; x += 1) {
      const ch = rows[y][x];
      if (ch === "." || !PAL[ch]) continue;
      const cls = glow && ch === "y" ? ' class="sun"' : "";
      body += `<rect x="${x}" y="${y}" width="1" height="1" fill="${PAL[ch]}"${cls}/>`;
    }
  }
  const size = scale ? `width="${w * scale}" height="${h * scale}"` : 'width="100%" height="100%"';
  return `<svg class="px" viewBox="0 0 ${w} ${h}" ${size} shape-rendering="crispEdges" aria-hidden="true">${body}</svg>`;
}

const SPRITES = {
  truck: [
    [
      "................",
      "................",
      "......kkkkk.....",
      ".....kwwwwwk....",
      "....kkkkkkkkkk..",
      "...kddddddddddk.",
      "..kwwwwwwwwwwwwk",
      ".kkkkkkkkkkkkkkk",
      "..kk......kk....",
      ".kwwk....kwwk...",
      "..kk......kk....",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "......kkkkk.....",
      ".....kwwwwwk....",
      "....kkkkkkkkkk..",
      "...kddddddddddk.",
      "..kwwwwwwwwwwwwk",
      ".kkkkkkkkkkkkkkk",
      ".k.k......k.k...",
      ".kkk......kkk...",
      ".k.k......k.k...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "......kkkkk.....",
      ".....kwwwwwk....",
      "....kkkkkkkkkk..",
      "...kddddddddddk.",
      "..kwwwwwwwwwwwwk",
      ".kkkkkkkkkkkkkkk",
      ".kkk......kkk...",
      ".k.k......k.k...",
      ".kkk......kkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "......kkkkk.....",
      ".....kwwwwwk....",
      "....kkkkkkkkkk..",
      "...kddddddddddk.",
      "..kwwwwwwwwwwwwk",
      ".kkkkkkkkkkkkkkk",
      "..kk......kk....",
      ".kwk......kwk...",
      "..kk......kk....",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  spark: [
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      ".......k........",
      "......kyk.......",
      ".......k........",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      ".......k........",
      "......k.k.......",
      ".....k.y.k......",
      "......k.k.......",
      ".......k........",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      ".......k........",
      "......kyk.......",
      "....k.kyk.k.....",
      "...kkkyyykkk....",
      "....k.kyk.k.....",
      "......kyk.......",
      ".......k........",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      "....k.......k...",
      ".......k........",
      "......kyk.......",
      ".......k........",
      "....k.......k...",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  lips: [
    [
      "................",
      "................",
      "................",
      "................",
      "...kkkkkkkkkk...",
      "..kwwwwwwwwwwk..",
      "..kwwkkkkkkwwk..",
      "..kwwwwwwwwwwk..",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "...kkkkkkkkkk...",
      "..kwwwwwwwwwwk..",
      "..kwwk....kwwk..",
      "..kwwwwwwwwwwk..",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "...kkkkkkkkkk...",
      "..kwwwwwwwwwwk..",
      "..kwk......kwk..",
      "..kwwwwwwwwwwk..",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "...kkkkkkkkkk...",
      "..kwwwwwwwwwwk..",
      "..kwwk....kwwk..",
      "..kwwwwwwwwwwk..",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  server: [
    [
      "................",
      ".kkkkkkkkkkkkkk.",
      ".kgwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kgwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kgwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kgwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kgwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      "......kkkk......",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      ".kkkkkkkkkkkkkk.",
      ".kwwwgwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwgwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwgwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwgwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwgwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      "......kkkk......",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwgwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwgwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwgwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwgwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwgwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      "......kkkk......",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwwwwgwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwwwwgwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwwwwgwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwwwwgwwk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwwwwgwwk.",
      ".kkkkkkkkkkkkkk.",
      "......kkkk......",
      "................",
      "................",
      "................",
    ],
  ],
  chart: [
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      ".........gg.....",
      ".........gg.....",
      ".....gg..gg.....",
      ".....gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      "kkkkkkkkkkkkkkkk",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      ".........gg.....",
      ".........gg.....",
      ".....gg..gg.....",
      ".....gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      "kkkkkkkkkkkkkkkk",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      ".........gg.....",
      ".........gg.....",
      ".....gg..gg.....",
      ".....gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      "kkkkkkkkkkkkkkkk",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      ".........gg.....",
      ".........gg.....",
      ".....gg..gg.....",
      ".....gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      ".gg..gg..gg..gg.",
      "kkkkkkkkkkkkkkkk",
      "................",
      "................",
    ],
  ],
  game: [
    [
      "................",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwkkwwwwk.",
      ".kwywwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "....k......k....",
      "...kk......kk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwkkwwwwk.",
      ".kwwwywwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "....k......k....",
      "...kk......kk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwkkwwwwk.",
      ".kwwwwwwywwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "....k......k....",
      "...kk......kk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwkkwwwwk.",
      ".kwwwwwwwwwywwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "....k......k....",
      "...kk......kk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  code: [
    [
      "................",
      "................",
      "................",
      "....kk......kk..",
      "...k..k....k..k.",
      "..k..........k..",
      "...k..k....k..k.",
      "....kk......kk..",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "....kk......kk..",
      "...k..k....k..k.",
      "..k..........k..",
      "...k..k....k..k.",
      "....kk......kk..",
      "..........kk....",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "....kk......kk..",
      "...k..k....k..k.",
      "..k..........k..",
      "...k..k....k..k.",
      "....kk......kk..",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      "....kk......kk..",
      "...k..k....k..k.",
      "..k..........k..",
      "...k..k....k..k.",
      "....kk......kk..",
      "..........kk....",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  wand: [
    [
      "................",
      ".............k..",
      "............k...",
      "...........k....",
      "..........k.....",
      ".........k......",
      "........k.......",
      ".......k........",
      "......k.........",
      ".....k..........",
      "....k...........",
      "...y.y..........",
      "..yyyyy.........",
      "...y.y..........",
      "................",
      "................",
    ],
    [
      "................",
      ".............k..",
      "............k...",
      "...........k....",
      "..........k.....",
      ".........k......",
      "........k.......",
      ".......k........",
      "......k.........",
      ".....k..........",
      "....k...........",
      "....y...........",
      "...yky..........",
      "....y...........",
      "................",
      "................",
    ],
    [
      "................",
      ".............k..",
      "............k...",
      "...........k....",
      "..........k.....",
      ".........k......",
      "........k.......",
      ".......k........",
      "......k.........",
      ".....k..........",
      "....k...........",
      "..y.y.y.........",
      "...yyy..........",
      "..y.y.y.........",
      "................",
      "................",
    ],
    [
      "................",
      ".............k..",
      "............k...",
      "...........k....",
      "..........k.....",
      ".........k......",
      "........k.......",
      ".......k........",
      "......k.........",
      ".....k..........",
      "....k...........",
      "................",
      "...y.y..........",
      "................",
      "................",
      "................",
    ],
  ],
  chat: [
    [
      "................",
      ".kkkkkkkkkkk....",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      ".kkkkkkkkkkkk...",
      "........k.......",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      ".kkkkkkkkkkk....",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      ".kkkkkkkkkkkk...",
      "........k.......",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwkwwwwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      ".kkkkkkkkkkk....",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      ".kkkkkkkkkkkk...",
      "........k.......",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwkwwkwwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      ".kkkkkkkkkkk....",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      "kwwwwwwwwwwwk...",
      ".kkkkkkkkkkkk...",
      "........k.......",
      "..kkkkkkkkkkkk..",
      ".kwwwwwwwwwwwwk.",
      ".kwwkwwkwwkwwwk.",
      ".kwwwwwwwwwwwwk.",
      "..kkkkkkkkkkkk..",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  cards: [
    [
      "................",
      "................",
      "....kkkkkkkkkk..",
      "...kwwwwwwwwwwk.",
      "...kwwwwwwwwwwwk",
      "...kwwywwwwwwwwk",
      "...kwywwwwwwwwwk",
      "...kwwwwwwwwwwwk",
      "...kkkkkkkkkkkkk",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "....kkkkkkkkkk..",
      "...kwwwwwwwwwwk.",
      "...kwwwwwwwwwwwk",
      "...kwwywwwwwwwwk",
      "...kwwwywwwwwwwk",
      "...kwwwwwwwwwwwk",
      "...kkkkkkkkkkkkk",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "....kkkkkkkkkk..",
      "...kwwwwwwwwwwk.",
      "...kwwwwwwwwwwwk",
      "...kwwywwwwwwwwk",
      "...kwwwwwywwwwwk",
      "...kwwwwwwwwwwwk",
      "...kkkkkkkkkkkkk",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "....kkkkkkkkkk..",
      "...kwwwwwwwwwwk.",
      "...kwwwwwwwwwwwk",
      "...kwwywwwwwwwwk",
      "...kwwwywwwwwwwk",
      "...kwwwwwwwwwwwk",
      "...kkkkkkkkkkkkk",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  plane: [
    [
      "................",
      "................",
      "................",
      ".............k..",
      "............kk..",
      "y......kkkkkkk..",
      "y.kkkkkkkkk.....",
      ".kkkkkkkkkkkk...",
      "..kkkkkkkkk.....",
      ".....kkkk.......",
      "......kk........",
      ".......k.k......",
      "..........k.....",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      ".............k..",
      "............kk..",
      ".......kkkkkkk..",
      "..kkkkkkkkk.....",
      ".kkkkkkkkkkkk...",
      "..kkkkkkkkk.....",
      ".....kkkk.......",
      "......kk........",
      ".......k.k......",
      "..........k.....",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      ".............k..",
      "y...........kk..",
      "y......kkkkkkk..",
      "y.kkkkkkkkk.....",
      ".kkkkkkkkkkkk...",
      "..kkkkkkkkk.....",
      ".....kkkk.......",
      "......kk........",
      ".......k.k......",
      "..........k.....",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "................",
      ".............k..",
      "............kk..",
      ".......kkkkkkk..",
      "..kkkkkkkkk.....",
      ".kkkkkkkkkkkk...",
      "..kkkkkkkkk.....",
      ".....kkkk.......",
      "......kk........",
      ".......k.k......",
      "..........k.....",
      "................",
      "................",
      "................",
    ],
  ],
  phone: [
    [
      "................",
      "................",
      "....kkkkkkkk....",
      "...kwwwwwwwwk...",
      "...kwwwwwwywk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwggwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwkkwwwk...",
      "....kkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "....kkkkkkkk....",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwggwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwkkwwwk...",
      "....kkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "....kkkkkkkk....",
      "...kwwwwwwwwk...",
      "...kwwwwwwywk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwggwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwkkwwwk...",
      "....kkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "....kkkkkkkk....",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwggwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwkkwwwk...",
      "....kkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  page: [
    [
      "................",
      "..kkkkkkkkkkk...",
      "..kwwwwwwwwkk...",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kkkkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "..kkkkkkkkkkk...",
      "..kwwwwwwwwkk...",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kkkkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "..kkkkkkkkkkk...",
      "..kwwwwwwwwkk...",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kkkkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "..kkkkkkkkkkk...",
      "..kwwwwwwwwkk...",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwkkkwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kwwwwwwwwk....",
      "..kkkkkkkkkk....",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  building: [
    [
      "................",
      "......kkkk......",
      ".....kwwwwk.....",
      "....kkkkkkkk....",
      "...kwwkwwkwwk...",
      "...kkkkkkkkkk...",
      "...kyykwwkwwk...",
      "...kkkkkkkkkk...",
      "...kwwkwwkwwk...",
      "...kwwkkkkkkk...",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "......kkkk......",
      ".....kwwwwk.....",
      "....kkkkkkkk....",
      "...kyykwwkwwk...",
      "...kkkkkkkkkk...",
      "...kwwkwwkwwk...",
      "...kkkkkkkkkk...",
      "...kwwkwwkyyk...",
      "...kwwkkkkkkk...",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "......kkkk......",
      ".....kwwwwk.....",
      "....kkkkkkkk....",
      "...kwwkyykwwk...",
      "...kkkkkkkkkk...",
      "...kwwkyykwwk...",
      "...kkkkkkkkkk...",
      "...kwwkwwkwwk...",
      "...kwwkkkkkkk...",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "......kkkk......",
      ".....kyyyyk.....",
      "....kkkkkkkk....",
      "...kwwkwwkyyk...",
      "...kkkkkkkkkk...",
      "...kwwkwwkyyk...",
      "...kkkkkkkkkk...",
      "...kyykwwkwwk...",
      "...kwwkkkkkkk...",
      "...kkkkkkkkkk...",
      "................",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
};

const ICONS = {
  "Transport & Trade": "truck",
  "Ai-tfc": "spark",
  Lipsomatic: "lips",
  Nexurial: "server",
  "Primax — TikTok": "chart",
  "Primax — Google Ads": "chart",
  PAWM: "game",
  "C# Explore": "code",
  "C-kata": "code",
  "C-magus": "wand",
  "Parse Service": "chat",
  CasinoCheck: "cards",
  BotCargo: "plane",
  "SMS Forwarder": "phone",
  "SMS Forwarder iOS": "phone",
  Лендинг: "page",
  Landing: "page",
  "Сайт компании": "building",
  "Company site": "building",
  Продукт: "spark",
  Product: "spark",
  "Бот или приложение": "plane",
  "Bot or app": "plane",
};

function pixelIcon(name, scale, delay) {
  const key = ICONS[name];
  const frames = key ? SPRITES[key] : null;
  if (!frames) return "";
  const d = typeof delay === "number" ? delay : 0;
  const body = frames
    .map((rows) => `<span class="px-frame">${pixelSvg(rows, scale)}</span>`)
    .join("");
  return `<span class="px-icon kind-${key}" style="--d:${d}s">${body}</span>`;
}


function mountStage() {
  const root = document.getElementById("stage");
  if (!root || root.dataset.on) return;
  root.dataset.on = "1";

  const canvas = document.createElement("canvas");
  canvas.id = "scene";
  canvas.width = 480;
  canvas.height = 270;
  root.appendChild(canvas);

  const panel = document.createElement("div");
  panel.className = "pixel-panel";
  const label = document.createElement("label");
  label.htmlFor = "imgLoader";
  label.innerHTML = "Выберите скачанную картинку (или назовите её <b>bg.jpg</b> рядом с файлом):";
  const loader = document.createElement("input");
  loader.type = "file";
  loader.id = "imgLoader";
  loader.accept = "image/*";
  panel.append(label, loader);
  root.appendChild(panel);

  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  const bgImage = new Image();
  bgImage.src = "bg.png";

  loader.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      bgImage.src = URL.createObjectURL(file);
    }
  });

  let t = 0;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    if (bgImage.complete && bgImage.naturalWidth > 0) {
      ctx.drawImage(bgImage, 0, 0, W, H);
    } else {
      ctx.fillStyle = "#182030";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#ffffff";
      ctx.font = "12px monospace";
      ctx.fillText("Загрузите сохраненную картинку через кнопку внизу ↓", 65, 135);
    }

    const nightCycle = (Math.sin(t * 0.015) + 1) / 2;

    ctx.save();
    ctx.beginPath();
    ctx.rect(313, 8, 82, 134);
    ctx.rect(405, 0, 75, 162);
    ctx.clip();

    ctx.fillStyle = `rgba(10, 14, 34, ${nightCycle * 0.72})`;
    ctx.fillRect(310, 0, 170, 165);

    if (nightCycle > 0.4) {
      const starAlpha = (nightCycle - 0.4) * 1.6;
      ctx.fillStyle = `rgba(255, 255, 255, ${starAlpha})`;
      const stars = [[325, 20], [348, 14], [375, 28], [418, 16], [445, 25], [465, 12], [335, 45], [430, 42]];
      stars.forEach(([sx, sy], i) => {
        if (Math.sin(t * 0.15 + i) > -0.3) ctx.fillRect(sx, sy, 2, 2);
      });
    }

    if (nightCycle > 0.25) {
      ctx.fillStyle = `rgba(255, 210, 90, ${nightCycle * 0.9})`;
      const cityLights = [[322, 122], [338, 128], [355, 125], [378, 132], [415, 136], [432, 142], [450, 138], [468, 145]];
      cityLights.forEach(([lx, ly], i) => {
        if (Math.sin(t * 0.08 + i * 2) > 0) ctx.fillRect(lx, ly, 2, 2);
      });
    }
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "rgba(14, 22, 32, 0.85)";
    ctx.fillRect(223, 80, 55, 53);

    const colors = ["#4fd1c5", "#a3e635", "#f472b6", "#fbbf24", "#60a5fa"];
    const scroll = Math.floor(t * 0.15) % 8;
    for (let i = 0; i < 10; i++) {
      const idx = (i + scroll) % 8;
      const indent = (idx % 3) * 4;
      const fullLen = 10 + ((idx * 11) % 28);
      const len = i === 9 ? Math.floor((t * 0.8) % fullLen) : fullLen;
      ctx.fillStyle = colors[idx % colors.length];
      ctx.fillRect(226 + indent, 84 + i * 5, len, 2);
    }
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(286, 81);
    ctx.lineTo(350, 81);
    ctx.lineTo(350, 100);
    ctx.lineTo(294, 106);
    ctx.lineTo(294, 134);
    ctx.lineTo(286, 134);
    ctx.closePath();
    ctx.clip();

    ctx.fillStyle = "#e8f1f8";
    ctx.fillRect(286, 81, 64, 54);
    ctx.fillStyle = "#cbd5e1";
    ctx.fillRect(286, 81, 64, 5);

    const page = Math.floor(t * 0.02) % 3;
    if (page === 0) {
      ctx.fillStyle = "#38bdf8";
      ctx.fillRect(290, 89, 54, 12);
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(290, 104, 16, 18);
    } else if (page === 1) {
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(286, 86, 12, 48);
      ctx.fillStyle = "#10b981";
      ctx.fillRect(302, 89, 20, 10);
      ctx.fillStyle = "#6366f1";
      ctx.fillRect(325, 89, 20, 10);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(298, 88, 36, 20);
      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(304, 92, 24, 4);
      ctx.fillStyle = "#10b981";
      ctx.fillRect(308, 99, 16, 4);
    }
    ctx.restore();

    if (Math.floor(t * 0.15) % 18 === 0) {
      ctx.fillStyle = "#c88c68";
      ctx.fillRect(178, 84, 7, 3);
      ctx.fillRect(193, 84, 6, 3);
    }

    ctx.fillStyle = "#2b3446";
    for (let i = 0; i < 4; i++) {
      const sy = 168 - ((t * 0.3 + i * 6) % 22);
      const sx = 205 + Math.sin(t * 0.1 + i) * 3;
      const alpha = (sy - 146) / 22;
      ctx.fillStyle = `rgba(235, 245, 255, ${alpha * 0.55})`;
      ctx.fillRect(sx, sy, 3, 4);
    }

    const bulbs = [[186, 38], [198, 42], [213, 44], [228, 43], [243, 39], [256, 36], [260, 46], [260, 56], [260, 68]];
    bulbs.forEach(([bx, by], i) => {
      const pulse = (Math.sin(t * 0.12 + i) + 1) / 2;
      ctx.fillStyle = `rgba(255, 215, 110, ${0.2 + pulse * 0.6})`;
      ctx.fillRect(bx - 2, by - 2, 5, 5);
    });

    const cyanPulse = (Math.sin(t * 0.08) + 1) / 2;
    ctx.fillStyle = `rgba(0, 240, 255, ${0.15 + cyanPulse * 0.35})`;
    ctx.fillRect(154, 79, 8, 12);
    ctx.fillRect(337, 224, 6, 32);

    ctx.fillStyle = `rgba(12, 18, 40, ${nightCycle * 0.22})`;
    ctx.fillRect(0, 0, 312, H);

    if (reduce) return;
    t += 0.65;
    requestAnimationFrame(draw);
  }

  draw();
}

if (typeof window !== "undefined") window.mountStage = mountStage;


function assertSprites() {
  Object.entries(SPRITES).forEach(([name, frames]) => {
    frames.forEach((rows, index) => {
      rows.forEach((row, line) => {
        if (row.length !== 16) {
          throw new Error(name + " frame " + index + " line " + line + " is " + row.length);
        }
      });
      if (rows.length !== frames[0].length) throw new Error(name + " height");
    });
  });
}
assertSprites();
