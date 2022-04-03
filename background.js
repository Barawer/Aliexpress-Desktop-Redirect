const AliexpressDesktop = "https://www.aliexpress.com";


chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    if (url.hostname === "www.aliexpress.com") return;
    
    return { redirectUrl: AliexpressDesktop + url.pathname + url.search + url.hash };
  },
  {
    urls: [
      "*://aliexpress.com/*",
      "*://www.aliexpress.com/*",
      "*://m.aliexpress.com/*"
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
