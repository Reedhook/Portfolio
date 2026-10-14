const projects = [
  {
    url: "https://tuotuo.kz",
    live: true,
    filter: "product",
    price: 900000,
    tags: ["Next.js", "Node.js", "Telegram", "WhatsApp"],
    ru: {
      kind: "Сайт компании",
      name: "Transport & Trade",
      weeks: "4–7 недель",
      lead: "Сайт логистической компании, с которого заявка доходит до менеджера, а не остаётся в почте.",
      task: "Нужны были страницы услуг и живая обработка обращений: клиент пишет с сайта, менеджер отвечает, в админке видно, откуда пришла заявка.",
      done: "Страницы на русском и английском: автоперевозки, растаможка, фулфилмент. Форма заявки, чат, отзывы и служебные страницы. Менеджер отвечает из Telegram, кнопка WhatsApp открывает чат компании. Сайт опубликован.",
    },
    en: {
      kind: "Company site",
      name: "Transport & Trade",
      weeks: "4–7 weeks",
      lead: "A logistics site where a request reaches a manager instead of sitting in an inbox.",
      task: "The company needed service pages and a real path for enquiries: the client writes on the site, a manager replies, and the admin shows where the request came from.",
      done: "Russian and English pages for road freight, customs clearance, and fulfillment. A request form, chat, reviews, and policy pages. Managers reply from Telegram, and the WhatsApp button opens the company chat. The site is public.",
    },
  },
  {
    filter: "product",
    price: 1500000,
    tags: ["React", "Vite", "TypeScript"],
    ru: {
      kind: "Веб-продукт",
      name: "Ai-tfc",
      weeks: "6–12 недель",
      lead: "Один кабинет, в котором из текста собирают изображение или короткое видео.",
      task: "Свести генерацию картинок и видео в один продукт: с входом, оплатой и понятным набором инструментов, а не набором отдельных сервисов.",
      done: "Текст в изображение и в видео, правка картинки, картинка в видео, векторизация и увеличение без потери деталей. Регистрация, оплата и админка пользователей.",
    },
    en: {
      kind: "Web product",
      name: "Ai-tfc",
      weeks: "6–12 weeks",
      lead: "One account where a text prompt becomes an image or a short video.",
      task: "Bring image and video generation into a single product, with sign-in, billing, and a clear set of tools.",
      done: "Text-to-image, text-to-video, image edits, image-to-video, vectorizing, and upscaling. Registration, payments, and a user admin.",
    },
  },
  {
    filter: "product",
    price: 1500000,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    ru: {
      kind: "Веб-продукт",
      name: "Lipsomatic",
      weeks: "6–12 недель",
      lead: "Сервис, который подгоняет движение губ на видео под звуковую дорожку.",
      task: "Короткий путь для пользователя: загрузить ролик и звук, оплатить обработку внутренними кредитами и забрать результат.",
      done: "Загрузка видео и аудио, обработка lip-sync, тарифы, личный кабинет и биллинг. Кредиты живут только внутри этого продукта.",
    },
    en: {
      kind: "Web product",
      name: "Lipsomatic",
      weeks: "6–12 weeks",
      lead: "A service that matches mouth movement on a video to an audio track.",
      task: "A short path: upload a clip and a soundtrack, pay for processing with in-product credits, and take the result.",
      done: "Video and audio upload, lip-sync processing, plans, an account, and billing. Credits stay inside this product.",
    },
  },
  {
    filter: "product",
    price: 1500000,
    tags: ["React", "Vite", "Tailwind"],
    ru: {
      kind: "Веб-продукт",
      name: "Nexurial",
      weeks: "6–10 недель",
      lead: "Страница и заказ выделенного сервера со своей языковой моделью.",
      task: "Объяснить, чем свой сервер отличается от общего API, и довести человека от выбора плана до оплаченного заказа.",
      done: "Лендинг с тарифами и сравнением, оформление заказа, личный кабинет и админка заказов. После оплаты сервер, модель и доступ к API готовят отдельно.",
    },
    en: {
      kind: "Web product",
      name: "Nexurial",
      weeks: "6–10 weeks",
      lead: "A page and a checkout for a dedicated server with its own language model.",
      task: "Explain how a private server differs from a shared API, and take a buyer from a plan to a paid order.",
      done: "A landing page with plans and a comparison, checkout, an account, and an order admin. The server, model, and API access are prepared after payment.",
    },
  },
  {
    filter: "landing",
    price: 350000,
    tags: ["React", "Vite", "Redux"],
    ru: {
      kind: "Лендинг",
      name: "Primax — TikTok",
      weeks: "2–4 недели",
      lead: "Посадочная для агентств и медиабайеров, которые ведут TikTok Ads.",
      task: "На одном экране показать оффер: бонус к каждому пополнению рекламного баланса и инфраструктуру аккаунтов.",
      done: "Длинный лендинг: первый экран, выгода, шаги подключения, доверие, FAQ и путь к регистрации. Это отдельный сайт, не страница внутри кабинета.",
    },
    en: {
      kind: "Landing",
      name: "Primax — TikTok",
      weeks: "2–4 weeks",
      lead: "A landing page for agencies and media buyers running TikTok Ads.",
      task: "Show one offer clearly: a bonus on every ad-balance top-up, plus the account infrastructure.",
      done: "A long landing page: hero, the gain, setup steps, trust, FAQ, and a path to sign up. It is its own site, not a page inside a dashboard.",
    },
  },
  {
    filter: "landing",
    price: 350000,
    tags: ["React", "Vite"],
    ru: {
      kind: "Лендинг",
      name: "Primax — Google Ads",
      weeks: "2–4 недели",
      lead: "Та же посадочная Primax, собранная отдельно под Google Ads.",
      task: "Повторить предложение для другого канала и не смешивать его с текстом про TikTok.",
      done: "Свой первый экран, расчёт выгоды, блок для кого продукт, FAQ и регистрация. Кампании клиента при этом остаются в его текущем кабинете Google.",
    },
    en: {
      kind: "Landing",
      name: "Primax — Google Ads",
      weeks: "2–4 weeks",
      lead: "The same Primax offer, built as its own page for Google Ads.",
      task: "Repeat the offer for another channel without mixing it with the TikTok story.",
      done: "Its own hero, a cost example, who it is for, FAQ, and sign-up. The client’s current Google campaigns stay where they are.",
    },
  },
  {
    filter: "product",
    price: 2200000,
    tags: ["React", "Vite", "Laravel", "Telegram"],
    ru: {
      kind: "Веб-продукт",
      name: "PAWM",
      weeks: "8–14 недель",
      lead: "Сайт игры и кабинет игрока, плюс отдельный интерфейс в Telegram.",
      task: "Рассказать об игре и собрать рядом магазин, токены, партнёрство и личный кабинет. Часть сценариев нужна прямо в мессенджере.",
      done: "Страницы игры, токенов, магазина, партнёрства и документов. Кабинет: баланс, рефералы, история. В Telegram — матчи, задания, рейтинг и профиль. Сумма выше базового продукта: это сайт и мини-приложение.",
    },
    en: {
      kind: "Web product",
      name: "PAWM",
      weeks: "8–14 weeks",
      lead: "A game site and a player account, plus a separate Telegram interface.",
      task: "Explain the game and put a shop, tokens, partnerships, and an account next to it. Part of the flow had to live in the messenger.",
      done: "Pages for the game, tokens, shop, partnerships, and documents. An account for balance, referrals, and history. In Telegram: matches, tasks, a ranking, and a profile. The price sits above a base product because it is a site plus a mini app.",
    },
  },
  {
    filter: "learning",
    price: 1500000,
    tags: ["Next.js", "C#", "CodeMirror"],
    ru: {
      kind: "Учебная платформа",
      name: "C# Explore",
      weeks: "6–12 недель",
      lead: "Площадка, где C# учат на задачах с автоматической проверкой.",
      task: "Нужен был тренажёр, а не лента статей: каталог, редактор в браузере и видимый прогресс.",
      done: "Большой каталог задач, редактор кода, мгновенный прогон тестов, ранги, профиль и подписка.",
    },
    en: {
      kind: "Learning platform",
      name: "C# Explore",
      weeks: "6–12 weeks",
      lead: "A place to learn C# through challenges that check themselves.",
      task: "A trainer, not a blog: a catalog, an editor in the browser, and progress you can see.",
      done: "A large kata catalog, a code editor, instant test runs, ranks, a profile, and a subscription.",
    },
  },
  {
    filter: "learning",
    price: 1500000,
    tags: ["Next.js", "C"],
    ru: {
      kind: "Учебная платформа",
      name: "C-kata",
      weeks: "6–12 недель",
      lead: "Тот же формат практики, но для языка C.",
      task: "Короткие задачи, решение сразу проверяется, уровень виден по рангу.",
      done: "Каталог ката, редактор, проверка решений, ранги, аккаунт и тарифы.",
    },
    en: {
      kind: "Learning platform",
      name: "C-kata",
      weeks: "6–12 weeks",
      lead: "The same practice format, for the C language.",
      task: "Short challenges, an immediate check, and a rank that shows the level.",
      done: "A kata catalog, an editor, solution checks, ranks, an account, and plans.",
    },
  },
  {
    filter: "learning",
    price: 1500000,
    tags: ["Next.js", "C"],
    ru: {
      kind: "Учебная платформа",
      name: "C-magus",
      weeks: "6–12 недель",
      lead: "Тренажёр по C, оформленный как игра с заклинаниями.",
      task: "Оставить механику практики и сменить тон: задание — заклинание, ранг — ступень мага.",
      done: "Каталог заданий, редактор, проверка, ранги от ученика до грандмастера, аккаунт и тарифы.",
    },
    en: {
      kind: "Learning platform",
      name: "C-magus",
      weeks: "6–12 weeks",
      lead: "A C trainer dressed as a game of spells.",
      task: "Keep the practice loop and change the tone: a challenge is a spell, a rank is a step as a mage.",
      done: "A challenge catalog, an editor, checks, ranks from apprentice to grandmaster, an account, and plans.",
    },
  },
  {
    filter: "service",
    price: 1500000,
    tags: ["React", "FastAPI", "Python"],
    ru: {
      kind: "Рабочий кабинет",
      name: "Parse Service",
      weeks: "6–10 недель",
      lead: "Внутренний стол для переписок из Telegram и WhatsApp.",
      task: "Собрать диалоги, фильтры и ответы модели на одном экране, чтобы не прыгать между чатами.",
      done: "Вход, чаты, заказы, фильтры, подключение Telegram и WhatsApp. Ответ модели пишется в том же интерфейсе.",
    },
    en: {
      kind: "Operations desk",
      name: "Parse Service",
      weeks: "6–10 weeks",
      lead: "An internal desk for Telegram and WhatsApp threads.",
      task: "Put conversations, filters, and model replies on one screen, so the team is not jumping between chats.",
      done: "Sign-in, chats, orders, filters, and connections for Telegram and WhatsApp. The model replies in the same interface.",
    },
  },
  {
    filter: "service",
    price: 900000,
    tags: ["FastAPI", "Python"],
    ru: {
      kind: "Рабочий кабинет",
      name: "CasinoCheck",
      weeks: "3–6 недель",
      lead: "Кабинет, в котором запускают проверки и смотрят, чем они закончились.",
      task: "Команде нужен список прогонов, карты, транзакции и разные права: обычный пользователь и администратор.",
      done: "Экран тестов со статусами, разделы карт и транзакций, создание прогона и разделение ролей.",
    },
    en: {
      kind: "Operations desk",
      name: "CasinoCheck",
      weeks: "3–6 weeks",
      lead: "A desk for starting checks and seeing how they finished.",
      task: "The team needed a run list, cards, transactions, and two levels of access: user and admin.",
      done: "A test screen with statuses, card and transaction sections, a way to start a run, and separate roles.",
    },
  },
];

