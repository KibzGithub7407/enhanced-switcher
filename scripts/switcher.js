const query = new URLSearchParams(window.location.search).get('q') || prompt("Enter your search term:");
const encoded = encodeURIComponent(query);

const categories = [
  {
    title: "AI Tools",
    engines: [
      { name: "💬 ChatGPT", url: `https://chat.openai.com/?q=${encoded}`, desc: "OpenAI's conversational AI" },
      { name: "🤖 Perplexity", url: `https://www.perplexity.ai/search?q=${encoded}`, desc: "AI-powered search assistant" },
      { name: "🌐 Bing AI", url: `https://www.bing.com/search?q=${encoded}`, desc: "Microsoft Bing AI" },
      { name: "🧠 Claude", url: `https://claude.ai/chat?q=${encoded}`, desc: "Anthropic's AI assistant" },
      { name: "🔮 Gemini", url: `https://gemini.google.com/app?q=${encoded}`, desc: "Google's AI chatbot" }
    ]
  },
  {
    title: "Meta Search Engines",
    engines: [
      { name: "🐶 Dogpile", url: `https://www.dogpile.com/serp?q=${encoded}`, desc: "Meta searcher: Bing + Google results" },
      { name: "🔎 Searx", url: `https://searx.org/search?q=${encoded}`, desc: "Open source private metasearch" },
      { name: "⚡ Metager", url: `https://metager.org/meta/meta.ger3?eingabe=${encoded}`, desc: "German privacy meta search" },
      { name: "🛠️ eTools", url: `https://www.etools.ch/search?q=${encoded}`, desc: "Swiss meta search" }
    ]
  },
  {
    title: "General-Purpose Search Engines",
    engines: [
      { name: "🔎 Google", url: `https://www.google.com/search?q=${encoded}`, desc: "World's most popular search engine" },
      { name: "🌐 Bing", url: `https://www.bing.com/search?q=${encoded}`, desc: "Microsoft search engine" },
      { name: "🟣 Yahoo!", url: `https://search.yahoo.com/search?p=${encoded}`, desc: "Legacy search by Yahoo" },
      { name: "🟠 Yandex", url: `https://yandex.com/search/?text=${encoded}`, desc: "Russian search engine" },
      { name: "🔵 Baidu", url: `https://www.baidu.com/s?wd=${encoded}`, desc: "Chinese search engine" },
      { name: "🦆 DuckDuckGo", url: `https://duckduckgo.com/?q=${encoded}`, desc: "Privacy-focused search engine" },
      { name: "🌱 Ecosia", url: `https://www.ecosia.org/search?q=${encoded}`, desc: "Eco-friendly search engine" },
      { name: "🟢 AOL Search", url: `https://search.aol.com/aol/search?q=${encoded}`, desc: "Legacy AOL search" },
      { name: "❓ Ask.com", url: `https://www.ask.com/web?q=${encoded}`, desc: "Q&A search engine" },
      { name: "🇰🇷 Naver", url: `https://search.naver.com/search.naver?query=${encoded}`, desc: "Top Korean search engine" }
    ]
  },
  {
    title: "Privacy-Focused Search Engines",
    engines: [
      { name: "🦆 DuckDuckGo", url: `https://duckduckgo.com/?q=${encoded}`, desc: "No tracking, no profiling" },
      { name: "🛡️ Startpage", url: `https://www.startpage.com/sp/search?query=${encoded}`, desc: "Google results, privacy protected" },
      { name: "🔒 Qwant", url: `https://www.qwant.com/?q=${encoded}`, desc: "European privacy search" },
      { name: "🦁 Brave Search", url: `https://search.brave.com/search?q=${encoded}`, desc: "Private, independent index" },
      { name: "🌲 Mojeek", url: `https://www.mojeek.com/search?q=${encoded}`, desc: "Own index, privacy focused" }
    ]
  },
  {
    title: "Specialized Search Engines",
    engines: [
      { name: "📚 Google Scholar", url: `https://scholar.google.com/scholar?q=${encoded}`, desc: "Academic papers" },
      { name: "🖼️ Google Images", url: `https://www.google.com/search?tbm=isch&q=${encoded}`, desc: "Images only" },
      { name: "🎬 YouTube", url: `https://www.youtube.com/results?search_query=${encoded}`, desc: "Video search" },
      { name: "📰 Google News", url: `https://news.google.com/search?q=${encoded}`, desc: "News search" },
      { name: "💻 GitHub Code", url: `https://github.com/search?q=${encoded}`, desc: "Code search" },
      { name: "🛒 Amazon", url: `https://www.amazon.com/s?k=${encoded}`, desc: "Shopping search" },
      { name: "👥 Facebook", url: `https://www.facebook.com/search/top/?q=${encoded}`, desc: "Social search" }
    ]
  }
];

const container = document.getElementById("switcher-panel");
categories.forEach(cat => {
  const section = document.createElement("div");
  section.className = "category-section";
  const heading = document.createElement("h2");
  heading.textContent = cat.title;
  section.appendChild(heading);

  cat.engines.forEach(engine => {
    const btn = document.createElement("a");
    btn.href = engine.url;
    btn.textContent = engine.name;
    btn.className = "engine-button";
    btn.target = "_blank";
    btn.title = engine.desc || "";
    section.appendChild(btn);
  });

  container.appendChild(section);
});
