// Vazio de propósito: essa versão não guarda dados aqui, só serve
// pra o Chrome considerar o site "instalável" como app isolado.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("fetch", () => {});