const extras = [
  {
    price: 500000,
    tags: ["Python", "Telegram", "Playwright"],
    ru: {
      name: "BotCargo",
      weeks: "3–6 недель",
      lead: "Бот подаёт заявления на разрешение, пока человек остаётся в Telegram.",
      task: "Не проходить кабинет cga.qoldau.kz руками по каждой машине.",
      done: "Справочник машин и водителей, ручной запуск и автозапуск заранее, вход в кабинет, код из почты и снимки шагов.",
    },
    en: {
      name: "BotCargo",
      weeks: "3–6 weeks",
      lead: "A bot files permit applications while the person stays in Telegram.",
      task: "Stop walking through cga.qoldau.kz by hand for every vehicle.",
      done: "A directory of vehicles and drivers, manual and scheduled runs, login, a code from email, and screenshots of the steps.",
    },
  },
  {
    price: 350000,
    tags: ["Android", "Kotlin"],
    ru: {
      name: "SMS Forwarder",
      weeks: "2–4 недели",
      lead: "Телефон сам отправляет входящие SMS в Telegram.",
      task: "Доставить текст выбранным людям и уметь отсечь лишнее по SIM и по словам.",
      done: "Android-приложение: получатели, фильтры, старт и стоп. Токен бота задаётся при сборке, не лежит в открытом виде.",
    },
    en: {
      name: "SMS Forwarder",
      weeks: "2–4 weeks",
      lead: "The phone sends incoming SMS to Telegram on its own.",
      task: "Deliver the text to chosen people, and drop the rest by SIM or by words.",
      done: "An Android app: recipients, filters, start and stop. The bot token is set at build time, not left in the open.",
    },
  },
  {
    price: 350000,
    tags: ["iOS", "Swift"],
    ru: {
      name: "SMS Forwarder iOS",
      weeks: "2–4 недели",
      lead: "Та же пересылка на iPhone, в рамках правил Apple.",
      task: "iOS не даёт приложению читать SMS в фоне, поэтому путь другой, чем на Android.",
      done: "Отправка через «Поделиться» и через команду в Shortcuts. Получатели и фильтры настраиваются в приложении.",
    },
    en: {
      name: "SMS Forwarder iOS",
      weeks: "2–4 weeks",
      lead: "The same forwarding on iPhone, inside Apple’s rules.",
      task: "iOS does not let an app read SMS in the background, so the path is different from Android.",
      done: "Sending through Share and through a Shortcuts command. Recipients and filters are set in the app.",
    },
  },
];

