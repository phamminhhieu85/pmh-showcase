if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let d={};const n=e=>i(e,c),o={module:{uri:c},exports:d,require:n};a[c]=Promise.all(s.map((e=>o[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LsG2kwLEOoUrOCzQxKbZI/_buildManifest.js",revision:"b765b45f5415bf1c8845b60746012561"},{url:"/_next/static/LsG2kwLEOoUrOCzQxKbZI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1116.16743cf66dde57bc.js",revision:"16743cf66dde57bc"},{url:"/_next/static/chunks/1178.26ca0e793fae6bb2.js",revision:"26ca0e793fae6bb2"},{url:"/_next/static/chunks/1200.87e5b1c84d0179d2.js",revision:"87e5b1c84d0179d2"},{url:"/_next/static/chunks/1286.b509d8ae7a866b76.js",revision:"b509d8ae7a866b76"},{url:"/_next/static/chunks/1424.8866ca8f0ddb0233.js",revision:"8866ca8f0ddb0233"},{url:"/_next/static/chunks/154.a3742faff3299eb7.js",revision:"a3742faff3299eb7"},{url:"/_next/static/chunks/1978.c0040c28d966f6bc.js",revision:"c0040c28d966f6bc"},{url:"/_next/static/chunks/1d4fd333.bc374613f77363c4.js",revision:"bc374613f77363c4"},{url:"/_next/static/chunks/2211.1c848ca769590270.js",revision:"1c848ca769590270"},{url:"/_next/static/chunks/2240.95ac80c175232660.js",revision:"95ac80c175232660"},{url:"/_next/static/chunks/2284.b66b4e4c7d947fe0.js",revision:"b66b4e4c7d947fe0"},{url:"/_next/static/chunks/2641.019a380df364bbdf.js",revision:"019a380df364bbdf"},{url:"/_next/static/chunks/291.2181dc45c3b1d05e.js",revision:"2181dc45c3b1d05e"},{url:"/_next/static/chunks/3045677e-eca344ed7fd53d5c.js",revision:"eca344ed7fd53d5c"},{url:"/_next/static/chunks/3302.8ee9fb3b852f6ecd.js",revision:"8ee9fb3b852f6ecd"},{url:"/_next/static/chunks/334.300e1729ea414286.js",revision:"300e1729ea414286"},{url:"/_next/static/chunks/3574.4a7434df529b2ccd.js",revision:"4a7434df529b2ccd"},{url:"/_next/static/chunks/36105f4d.3f3e616f5475bf79.js",revision:"3f3e616f5475bf79"},{url:"/_next/static/chunks/369.d494020d77513f0b.js",revision:"d494020d77513f0b"},{url:"/_next/static/chunks/3823.1112f3de1d537715.js",revision:"1112f3de1d537715"},{url:"/_next/static/chunks/4179.75f2752cc49f6ded.js",revision:"75f2752cc49f6ded"},{url:"/_next/static/chunks/4371.269bd55c60000975.js",revision:"269bd55c60000975"},{url:"/_next/static/chunks/4511.bf701a95c86e66dc.js",revision:"bf701a95c86e66dc"},{url:"/_next/static/chunks/4526.ce0956b5e8969b0d.js",revision:"ce0956b5e8969b0d"},{url:"/_next/static/chunks/4764-80050edd58137a16.js",revision:"80050edd58137a16"},{url:"/_next/static/chunks/4911.f46d55f7a759aa8b.js",revision:"f46d55f7a759aa8b"},{url:"/_next/static/chunks/5204.d48ec4c806512554.js",revision:"d48ec4c806512554"},{url:"/_next/static/chunks/6677.b070681f0d7596f1.js",revision:"b070681f0d7596f1"},{url:"/_next/static/chunks/6769.2d1f9615b86223d3.js",revision:"2d1f9615b86223d3"},{url:"/_next/static/chunks/6818.752f35de9198a2e2.js",revision:"752f35de9198a2e2"},{url:"/_next/static/chunks/6975.a49de0886db6fdac.js",revision:"a49de0886db6fdac"},{url:"/_next/static/chunks/7381.b45c7b87d26c6d19.js",revision:"b45c7b87d26c6d19"},{url:"/_next/static/chunks/7504.d0512ed51b7d1abc.js",revision:"d0512ed51b7d1abc"},{url:"/_next/static/chunks/7578.53383b31e6c81b93.js",revision:"53383b31e6c81b93"},{url:"/_next/static/chunks/7783.7ae9309a4821fab2.js",revision:"7ae9309a4821fab2"},{url:"/_next/static/chunks/8161.9ad1118a7554e0dd.js",revision:"9ad1118a7554e0dd"},{url:"/_next/static/chunks/9302ba77.58e2a99ae14b0d1d.js",revision:"58e2a99ae14b0d1d"},{url:"/_next/static/chunks/9445.a536ac1b4c775591.js",revision:"a536ac1b4c775591"},{url:"/_next/static/chunks/9447.b0b37b9764640f3d.js",revision:"b0b37b9764640f3d"},{url:"/_next/static/chunks/9462.a7520be1b1948e52.js",revision:"a7520be1b1948e52"},{url:"/_next/static/chunks/9843.f68aa682f683a394.js",revision:"f68aa682f683a394"},{url:"/_next/static/chunks/framework-0a897eab13466586.js",revision:"0a897eab13466586"},{url:"/_next/static/chunks/main-ce9254b931869f59.js",revision:"ce9254b931869f59"},{url:"/_next/static/chunks/pages/_app-7da36fb55585d57a.js",revision:"7da36fb55585d57a"},{url:"/_next/static/chunks/pages/_error-c786668758a716e0.js",revision:"c786668758a716e0"},{url:"/_next/static/chunks/pages/ballpit-6fbe1a89d2a32055.js",revision:"6fbe1a89d2a32055"},{url:"/_next/static/chunks/pages/bouncy-watch-b4c765853a092309.js",revision:"b4c765853a092309"},{url:"/_next/static/chunks/pages/bruno-simon-folio-f47897ab5ebec4c6.js",revision:"f47897ab5ebec4c6"},{url:"/_next/static/chunks/pages/draggable-3253ca0e8706c2ea.js",revision:"3253ca0e8706c2ea"},{url:"/_next/static/chunks/pages/hi-key-bubbles-c0b93bf095217f6b.js",revision:"c0b93bf095217f6b"},{url:"/_next/static/chunks/pages/horizontal-tiles-2e4997b24a0db24c.js",revision:"2e4997b24a0db24c"},{url:"/_next/static/chunks/pages/image-gallery-0e6b762bab927c2d.js",revision:"0e6b762bab927c2d"},{url:"/_next/static/chunks/pages/index-76faee9d0eae33c1.js",revision:"76faee9d0eae33c1"},{url:"/_next/static/chunks/pages/infinite-scroll-d2320780fe45111c.js",revision:"d2320780fe45111c"},{url:"/_next/static/chunks/pages/instanced-vertex-color-04d7b1fd946a3f0e.js",revision:"04d7b1fd946a3f0e"},{url:"/_next/static/chunks/pages/particles-transition-64023f0b9b98e762.js",revision:"64023f0b9b98e762"},{url:"/_next/static/chunks/pages/portal-de227f6f280b3b86.js",revision:"de227f6f280b3b86"},{url:"/_next/static/chunks/pages/raycast-cycling-stair-6b4e33caf54fab07.js",revision:"6b4e33caf54fab07"},{url:"/_next/static/chunks/pages/reflectorplanes-bdb064459567948e.js",revision:"bdb064459567948e"},{url:"/_next/static/chunks/pages/scroll-gltf-faa2ec1e79d32840.js",revision:"faa2ec1e79d32840"},{url:"/_next/static/chunks/pages/scrollcontrols-minimap-8ffdce3524eba98d.js",revision:"8ffdce3524eba98d"},{url:"/_next/static/chunks/pages/shader-images-dcb8075f97dca256.js",revision:"dcb8075f97dca256"},{url:"/_next/static/chunks/pages/shader-pattern-7abd1fca19bd807e.js",revision:"7abd1fca19bd807e"},{url:"/_next/static/chunks/pages/simple-audio-analyser-2a94c617e26765f7.js",revision:"2a94c617e26765f7"},{url:"/_next/static/chunks/pages/spherical-word-ed54d2ea8aff7971.js",revision:"ed54d2ea8aff7971"},{url:"/_next/static/chunks/pages/test-grid-822e7e2c3c2634c7.js",revision:"822e7e2c3c2634c7"},{url:"/_next/static/chunks/pages/video-particle-98a92ad13930d681.js",revision:"98a92ad13930d681"},{url:"/_next/static/chunks/pages/water-shader-276e8921857d1ec9.js",revision:"276e8921857d1ec9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cc0715e73c76fc3a.js",revision:"cc0715e73c76fc3a"},{url:"/_next/static/css/d8d823e4e4472a4c.css",revision:"d8d823e4e4472a4c"},{url:"/favicon.ico",revision:"0809538b59d857dc43ccc216d342c3a4"},{url:"/images/audio-analyser/SurfaceImperfections003_1K_Normal.jpg",revision:"5191db71ce27c6a97b2a5bed0cdaf3d5"},{url:"/images/audio-analyser/SurfaceImperfections003_1K_var1.jpg",revision:"ac493c1f2a4bbdb5010ae09814c3c9ff"},{url:"/images/audio-analyser/bust.glb",revision:"1042c1228a19ce069a981e06ad5c327a"},{url:"/images/audio-analyser/drums.mp3",revision:"3fbc712f171c1b0779fad1c4b6791c96"},{url:"/images/audio-analyser/explosion.glb",revision:"82387ec2555fe4449b02f6c69accabec"},{url:"/images/audio-analyser/snare.mp3",revision:"601d133abc714f0f6559bd1a2cefdbbc"},{url:"/images/audio-analyser/synth.mp3",revision:"4e62dee62f88dd0f1c2f9864616d9077"},{url:"/images/bouncy-watch/watch-v1.glb",revision:"e8b9e8d6ca08dc2e7cc38204046f478e"},{url:"/images/draggable/1.jpg",revision:"212c2e17bfd394fc206aba69b6763250"},{url:"/images/draggable/10.jpg",revision:"0e2908d4be548e81fa8227813af257ad"},{url:"/images/draggable/11.jpg",revision:"8df1eb987b9ff954c194df8b0ee1ca47"},{url:"/images/draggable/12.jpg",revision:"ecc7abc73c47b4a97724a8b37bba2f50"},{url:"/images/draggable/13.jpg",revision:"4bd1caaf84a0f0af7f5b18fc8ad7dc33"},{url:"/images/draggable/14.jpg",revision:"5a2dcde9d14bab6043f34cd34a3c54f1"},{url:"/images/draggable/15.jpg",revision:"107373d0af873c867f4e3a6261894f06"},{url:"/images/draggable/16.jpg",revision:"9c0f9401cb61877a0a9e23f09edc9e45"},{url:"/images/draggable/17.jpg",revision:"4bd1c50e6bfa3f8c46b8cf03f018e691"},{url:"/images/draggable/18.jpg",revision:"8303d00657ca79132a104dd781238327"},{url:"/images/draggable/2.jpg",revision:"d8a125a4cd96ec13b58a1bba5a5c550f"},{url:"/images/draggable/3.jpg",revision:"8b4c91f3c07deb564a55464e15c8f607"},{url:"/images/draggable/4.jpg",revision:"66c68d62a13fa31fa1bb0a01a6b52948"},{url:"/images/draggable/5.jpg",revision:"2385e7251be2d84d2060b186efc04009"},{url:"/images/draggable/6.jpg",revision:"4ec5642f53a3ab2f84380a7c40610301"},{url:"/images/draggable/7.jpg",revision:"59c288fca31b33566b3e35fb7991e8b8"},{url:"/images/draggable/8.jpg",revision:"42f6090ae43005206ec1f497a4d4970a"},{url:"/images/draggable/9.jpg",revision:"6d849727e2845289996180bc8b356c4a"},{url:"/images/furniture/1.jpg",revision:"40db9372166fb04eea11275c4cc14ed6"},{url:"/images/furniture/10.jpg",revision:"76be5bf18e8b24f89d94b851b66f6da7"},{url:"/images/furniture/11.jpg",revision:"5b15c6a1c044c3de0e499423ddf7bf4b"},{url:"/images/furniture/12.jpg",revision:"b644fe4d193bddab7b2c69ffc7604340"},{url:"/images/furniture/2.jpg",revision:"68c55c3ede2750aa285a455095cfee4e"},{url:"/images/furniture/3.jpg",revision:"bb06039822c6aa7007ed076e0d20e613"},{url:"/images/furniture/4.jpg",revision:"bc4a4b9b0b9f4eb35e5562b9d89672c4"},{url:"/images/furniture/5.jpg",revision:"6641b6ef18093085f94ef52e3262ca12"},{url:"/images/furniture/6.jpg",revision:"04112c0f0a528aa7b80e3434801a6cf1"},{url:"/images/furniture/7.jpg",revision:"1fa4e0a3a1949c45e2b8ed99c833deec"},{url:"/images/furniture/8.jpg",revision:"7f95d3f58c7b057f30673f5fee6182b5"},{url:"/images/furniture/9.jpg",revision:"942bc3f97842beb2f35b71f6fff036e9"},{url:"/images/my-love/1.jpeg",revision:"301a195e3f79413947f4e458030f2516"},{url:"/images/my-love/10.jpeg",revision:"47d24bd6c5d98807fd2814e014037a95"},{url:"/images/my-love/11.jpeg",revision:"d7c3dc8ee68ed0d15d4917b264969aec"},{url:"/images/my-love/12.jpeg",revision:"966726d5d7a5971a450d542d82c4672a"},{url:"/images/my-love/13.jpeg",revision:"cc4bb2a90d4070d190b0714fb1a81bbc"},{url:"/images/my-love/14.jpeg",revision:"b3ab6eed2053bd478e77510647651526"},{url:"/images/my-love/15.jpeg",revision:"3e8811086be43a6fd46e73ae52a868e4"},{url:"/images/my-love/16.jpeg",revision:"49d92b29951705c9a6c4e1913761f685"},{url:"/images/my-love/17.jpeg",revision:"ed0891356b7a10d9b398663f23b680c1"},{url:"/images/my-love/18.jpeg",revision:"9ac4b71a05ef0c132c105ccceb4c50e4"},{url:"/images/my-love/19.jpeg",revision:"318ee506c56ba25264b37cdbad3f48de"},{url:"/images/my-love/2.jpeg",revision:"04ef98d51b6856b95164054b1a6714b9"},{url:"/images/my-love/20.jpeg",revision:"9c4dc1207ef77138cb2c22ca94161d6a"},{url:"/images/my-love/21.jpeg",revision:"453758f4f8bcc67bd15923b378195a32"},{url:"/images/my-love/3.jpeg",revision:"8a44a38c3bcb00ed40e75914752c92d8"},{url:"/images/my-love/4.jpeg",revision:"65aabe3be7c6e42933210f39ba1c1a9d"},{url:"/images/my-love/5.jpeg",revision:"96777024a002dd8f04b025b46e39ad9d"},{url:"/images/my-love/6.jpeg",revision:"b1225d33fa59d7d1896db8c0c7509f07"},{url:"/images/my-love/7.jpeg",revision:"ed6e79f67afb24775c10cac8eb0efd4d"},{url:"/images/my-love/8.jpeg",revision:"0c2194094d4cd5020be8e8b2264e2825"},{url:"/images/my-love/9.jpeg",revision:"c9a93fdd7c43554f4201977b4bcf09a0"},{url:"/images/particles-transition/mask.png",revision:"1b62f8e49a0d1f2fd9ab969c6f697572"},{url:"/images/particles-transition/t.png",revision:"f1f11044ed3ec07673fa3d415ab42a5b"},{url:"/images/particles-transition/t1.png",revision:"61535904ef5c24421cd05506fba73522"},{url:"/images/portal/baked-02.jpeg",revision:"7e2c1e6eb9e97b7bd6a2e568b7afd493"},{url:"/images/portal/portal-2.glb",revision:"fb2b103ae9108a95967e57376287e2b9"},{url:"/images/reflectorplanes/SurfaceImperfections003_1K_Normal.jpg",revision:"5191db71ce27c6a97b2a5bed0cdaf3d5"},{url:"/images/reflectorplanes/SurfaceImperfections003_1K_var1.jpg",revision:"ac493c1f2a4bbdb5010ae09814c3c9ff"},{url:"/images/reflectorplanes/triangle.svg",revision:"f7be964ffd09d338af12bbfe3ff9d930"},{url:"/images/scroll-gltf/LittlestTokyo-transformed.glb",revision:"c6976b712881388e5cb662d62c972f09"},{url:"/images/shader-images/displacement.jpeg",revision:"ac0814dc8c64b0a865ac8e776596296e"},{url:"/images/shader-pattern/1.png",revision:"65c9fbc6822825d45ce4843d34cbe4d4"},{url:"/images/shader-pattern/10.png",revision:"b5edb63ff227b9f671ff3c923f5e781e"},{url:"/images/shader-pattern/11.png",revision:"5ad68a98d99f33b274c4da7f8b841bed"},{url:"/images/shader-pattern/12.png",revision:"e51bad77d8563bdb6451c82bb377da3f"},{url:"/images/shader-pattern/13.png",revision:"727d4acaef511e8ffa011da3b77a20cd"},{url:"/images/shader-pattern/14.png",revision:"ff6f39dd262ddf049df98d2e6a478b9e"},{url:"/images/shader-pattern/15.png",revision:"b30bb5a60913f626ac41c69d0678a50b"},{url:"/images/shader-pattern/16.png",revision:"260664cefc29ef9500c0a2e44fe31d39"},{url:"/images/shader-pattern/17.png",revision:"2ecc2d771496b26b00317080a3b7bc37"},{url:"/images/shader-pattern/18.png",revision:"72aff54629e561cf5c5cb123dd500987"},{url:"/images/shader-pattern/19.png",revision:"fa33f88a5b991293b94b3ec13dc7c74f"},{url:"/images/shader-pattern/2.png",revision:"17dcd028b01189517b2377218cae8a26"},{url:"/images/shader-pattern/20.png",revision:"44d70b1da7463a868fc78c9863fb586e"},{url:"/images/shader-pattern/21.png",revision:"6410daed36125f3c8ccec412b6d8e3ba"},{url:"/images/shader-pattern/22.png",revision:"a5a115573599f435d25841f3f556e2b9"},{url:"/images/shader-pattern/23.png",revision:"3c9ef3cf2ba86f2a97f22940f5c94c53"},{url:"/images/shader-pattern/24.png",revision:"969eeedf996dbda2ec48eaa1a0579fd1"},{url:"/images/shader-pattern/25.png",revision:"dd81cc69b7f91e252a3b7cda61c5d3ac"},{url:"/images/shader-pattern/26.png",revision:"ddf8a8b3973f6de430b2808252b6e0af"},{url:"/images/shader-pattern/27.png",revision:"7e3d3d6afb16d66854b489a9b922c99f"},{url:"/images/shader-pattern/28.png",revision:"67dd3e5b8ccf762c41dfde659d60f17d"},{url:"/images/shader-pattern/29.png",revision:"4deebdba2a98545f39d8aa2b9c492b4c"},{url:"/images/shader-pattern/3.png",revision:"69b7ee6e9a92ec917d822792ed9b4525"},{url:"/images/shader-pattern/30.png",revision:"4e0eadf433de806c61833dd649016422"},{url:"/images/shader-pattern/31.png",revision:"82b52477b3bd195c8a63a1c713af086b"},{url:"/images/shader-pattern/32.png",revision:"a3f10f1beea46b030888796996845c25"},{url:"/images/shader-pattern/33.png",revision:"110fe6708e30c1cfbbebb2bf67fb559c"},{url:"/images/shader-pattern/34.png",revision:"a558b9b1bc905cd2e749737556cf2737"},{url:"/images/shader-pattern/35.png",revision:"541b91c8fa5f199cc5da78fb0c71aafc"},{url:"/images/shader-pattern/36.png",revision:"97d9deb26c624816bdc3eb5bb628c299"},{url:"/images/shader-pattern/37.png",revision:"c3672f5faf8adffc0a62602e9a868821"},{url:"/images/shader-pattern/38.png",revision:"2812ac7d47e0509c63c1af30b0769527"},{url:"/images/shader-pattern/39.png",revision:"efbcc6b69153f2d23d810e2e85786472"},{url:"/images/shader-pattern/4.png",revision:"72cbc161dfa8c26d3d3f9bf5b69f609e"},{url:"/images/shader-pattern/40.png",revision:"710d7fd7b82c4411659a4d836a6a3ff9"},{url:"/images/shader-pattern/41.png",revision:"c5ec04a0fcb8d5992515a4b0ff266b61"},{url:"/images/shader-pattern/42.png",revision:"5a059b885a38cc6e3a6dd37178852120"},{url:"/images/shader-pattern/43.png",revision:"bc6c067b4efa47e12beb66f26545ce6e"},{url:"/images/shader-pattern/44.png",revision:"30bbf10d4e66f85057cc201f45827c3b"},{url:"/images/shader-pattern/45.png",revision:"8f0300a151fdaa46b765cda51f268919"},{url:"/images/shader-pattern/46.png",revision:"515b1bf024f7817b1325f8369d4f4164"},{url:"/images/shader-pattern/47.png",revision:"dea0f4559790f80cc078547117dc3c01"},{url:"/images/shader-pattern/48.png",revision:"9bc4828a42db04f614679018cc5868af"},{url:"/images/shader-pattern/49.png",revision:"d64e98bb24549b629284b8c94a57e16c"},{url:"/images/shader-pattern/5.png",revision:"2270c5f7452ac75d29d1160c1f6103dd"},{url:"/images/shader-pattern/50.png",revision:"9c28fa98c70817f9565335bab236c584"},{url:"/images/shader-pattern/6.png",revision:"e093d30163ea4ee657f9fc4252a5423a"},{url:"/images/shader-pattern/7.png",revision:"117af2e6bca79c7173bf3a3f600a9d72"},{url:"/images/shader-pattern/8.png",revision:"9964dcfc72162a81c6cef9dd0c3ec662"},{url:"/images/shader-pattern/9.png",revision:"0e70c417c9d040a27b1d56cb788d95f0"},{url:"/images/thumbnail/ballpit.webp",revision:"e4631b1d83c70db9a4b5e2b4692663f6"},{url:"/images/thumbnail/bouncy-watch.webp",revision:"4a11939d0524e868f28261011cb393d5"},{url:"/images/thumbnail/draggable.png",revision:"349be8b7d5e5c3d6709d2e5afec7fa35"},{url:"/images/thumbnail/hi-key-bubbles.webp",revision:"1dc8e873c3380306f265bf43617d820a"},{url:"/images/thumbnail/horizontal-tiles-2.png",revision:"839c583e2563f5f152cfc0415b2d2011"},{url:"/images/thumbnail/horizontal-tiles.webp",revision:"8ad7b814c293811118978db0634bc6e9"},{url:"/images/thumbnail/image-gallery.webp",revision:"f27060a442df2b40becf8ecff9b777d5"},{url:"/images/thumbnail/infinite-scroll-2.png",revision:"2ac589b41e13cd19df845b0a1274e3b7"},{url:"/images/thumbnail/infinite-scroll.webp",revision:"741f1afac66b18935fb5e2e5dc1b1558"},{url:"/images/thumbnail/instanced-vertex-color.webp",revision:"5a55a137b7baf4937519c94369a954ed"},{url:"/images/thumbnail/portal.png",revision:"ddf881c434c1482d24a67bd8c14cae86"},{url:"/images/thumbnail/raycast-cycling-stair.webp",revision:"5abc3a4fdba84195a04d5efd17c90670"},{url:"/images/thumbnail/reflectorplanes.png",revision:"3e61362ebd4d8f06f1bf0882350108fe"},{url:"/images/thumbnail/scroll-gltf.webp",revision:"d287e75b253dff97006812893daf33e8"},{url:"/images/thumbnail/scrollcontrols-minimap-2.png",revision:"4f651e76e6d567985122d4c9323a2a32"},{url:"/images/thumbnail/scrollcontrols-minimap.webp",revision:"8fd979b91695d31e21a94bf8f214d6b2"},{url:"/images/thumbnail/shader-pattern.png",revision:"ff8ba2bae07243fd0f9ba25fd2d72fcb"},{url:"/images/thumbnail/simple-audio-analyser.webp",revision:"b405430e919a64c263af97dd27befd31"},{url:"/images/thumbnail/spherical-word.webp",revision:"90abc2f1ea16ba3079daf409ebe32573"},{url:"/images/thumbnail/video-particle.png",revision:"9f2153a61b5308e60e277b00fa754daa"},{url:"/images/thumbnail/water-shader.webp",revision:"f9dbe2f22d51266227c42eb9fdf9b4ca"},{url:"/images/video-particle/end.jpeg",revision:"976931ae3e61c14d97e60c96e6083c10"},{url:"/images/video-particle/start.jpeg",revision:"1462e944a2d43e9143790fc545be5c2b"},{url:"/images/video-particle/video-particle.png",revision:"9f2153a61b5308e60e277b00fa754daa"},{url:"/images/water-shader/waternormals.jpeg",revision:"4418dde3f6abc21dc32506acf5f5b093"},{url:"/models/area/enter.png",revision:"df7593f57dede45bf8f6d66ac45756fd"},{url:"/models/area/keyEnter.png",revision:"eded7647a280b0e2443266643ca45c42"},{url:"/models/area/open.png",revision:"221e989226ab84a478a99b48a4b7eeb1"},{url:"/models/area/questionMark.png",revision:"42b4818b9ab0050da712822803841a63"},{url:"/models/area/reset.png",revision:"0c1dd571b3341d836eb9e3af1f5e8320"},{url:"/models/awwwardsTrophy/base.glb",revision:"7e07f15c0d2dc2c84376e245e688c1d3"},{url:"/models/awwwardsTrophy/collision.glb",revision:"acf7597a5d00b17d9397397e2cf8f936"},{url:"/models/bowlingBall/base.glb",revision:"462c7f17161f1c62ce48fd23908c28fe"},{url:"/models/bowlingBall/collision.glb",revision:"33841c1b417660d2f7893cb3115d56a4"},{url:"/models/bowlingPin/base.glb",revision:"6db9c7ad5dcb994c0f02141601541f0c"},{url:"/models/bowlingPin/collision.glb",revision:"6b3692eb9e19ae80b5bb76fa80e17e86"},{url:"/models/brick/base.glb",revision:"3d79479ee6cb3cd73dba766c85a16b49"},{url:"/models/brick/collision.glb",revision:"da455b789aabbdf43d9e64487150e410"},{url:"/models/car/cyberTruck/antena.glb",revision:"5e7bcfd005ecb137a77bbc0fc2239b68"},{url:"/models/car/cyberTruck/backLightsBrake.glb",revision:"2f93a1e6f3a31fb93b9a6be7140663d2"},{url:"/models/car/cyberTruck/backLightsReverse.glb",revision:"de9df6975716e7aaedf4e9643c2ac7dd"},{url:"/models/car/cyberTruck/chassis.glb",revision:"6409f6fbeb96155ced4bb1b85353d770"},{url:"/models/car/cyberTruck/wheel.glb",revision:"99b0611a18af0760015c18b3b6c582e0"},{url:"/models/car/default/antena.glb",revision:"05da7b844b55c289182c6a8ed4eeba52"},{url:"/models/car/default/backLightsBrake.glb",revision:"7431831c2990b7d846e081edac0575bf"},{url:"/models/car/default/backLightsReverse.glb",revision:"38c8e3fff91853c3f3612001ee1bd1ed"},{url:"/models/car/default/bunnyEarLeft.glb",revision:"726607bce546f261bda3b8fc7ee1e7c9"},{url:"/models/car/default/bunnyEarRight.glb",revision:"464404d30ec7bf978633ccf57c5d5be9"},{url:"/models/car/default/chassis.glb",revision:"26d3a263649fa52eea083a57b81d31b9"},{url:"/models/car/default/wheel.glb",revision:"41a35a3f4e93ede52ac7f911348255e5"},{url:"/models/cone/base.glb",revision:"f603347ff052e7d9b7214b99cda7e748"},{url:"/models/cone/collision.glb",revision:"b97a6152c0c64ba5ac2f4ebe0b59d3dd"},{url:"/models/crossroads/static/base.glb",revision:"cf533c711af42754187706cd818cc974"},{url:"/models/crossroads/static/collision.glb",revision:"8eddec1a7334cca14ed33340858a3c8a"},{url:"/models/crossroads/static/floorShadow.png",revision:"3383ddae7b9c3fbd90dd166df24b6d29"},{url:"/models/distinctionA/static/base.glb",revision:"a618dfa2e4b08014aef6e3fc7af8facb"},{url:"/models/distinctionA/static/collision.glb",revision:"0078eba5b2cff835fe5d8b96c3a27c9e"},{url:"/models/distinctionA/static/floorShadow.png",revision:"a4443ae7e7f8c25af32b122078cee3e8"},{url:"/models/distinctionB/static/base.glb",revision:"d9d52d5387f5c28b59ae4c59be97239d"},{url:"/models/distinctionB/static/collision.glb",revision:"7cc13b579c22a948024c2e7caf1ec9e3"},{url:"/models/distinctionB/static/floorShadow.png",revision:"aba12ff5909693d18780aa97a8e9cf96"},{url:"/models/distinctionC/static/base.glb",revision:"830cb19f155c18c78ca4cd32190aff56"},{url:"/models/distinctionC/static/collision.glb",revision:"c3d72ffc49faaaf8548b4ad118382d0e"},{url:"/models/distinctionC/static/floorShadow.png",revision:"865fecba70b6be7c4cd6871783da3615"},{url:"/models/egg/base.glb",revision:"df8629ae76303cd73f6b787b85cf7ff1"},{url:"/models/egg/collision.glb",revision:"c1f12034274b6e9f4528da967affc312"},{url:"/models/horn/base.glb",revision:"acd5bc4b57619203ddbb33bfa5bacd6a"},{url:"/models/horn/collision.glb",revision:"97eb1e69ff0e2928fe56b46e61217196"},{url:"/models/information/baguette/base.glb",revision:"21fd92b48a676a1342904d0f4f0dd761"},{url:"/models/information/baguette/collision.glb",revision:"1f6c56e3fd78b8c47b35b9d00e6fa91b"},{url:"/models/information/static/activities.png",revision:"94511da14809644bc945b9d290d5f55c"},{url:"/models/information/static/base.glb",revision:"6d115788184153264c18598221c1be1e"},{url:"/models/information/static/collision.glb",revision:"aadfeca7764f9738a70ae20edebe0bbc"},{url:"/models/information/static/contactGithubLabel.png",revision:"b9ae4a05b3432b7eaf9b1a7533ff2dcc"},{url:"/models/information/static/contactLinkedinLabel.png",revision:"68013c13e041f7504c626ecb9696633e"},{url:"/models/information/static/contactMailLabel.png",revision:"11c962df06a03e0eef83a846386e7c05"},{url:"/models/information/static/contactTwitterLabel.png",revision:"7993174ebc2d660febbfda0dd75619b7"},{url:"/models/information/static/floorShadow.png",revision:"94a71d95af3eef16f5edacd1e08fabd7"},{url:"/models/intro/arrowKey/base.glb",revision:"ee39fcf57061c255b7c3e0d605531921"},{url:"/models/intro/arrowKey/collision.glb",revision:"41873f8d29ba6986fbd989cc11a0861b"},{url:"/models/intro/b/base.glb",revision:"c29a52046ea2ce293ecc5ecbab6874f7"},{url:"/models/intro/b/collision.glb",revision:"8a3e1e88361a6d8c75f6299dd106f9a2"},{url:"/models/intro/creative/base.glb",revision:"4d7901d60f130c395268de7bab55b05e"},{url:"/models/intro/creative/collision.glb",revision:"306b66be160bd6e2391a1b677f407cf3"},{url:"/models/intro/dev/base.glb",revision:"06a09770791315f6607541aa08e81cd8"},{url:"/models/intro/dev/collision.glb",revision:"2166f52bece02b7a57472a5685cedc3e"},{url:"/models/intro/i/base.glb",revision:"c94d6f2b99003ff88e17dc8647dd437a"},{url:"/models/intro/i/collision.glb",revision:"2380bc4708ddab780b096595eb6aa45e"},{url:"/models/intro/instructions/arrows.png",revision:"dca594a0bd9acd2eb809722626948e72"},{url:"/models/intro/instructions/controls.png",revision:"fcb0aa698dc0dc418f11e44c4aa0998e"},{url:"/models/intro/instructions/labels.glb",revision:"90170bc9f594f8fd6f31f687bff0fcda"},{url:"/models/intro/instructions/other.png",revision:"c2ef0b8420e53f30979144529df48193"},{url:"/models/intro/m/base.glb",revision:"9f57580e28bfde6b2a18a0c14a40d6c5"},{url:"/models/intro/m/collision.glb",revision:"4565c0263eff45fa434b16d46f656b7c"},{url:"/models/intro/n/base.glb",revision:"879d71ac6b7aef0843fa6baac1dcf29d"},{url:"/models/intro/n/collision.glb",revision:"121482d901423252a4a83adbffae3eff"},{url:"/models/intro/o/base.glb",revision:"4d8b0b529db8b14162c195105a8e7df7"},{url:"/models/intro/o/collision.glb",revision:"b66c2a7fa02a4d30eafeff4366961069"},{url:"/models/intro/r/base.glb",revision:"7fc5a81e1ec15f9a0c0d06f2ca6a21c6"},{url:"/models/intro/r/collision.glb",revision:"d4c5bdcf2e70116611af889d7387324b"},{url:"/models/intro/s/base.glb",revision:"3f30bda1ae07856e9a537406bd3ae10c"},{url:"/models/intro/s/collision.glb",revision:"a461a9d81ffdf7c3c354a13701022228"},{url:"/models/intro/static/base.glb",revision:"630cfe7e8388bff5bfda6692ce4ca40b"},{url:"/models/intro/static/collision.glb",revision:"aec2442e73d93a2bf23860c3720f74e0"},{url:"/models/intro/static/floorShadow.png",revision:"34ad26e49cb716afcee7e78c7775bbb0"},{url:"/models/intro/u/base.glb",revision:"e09ec475115e58ea8d37ad5be0fbd6c1"},{url:"/models/intro/u/collision.glb",revision:"221c70c8b0054bbbd104ac50a27dd655"},{url:"/models/konami/label-touch.png",revision:"a488fb1cf9d7ea925371d088f83c7853"},{url:"/models/konami/label.png",revision:"9c01ad1d6fcb899e212d85a3721c7919"},{url:"/models/lemon/base.glb",revision:"9057c0de91907da529f81fc77705663d"},{url:"/models/lemon/collision.glb",revision:"a4cd225e5094b952453215d98d30f732"},{url:"/models/matcaps/beige.png",revision:"174399e181a7207f5db410993b600ecb"},{url:"/models/matcaps/black.png",revision:"c2f94d96e462b92d9498acb827a5c318"},{url:"/models/matcaps/blue.png",revision:"e18fd152d5f9c80252568de297673abc"},{url:"/models/matcaps/brown.png",revision:"7b991f093eda90a03a7752108e3307bd"},{url:"/models/matcaps/emeraldGreen.png",revision:"c281bab4496257fa1170d3dd839710cc"},{url:"/models/matcaps/gold.png",revision:"3cf131c9c27c04631b594011ef585f0f"},{url:"/models/matcaps/gray.png",revision:"bb647a792a695ec2c4049bda29a25623"},{url:"/models/matcaps/green.png",revision:"892ae8bf9538521c42dadd8d5795915c"},{url:"/models/matcaps/metal.png",revision:"bb12f8e252e245ab083746e70287a641"},{url:"/models/matcaps/orange.png",revision:"a727f29229b4fe27c323320d33ae6ad4"},{url:"/models/matcaps/purple.png",revision:"e1f5a0c60682a6140cf786abde7cf5c7"},{url:"/models/matcaps/red.png",revision:"1c844a43ec882fc751607ced72f5611b"},{url:"/models/matcaps/white.png",revision:"968808cd6cb4ef6e53193f2a1f37eac6"},{url:"/models/matcaps/yellow.png",revision:"34a2a6a5c634dcd49632c37152b255d1"},{url:"/models/playground/static/base.glb",revision:"a7a4db65f226a053baff02a799a8212e"},{url:"/models/playground/static/collision.glb",revision:"1dc3890285fd3ea22a6a98454b14b790"},{url:"/models/playground/static/floorShadow.png",revision:"3e972685f06c17df40ffd2984e52c6dc"},{url:"/models/projects/board/collision.glb",revision:"850e767de6fce56a2956e3dbd35657f5"},{url:"/models/projects/board/floorShadow.png",revision:"88e7de34bc9f40d6dfb86585c07a5ae8"},{url:"/models/projects/board/plane.glb",revision:"aae8f39e18f1de3df8c1515494cf7c38"},{url:"/models/projects/board/structure.glb",revision:"af9ce115c8e3d5aedf990bf730396503"},{url:"/models/projects/chartogne/floorTexture.png",revision:"c31684f5bb6c63b47e82a0e5ab934efd"},{url:"/models/projects/chartogne/slideA.jpg",revision:"3f7409846885f66efe406a7f803eee4e"},{url:"/models/projects/chartogne/slideB.jpg",revision:"7cdbd23d270dfa9d2c5c4b197514607b"},{url:"/models/projects/chartogne/slideC.jpg",revision:"eb50c71abbb4eb7e5185cfd409c1f573"},{url:"/models/projects/citrixRedbull/floorTexture.png",revision:"fd297831448a15cfea69451b76c64260"},{url:"/models/projects/citrixRedbull/slideA.jpg",revision:"dbde9fadf7aba4a069628d284bc0babc"},{url:"/models/projects/citrixRedbull/slideB.jpg",revision:"ca03920f8c6d3d3474f9acbb885a2e35"},{url:"/models/projects/citrixRedbull/slideC.jpg",revision:"fe1a574366215848bc13fd83348da5ba"},{url:"/models/projects/distinctions/awwwards/base.glb",revision:"c6cd78093d669d64c4e70da2e9b64f11"},{url:"/models/projects/distinctions/awwwards/collision.glb",revision:"37c10d3062104452f6fc49ba6af9bf14"},{url:"/models/projects/distinctions/cssda/base.glb",revision:"fb28c54a6d1a28f06de3c38a5c6d728c"},{url:"/models/projects/distinctions/cssda/collision.glb",revision:"3d47ba328052824c52e4712b10dbc091"},{url:"/models/projects/distinctions/fwa/base.glb",revision:"b1c1eb9c7446718e8ded88b4f80ac979"},{url:"/models/projects/distinctions/fwa/collision.glb",revision:"bce27fd6534d32f8922b1e43bd1cf12b"},{url:"/models/projects/gleecChat/floorTexture.png",revision:"2eccb8ea03e83d78568111466caf9cb6"},{url:"/models/projects/gleecChat/slideA.jpg",revision:"ddd57717b763c3896ba99785790cfe5b"},{url:"/models/projects/gleecChat/slideB.jpg",revision:"538903f24a130386c86a8cabb8d7dc49"},{url:"/models/projects/gleecChat/slideC.jpg",revision:"6f3ba7ac94c7fa77003e80933b6f0a2b"},{url:"/models/projects/gleecChat/slideD.jpg",revision:"7a8be3186262b8032f62ac711d2b32dd"},{url:"/models/projects/keppler/floorTexture.png",revision:"69e10dcdabda3462adf922a696859de9"},{url:"/models/projects/keppler/slideA.jpg",revision:"010c96667ef605c6c8980a0fe4b473dd"},{url:"/models/projects/keppler/slideB.jpg",revision:"f3c9dd382864e1b3c6975626a8b40495"},{url:"/models/projects/keppler/slideC.jpg",revision:"447d71caa1642cef4953dff06fc01df6"},{url:"/models/projects/madbox/floorTexture.png",revision:"467608bbe82f408e4db061037660149a"},{url:"/models/projects/madbox/slideA.jpg",revision:"da6a48603c6ae1f00a7362b9d2b324c6"},{url:"/models/projects/madbox/slideB.jpg",revision:"5418db9e7397311dcaa9ec98ae4a317f"},{url:"/models/projects/madbox/slideC.jpg",revision:"c8353c9e905fcdac1a6705a41c3287c9"},{url:"/models/projects/orano/floorTexture.png",revision:"94134f063defb5ae6a6240a2fc2115b5"},{url:"/models/projects/orano/slideA.jpg",revision:"424431e284d8d4b241c64a0982e43f64"},{url:"/models/projects/orano/slideB.jpg",revision:"5eeb4fe829dcb33c89133d4a05d93019"},{url:"/models/projects/orano/slideC.jpg",revision:"df203a33e87aed7bc4a9ca5a60c3505d"},{url:"/models/projects/priorHoldings/floorTexture.png",revision:"c6cfbe8c8f6a12f2cf009f726ec5d923"},{url:"/models/projects/priorHoldings/slideA.jpg",revision:"c29463bfdf71d435d08fcf9225ec27bf"},{url:"/models/projects/priorHoldings/slideB.jpg",revision:"3c5bd7d6ae6e0c746da95ef93637b224"},{url:"/models/projects/priorHoldings/slideC.jpg",revision:"f0621952d4c4bc7bd7e4d782e1060d9f"},{url:"/models/projects/refletCommunication/floorTexture.png",revision:"a764d3d867c3059e655b07bab769c32f"},{url:"/models/projects/refletCommunication/slideA.jpg",revision:"75a6558d4477406b9a321e893bb54f71"},{url:"/models/projects/refletCommunication/slideB.jpg",revision:"0da7beb3a323f99ee9f1c4bd833ed7e4"},{url:"/models/projects/refletCommunication/slideC.jpg",revision:"18496be156181af2208ff64670a60c06"},{url:"/models/projects/refletCommunication/slideD.jpg",revision:"dbf4be93c5571213b9928bb18181c5fe"},{url:"/models/projects/scout/floorTexture.png",revision:"d1ae80c1c698601e071b5d07a0f35d8e"},{url:"/models/projects/scout/slideA.jpg",revision:"0c71d1acf010efb1ddaa45ec252f9f63"},{url:"/models/projects/scout/slideB.jpg",revision:"ecba5a6d82222f5aaa15a8e31d0580f1"},{url:"/models/projects/scout/slideC.jpg",revision:"a75ae331c6a9329de51b13878603c955"},{url:"/models/projects/threejsJourney/floorTexture.png",revision:"020ba822bb272a1822f63ee0456d9054"},{url:"/models/projects/threejsJourney/slideA.jpg",revision:"3af69ea1743ab408829f057c343027ce"},{url:"/models/projects/threejsJourney/slideB.jpg",revision:"23e3e5eaf224c819318cc05d1b86b428"},{url:"/models/projects/threejsJourney/slideC.jpg",revision:"0538fcc73ff303f905022f686179847d"},{url:"/models/projects/threejsJourney/slideD.jpg",revision:"c2f40fd85759fc7683a3fefad2cec784"},{url:"/models/projects/zenly/floorTexture.png",revision:"a062c320cd8e32d24700dff0ecc1793b"},{url:"/models/projects/zenly/slideA.jpg",revision:"02a254728712e93cf4a626f6eecfe785"},{url:"/models/projects/zenly/slideB.jpg",revision:"d38711c5542706893776ec2e060b2f04"},{url:"/models/projects/zenly/slideC.jpg",revision:"096de9a5b57a257b504a539eb3a3bce7"},{url:"/models/startingScreen/loadingLabel.png",revision:"7be3ceeb2b39582633ea68dc060a206c"},{url:"/models/startingScreen/startLabel.png",revision:"8acdab2da1359f814a0f00b2a5d05727"},{url:"/models/tiles/a/base.glb",revision:"11374d1c4097160da68987a1e7bdecb5"},{url:"/models/tiles/a/collision.glb",revision:"a830822a2bdbefaa206c8112cd69b730"},{url:"/models/tiles/b/base.glb",revision:"2422052f1c6d668842c1fab4c0a59220"},{url:"/models/tiles/b/collision.glb",revision:"3d20bd8ea1a0b86d912c611dba20d356"},{url:"/models/tiles/c/base.glb",revision:"8643d72879bf7a83915a8037e416dceb"},{url:"/models/tiles/c/collision.glb",revision:"3fdfef1a51b75d8169e1703f9d2373da"},{url:"/models/tiles/d/base.glb",revision:"dd55ab652e4f29f83c8f137e35deecb6"},{url:"/models/tiles/d/collision.glb",revision:"f4005e3c3d346d4b0770d64757cc5955"},{url:"/models/tiles/e/base.glb",revision:"65167645ce1cd853e841a765486287d4"},{url:"/models/tiles/e/collision.glb",revision:"f6c181c3f05e805d9738752a2dd24810"},{url:"/models/webbyTrophy/base.glb",revision:"04f5bc5a3504ec48345132f0c66e3315"},{url:"/models/webbyTrophy/collision.glb",revision:"6698a3a368795fbee26a591a1d0c3205"},{url:"/models/wigs/wig1.glb",revision:"66a121b35f59057280a4d1fef3a93312"},{url:"/models/wigs/wig2.glb",revision:"0df0ab61f9c67ac731d3ec02c046c643"},{url:"/models/wigs/wig3.glb",revision:"a1b22974f9c20e08a112c87b0a446cf4"},{url:"/models/wigs/wig4.glb",revision:"fd427e0835cd0a0538a1b09757c112d6"},{url:"/videos/1.mp4",revision:"1a78a452eb7fc57ab151ff575260ad4d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
