export type CompletedProject = {
  status: string;
  statusColor: string;
  title: string;
  description: string;
  task: string;
  result: string;
  stack: string[];
  link: string;
  linkLabel: string;
};

export type InProgressProject = {
  status: string;
  statusClass: string;
  title: string;
  description: string;
  task: string;
  stack: string[];
  link: string;
  linkLabel: string;
};

export const completed: CompletedProject[] = [
  {
    status: "Запущен",
    statusColor: "text-emerald-400",
    title: "Транскрибатор SellersHelp — клиентский Telegram-бот",
    description:
      "Telegram-бот для транскрибации аудио и видео с таймкодами и структурированным конспектом. Начинался как внутренний инструмент команды — вырос в отдельный клиентский продукт. Поддерживает YouTube, youtube.ru, VK Видео, Дзен, RuTube, Instagram, TikTok, Яндекс Диск и файлы до 2 ГБ.",
    task: "Дать клиентам и подписчикам SellersHelp инструмент для быстрого разбора встреч, звонков и обучающих видео",
    result: "Запущен как отдельный клиентский продукт: транскрипция с семантическими таймкодами, конспект, записи 2.5+ часов",
    stack: ["Python", "Whisper API", "GPT-4o-mini", "Claude Haiku", "yt-dlp", "ffmpeg", "SQLite", "Vultr VPS"],
    link: "https://t.me/sellershelp_voice_bot",
    linkLabel: "@sellershelp_voice_bot",
  },
  {
    status: "Тестирование",
    statusColor: "text-cyan",
    title: "Бот управления репутацией на маркетплейсах",
    description:
      "Telegram-бот для управления репутацией магазинов на Wildberries и Ozon. Двухэтапный AI-пайплайн: стратег анализирует эмоцию покупателя и суть проблемы → писатель формирует персональный ответ с учётом бренда и базы знаний о товаре. Мультимагазинный режим, несколько менеджеров на магазин, алерты при падении рейтинга, Excel-аналитика по трендам отзывов.",
    task: "Убрать рутину ежедневных ответов на отзывы без потери качества и персонального стиля магазина",
    result: "WB и Ozon: двухэтапный AI на Claude (стратег + писатель), мультимагазинный режим, брендовые подписи, алерты рейтинга ≤2★, Excel-аналитика",
    stack: ["Python", "Claude API", "aiogram", "WB API", "Ozon API", "Supabase", "Vultr VPS"],
    link: "https://t.me/sellershelp_reviews_bot",
    linkLabel: "@sellershelp_reviews_bot",
  },
  {
    status: "Запущен",
    statusColor: "text-emerald-400",
    title: "Генератор договоров — MAX-бот для SellersHelp",
    description:
      "Внутренний бот в мессенджере MAX для автоматической генерации договоров на оказание услуг. Менеджер вводит ИНН — бот сам запрашивает реквизиты через DaData, проводит 16-шаговый диалог и отправляет готовый DOCX за 1 минуту вместо 10+. В планах: генерация счетов и актов для действующих клиентов.",
    task: "Убрать рутину ручного заполнения договоров при каждом новом клиенте — исключить опечатки в реквизитах и сократить время оформления",
    result: "Запущен для внутреннего использования командой SellersHelp. ИНН → реквизиты через DaData + диалог по тарифу и условиям → готовый DOCX за 1 минуту вместо 10+",
    stack: ["Python", "MAX Bot API", "DaData API", "python-docx", "aiogram FSM"],
    link: "",
    linkLabel: "",
  },
  {
    status: "Запущен",
    statusColor: "text-emerald-400",
    title: "Сайт агентства SellersHelp",
    description:
      "Корпоративный сайт для агентства по продвижению на маркетплейсах Wildberries и Ozon. Полный цикл: дизайн, разработка, деплой.",
    task: "Создать продающий сайт для агентства с 1000+ клиентами",
    result: "Запущен, обслуживает действующих и новых клиентов агентства",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Timeweb"],
    link: "https://sellershelp.ru",
    linkLabel: "sellershelp.ru",
  },
];

export const inProgress: InProgressProject[] = [
  {
    status: "В разработке",
    statusClass: "text-accent-light",
    title: "Цифровая экосистема для маркетплейсов",
    description:
      "Комплекс SaaS-инструментов для продавцов WB и Ozon: юнит-калькулятор, квиз-диагностика, бот управления отзывами. Каждый продукт генерирует лиды для остальных. Экосистема включает Тегатор — командный бот для упоминаний участников в Telegram-группе.",
    task: "Сделать цифровые продукты основным источником дохода бизнеса",
    stack: ["Next.js", "TypeScript", "Supabase", "AI", "Python"],
    link: "https://sellershelpai.ru",
    linkLabel: "sellershelpai.ru",
  },
];

export const totalProductCount = completed.length + inProgress.length;