const offers = [
  {
    price: 350000,
    ru: {
      kind: "Лендинг",
      weeks: "2–4 недели",
      text: "Одна посадочная: оффер, блоки, FAQ, форма или кнопка заявки, телефон и компьютер.",
    },
    en: {
      kind: "Landing",
      weeks: "2–4 weeks",
      text: "One page: the offer, sections, FAQ, a form or a request button, phone and desktop.",
    },
  },
  {
    price: 900000,
    ru: {
      kind: "Сайт компании",
      weeks: "4–7 недель",
      text: "Несколько страниц, языки, заявки, отзывы и админка. Telegram или WhatsApp — если ответы должны приходить менеджеру.",
    },
    en: {
      kind: "Company site",
      weeks: "4–7 weeks",
      text: "Several pages, languages, requests, reviews, and an admin. Telegram or WhatsApp if replies should reach a manager.",
    },
  },
  {
    price: 1500000,
    ru: {
      kind: "Продукт",
      weeks: "6–12 недель",
      text: "Регистрация, кабинет, оплата или внутренние кредиты, роли и админка. Учебная платформа и сервис генерации — этот объём.",
    },
    en: {
      kind: "Product",
      weeks: "6–12 weeks",
      text: "Sign-up, an account, payments or in-product credits, roles, and an admin. A learning platform or a generation tool sits here.",
    },
  },
  {
    price: 350000,
    ru: {
      kind: "Бот или приложение",
      weeks: "2–6 недель",
      text: "Telegram, WhatsApp или телефонная пересылка. Если это часть большого сайта, входит в продукт или считается рядом — как договоримся.",
    },
    en: {
      kind: "Bot or app",
      weeks: "2–6 weeks",
      text: "Telegram, WhatsApp, or phone forwarding. If it is part of a larger site, it folds into the product or sits beside it.",
    },
  },
];

