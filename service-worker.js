if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2ea25154.css",revision:"d6423641872043778ce2fcfe8771ef4b"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/34.b77aeaa7.js",revision:"f9d13c655f03e6cfdf40c3754d33e7b6"},{url:"assets/js/35.c9aa2167.js",revision:"7a18f1f14acaa942f0c816fb7e3ad0da"},{url:"assets/js/36.6c3a28d0.js",revision:"e4a20188e843ef925acb6e05e499d9e5"},{url:"assets/js/37.77100153.js",revision:"805242b209d7772172a333c54991330e"},{url:"assets/js/38.ada7095a.js",revision:"e52daa952778b737155cdc9f197de285"},{url:"assets/js/app.ba3df9d0.js",revision:"d484216e82e3ab377b067ff04182e557"},{url:"assets/js/layout-Blog.2fd43e47.js",revision:"019528033143c01e80338c9d421d4394"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.28290a87.js",revision:"026be21f29bd4d671c526a453979c422"},{url:"assets/js/layout-Layout.578414c8.js",revision:"8147e2d1eb1652cd04b555aed6a9ad47"},{url:"assets/js/layout-NotFound.f2e4d51b.js",revision:"7d9b75608692ed0d8010b94fa4f47d90"},{url:"assets/js/layout-Slide.2ee69a8c.js",revision:"2b1aa85c66dc3210784742250ee4ba87"},{url:"assets/js/page--049ad788.bb8bf753.js",revision:"c1bcdf8c5b2ec791f1a83d5956eaaad6"},{url:"assets/js/page--29b64a9c.d22bfbd9.js",revision:"9e1ee3f9e366fec668095bf35bb20dce"},{url:"assets/js/page--3c666cdc.9f3cec03.js",revision:"f43c52df5cd0d8ffbf0f715b0568fd5d"},{url:"assets/js/page--49a76f4f.e2c18c5c.js",revision:"116667387be1e17298b2ca945a58e67d"},{url:"assets/js/page--501cdf9c.5863235e.js",revision:"ebbef9be42a1b3731191843a6c68edbc"},{url:"assets/js/page-abckjdk.6399261d.js",revision:"614956ab1810a59e19f9f9753ef17655"},{url:"assets/js/page-AboutChoreo.cba3bbfd.js",revision:"1812484f3661a82bf88753b7ed33b74b"},{url:"assets/js/page-APIsConnectors.0f82b3e0.js",revision:"ced829ff216e2993e861fef9d407b481"},{url:"assets/js/page-ChoreoApplicationTriggers.cca41aa9.js",revision:"4d91c29e6bcaea6b8a7000d0440155e3"},{url:"assets/js/page-ChoreoObservability.18881520.js",revision:"117a487c85ef29ca2f59e5ae30514541"},{url:"assets/js/page-ChoreoStatements.1828399e.js",revision:"8766e79968b5b38fd2307c1e33dbe789"},{url:"assets/js/page-Config.43f9a2f6.js",revision:"4f3e21ee585ef21bc7b51e6cb951f3f8"},{url:"assets/js/page-Introduction.08d9901b.js",revision:"7c82c5d2a2e305a17371faf708c0eefe"},{url:"assets/js/page-Overview.c703ccbb.js",revision:"ab9fc0bcabd1b2897388b588a169add7"},{url:"assets/js/page-PerformanceAnalyzerHowitworks.246d884c.js",revision:"7bbac809f40562e377ef45d56a199aad"},{url:"assets/js/page-QuickStartGuide.97496ef3.js",revision:"8c33893c4071b32b0858c29b25d4c186"},{url:"assets/js/page-RelativePathFromHost.e960ccca.js",revision:"29528df87fee3fef2c3172d9625213b1"},{url:"assets/js/page-Test1.e0fc8b24.js",revision:"c04bbbd2192f6cff5cfeeebb359317e3"},{url:"assets/js/page-TEST1Contentdummy.2b660881.js",revision:"96432711c8868ef8f8d3e4b5a794a4d8"},{url:"assets/js/page-Tutorials.b667b076.js",revision:"f591c0b8a01217516826d17b204611be"},{url:"assets/js/page-UsingtheExpressionEditor.3ed867e2.js",revision:"15e3f4b5e35531faa3f6b8159006b024"},{url:"assets/js/page-UsingVueinMarkdown-abc.d110859d.js",revision:"7223acf507ff1b0c391c271430b51deb"},{url:"assets/js/vendors~flowchart.b539a7fd.js",revision:"d194ff40150b4fae70280de3911406d5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.3942e587.js",revision:"76e84b3017d6f05476afcf10f4776b8a"},{url:"assets/js/vendors~layout-Layout.ca32ef13.js",revision:"194769c55e96baa9e93cd112cf2a920c"},{url:"assets/js/vendors~photo-swipe.cbf16f25.js",revision:"2b21892ae24e085491469e8ed3c181fb"},{url:"assets/js/vendors~reveal.d587babf.js",revision:"9f095bf3ef349e9d235ce0a06f5527d5"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"5cc456c82e03ab2d16037c43317af240"},{url:"article/index.html",revision:"319f78746c488cd72431deeea099d6b6"},{url:"category/index.html",revision:"5972daa51134390bae4cd6c083fc5394"},{url:"community/community/index.html",revision:"58504d60fd2370908c04da9cbecae5c7"},{url:"concepts/concept/index.html",revision:"a320356f93bdf69dbe0443017f53303b"},{url:"concepts/develop/connector/index.html",revision:"00ff062a462fe4ec76f256ca6eb48f9c"},{url:"concepts/develop/expression-editor/index.html",revision:"9007c018e7bb575f84d84a2c8de2d440"},{url:"concepts/develop/path/index.html",revision:"5bb314bce5492ab0307d88b6009c1746"},{url:"concepts/develop/statements/index.html",revision:"ccd4d818255661dc815c9b2129fc67ae"},{url:"concepts/develop/trigger/index.html",revision:"9c814eed81a20d3dede88b6154afef1b"},{url:"concepts/observe/observability/index.html",revision:"133cfc8b1acc0876718a2c27dbef3515"},{url:"config/index.html",revision:"e3485fbe3e2fb1dac366da3d5c4e5940"},{url:"encrypt/index.html",revision:"a17506ccc19001cedbd9b16e00c71259"},{url:"getting-started/introduction-to-choreo/index.html",revision:"a39420691c7a97d6e890d6eb5457243e"},{url:"getting-started/overview/index.html",revision:"5a8db9766d376deae48b7c80903f5c06"},{url:"getting-started/quick-start-guide/index.html",revision:"20247e32b9f232982da9e09bedf778b2"},{url:"gettingstarted/quickstartguide/index.html",revision:"ff9bd2e5d0dc6471248c8ec1563b4f4a"},{url:"gettingstarted/quickstartguide/test1/index.html",revision:"6bd3a118d52f34a27e37c58953c431c1"},{url:"gettingstarted/quickstartguide/test1/test1content/index.html",revision:"d40a5d2c619e70a57fc881a32a662a71"},{url:"guide/index.html",revision:"2fedc976531114c8b3890acbe5161398"},{url:"guide/using-vue/index.html",revision:"dbc895d5031cc6020a0dedc9c7977aed"},{url:"home/home/index.html",revision:"d1630ab485d29b5bad0a654346a9d29b"},{url:"home/index.html",revision:"dfb25e3453b4512b5cb9485fd009089b"},{url:"index.html",revision:"a61308f3cc7e87f11b51b26550cb8ebf"},{url:"references/references/index.html",revision:"e6df33465ed9ebc56b52b761e5e117d4"},{url:"slide/index.html",revision:"23b445ce72fac84837a27e0b51bb752f"},{url:"tag/index.html",revision:"6071c338e63118808478475d0199d3d0"},{url:"timeline/index.html",revision:"fc6648be67cea45cc5af9db61d1735eb"},{url:"tutorials/create-a-REST-api/index.html",revision:"bdf390caaf63f79625b71c0434af1498"},{url:"tutorials/index.html",revision:"ddc051bba636a2df95ed02f0d09763bc"},{url:"videos/videos/index.html",revision:"5a9d341a5f24c4418eb8e9033b41e883"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