const copy = {
  ru: {
    html: "ru",
    title: "Reedhook — сайты, кабинеты и боты",
    skip: "К услугам",
    navLabel: "Разделы",
    navWork: "Работы",
    navPrice: "Услуги",
    navContact: "Контакт",
    navCta: "Написать",
    eyebrow: "Разработка под задачу",
    heading: "Соберу продукт, с которого клиент делает шаг.",
    headingHtml: "Соберу продукт,<br><span class=\"grad\">с которого клиент делает шаг.</span>",
    typeText: ["Сайт, который приводит заявку.", "Кабинет с оплатой и ролями.", "Бот, который закрывает рутину."],
    lede: "Сайты, кабинеты и боты под вашу задачу. Сумма на карточке — старт за такой объём, не старый счёт. До начала фиксируем экраны, срок и цену.",
    heroMail: "Описать задачу",
    heroMore: "Смотреть работы",
    statWork: "сделанных работ",
    statStart: "старт, тенге",
    statLive: "сайт уже открыт",
    work: "Работы",
    workNote: "Живая ссылка есть только у опубликованного сайта. Остальные можно открыть отдельно, по запросу.",
    filtersLabel: "Фильтр",
    filters: [
      ["all", "Все"],
      ["product", "Продукты"],
      ["landing", "Лендинги"],
      ["learning", "Обучение"],
      ["service", "Кабинеты"],
    ],
    task: "Задача",
    done: "Что сделано",
    open: "Открыть сайт",
    price: "Форматы и старт",
    priceNote:
      "Выберите ближайший объём. Если задача между форматами, напишите — скажу, куда она ложится и какая вилка получается.",
    factorsTitle: "Что меняет сумму",
    factors: [
      "Сколько экранов и языков",
      "Вход, роли и личный кабинет",
      "Оплата, тарифы, внутренние кредиты",
      "Админка заявок, людей и контента",
      "Telegram, WhatsApp и чужие кабинеты",
      "Мини-приложение или отдельный телефонный клиент",
    ],
    also: "Боты и приложения",
    alsoNote: "Это не сайты. Цена — за похожий отдельный заказ.",
    contactKicker: "Следующий шаг",
    contactTitle: "Опишите задачу в одном письме",
    contactText:
      "Что должен делать продукт и нужны ли кабинет, оплата или бот. Отвечу, на какой формат это похоже и от какой суммы считаем.",
    from: "от",
  },
  en: {
    html: "en",
    title: "Reedhook — sites, accounts, and bots",
    skip: "Skip to services",
    navLabel: "Sections",
    navWork: "Work",
    navPrice: "Services",
    navContact: "Contact",
    navCta: "Write",
    eyebrow: "Built for the job",
    heading: "I’ll build the product that gets a client to act.",
    headingHtml: "I’ll build the product<br><span class=\"grad\">that gets a client to act.</span>",
    typeText: ["A site that brings the request in.", "An account with billing and roles.", "A bot that takes the routine."],
    lede: "Sites, accounts, and bots for a specific job. The figure on a card is the start for that scope, not an old invoice. Screens, time, and price are fixed before work starts.",
    heroMail: "Describe the job",
    heroMore: "See the work",
    statWork: "finished jobs",
    statStart: "starting price, tenge",
    statLive: "site already public",
    work: "Work",
    workNote: "A live link is there only for the public site. The others can be opened on request.",
    filtersLabel: "Filter",
    filters: [
      ["all", "All"],
      ["product", "Products"],
      ["landing", "Landings"],
      ["learning", "Learning"],
      ["service", "Desks"],
    ],
    task: "Brief",
    done: "What was built",
    open: "Open site",
    price: "Formats and starting prices",
    priceNote:
      "Pick the closest scope. If the job sits between formats, write — I’ll say where it lands and what the range is.",
    factorsTitle: "What moves the price",
    factors: [
      "How many screens and languages",
      "Sign-in, roles, and an account",
      "Payments, plans, in-product credits",
      "An admin for requests, people, and content",
      "Telegram, WhatsApp, and outside accounts",
      "A mini app or a separate phone client",
    ],
    also: "Bots and apps",
    alsoNote: "These are not websites. The price is for a similar standalone job.",
    contactKicker: "Next step",
    contactTitle: "Describe the job in one email",
    contactText:
      "What the product has to do, and whether it needs an account, payments, or a bot. I’ll say which format it matches and where the price starts.",
    from: "from",
  },
};

const state = {
  lang: localStorage.getItem("resume-lang") === "en" ? "en" : "ru",
  filter: "all",
};

const $ = (id) => document.getElementById(id);

function pad(n) {
  return String(n).padStart(2, "0");
}

function money(value) {
  const formatted = new Intl.NumberFormat(state.lang === "ru" ? "ru-RU" : "en-US").format(value);
  const unit = state.lang === "ru" ? "тг" : "KZT";
  return `${formatted}\u00a0${unit}`;
}

function applyCopy() {
  const t = copy[state.lang];
  document.documentElement.lang = t.html;
  document.title = t.title;
  $("skip").textContent = t.skip;
  $("nav").setAttribute("aria-label", t.navLabel);
  $("nav-work").textContent = t.navWork;
  $("nav-price").textContent = t.navPrice;
  $("nav-contact").textContent = t.navContact;
  $("nav-cta").textContent = t.navCta;
  $("eyebrow").textContent = t.eyebrow;
  $("title").setAttribute("aria-label", t.heading);
  $("title").dataset.html = t.headingHtml;
  const typeKey = t.typeText.join("\n");
  if ($("type-line").dataset.typed !== typeKey) {
    $("type-line").dataset.typed = typeKey;
    textType($("type-line"), {
      text: t.typeText,
      typingSpeed: 46,
      deletingSpeed: 28,
      pauseDuration: 1600,
      loop: true,
      cursorCharacter: "|",
      cursorBlinkDuration: 0.5,
    });
  }
  $("lede").textContent = t.lede;
  $("hero-mail").textContent = t.heroMail;
  $("hero-more").textContent = t.heroMore;
  renderStats();
  $("work-label").textContent = t.work;
  $("work-note").textContent = t.workNote;
  $("filters").setAttribute("aria-label", t.filtersLabel);
  $("price-label").textContent = t.price;
  $("price-note").textContent = t.priceNote;
  $("factors-title").textContent = t.factorsTitle;
  $("also-label").textContent = t.also;
  $("also-note").textContent = t.alsoNote;
  $("contact-kicker").textContent = t.contactKicker;
  $("contact-title").textContent = t.contactTitle;
  $("contact-text").textContent = t.contactText;

  $("filters").innerHTML = t.filters
    .map(
      ([id, label]) =>
        `<button type="button" data-filter="${id}" class="${id === state.filter ? "is-on" : ""}" aria-pressed="${id === state.filter}">${label}</button>`
    )
    .join("");

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const on = button.dataset.lang === state.lang;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-pressed", String(on));
  });

  $("factors").innerHTML = t.factors.map((item) => `<li>${item}</li>`).join("");
}

function renderStats() {
  const t = copy[state.lang];
  const made = projects.length + extras.length;
  const start = Math.min(...offers.map((item) => item.price));
  const live = projects.filter((item) => item.live).length;
  $("stats").innerHTML = `
    <li><strong data-count="${made}">${made}</strong><span>${t.statWork}</span></li>
    <li><strong data-count="${start}" data-money="1">${money(start)}</strong><span>${t.statStart}</span></li>
    <li><strong data-count="${live}">${live}</strong><span>${t.statLive}</span></li>
  `;
}

function quote(price, weeks) {
  const t = copy[state.lang];
  return `<p class="quote"><span>${t.from}</span><strong>${money(price)}</strong><span>${weeks}</span></p>`;
}

function tags(list) {
  return `<div class="tags">${list.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function renderList() {
  const t = copy[state.lang];
  $("list").innerHTML = projects
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => state.filter === "all" || item.filter === state.filter)
    .map(({ item, index }) => {
      const text = item[state.lang];
      const link = item.url
        ? `<a class="open" href="${item.url}" target="_blank" rel="noreferrer"><span class="dot" aria-hidden="true"></span>${t.open}</a>`
        : "";
      return `
        <article class="case spotlight">
          <div class="index">${pixelIcon(text.name, 4, -(index % 5) * 0.35)}<span>${pad(index + 1)}</span><span>${text.kind}</span></div>
          <div>
            <div class="case-head">
              <h3>${text.name}</h3>
              ${quote(item.price, text.weeks)}
            </div>
            <p class="story">${text.lead}</p>
            <div class="split">
              <div><h4>${t.task}</h4><p>${text.task}</p></div>
              <div><h4>${t.done}</h4><p>${text.done}</p></div>
            </div>
            <div class="case-foot">${tags(item.tags)}${link}</div>
          </div>
        </article>`;
    })
    .join("");
}

function renderPrices() {
  $("price-list").innerHTML = offers
    .map((item, index) => {
      const text = item[state.lang];
      return `
        <article class="price spotlight">
          ${pixelIcon(text.kind, 3, -(index % 4) * 0.4)}
          <p class="kind">${text.kind}</p>
          <strong data-count="${item.price}" data-money="1">${money(item.price)}</strong>
          <span class="time">${copy[state.lang].from} · ${text.weeks}</span>
          <p>${text.text}</p>
        </article>`;
    })
    .join("");
}

function renderExtras() {
  const t = copy[state.lang];
  $("also-list").innerHTML = extras
    .map((item, index) => {
      const text = item[state.lang];
      return `
        <article class="extra spotlight">
          <div class="index">${pixelIcon(text.name, 4, -(index % 3) * 0.45)}<span>${pad(index + 1)}</span></div>
          <div>
            <div class="extra-head">
              <h3>${text.name}</h3>
              ${quote(item.price, text.weeks)}
            </div>
            <p class="story">${text.lead}</p>
            <div class="split">
              <div><h4>${t.task}</h4><p>${text.task}</p></div>
              <div><h4>${t.done}</h4><p>${text.done}</p></div>
            </div>
            ${tags(item.tags)}
          </div>
        </article>`;
    })
    .join("");
}

function render() {
  applyCopy();
  renderList();
  renderPrices();
  renderExtras();
  if (typeof playMotion === "function") playMotion();
}

function jumpTo(target) {
  const top = target.getBoundingClientRect().top + window.scrollY - 76;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, Math.max(0, top));
  root.style.scrollBehavior = previous;
}

document.body.addEventListener("click", (event) => {
  const lang = event.target.closest("[data-lang]");
  if (lang) {
    if (lang.dataset.lang === state.lang) return;
    const next = lang.dataset.lang;
    const apply = () => {
      state.lang = next;
      localStorage.setItem("resume-lang", state.lang);
      render();
    };
    if (typeof pixelSwap === "function") pixelSwap(apply);
    else apply();
    return;
  }

  const jump = event.target.closest(".top a[href^='#'], .hero-actions a[href^='#']");
  if (jump) {
    const id = (jump.getAttribute("href") || "").slice(1);
    const target = id && document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    if (Math.abs(target.getBoundingClientRect().top - 76) < 8) return;
    const apply = () => {
      jumpTo(target);
      history.pushState(null, "", `#${id}`);
    };
    if (typeof pixelSwap === "function") pixelSwap(apply);
    else apply();
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (!filter) return;
  state.filter = filter.dataset.filter;
  render();
});

render();
