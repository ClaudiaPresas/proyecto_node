const sumar = Document.QuerySelector("#sumar");
const restar = Document.QuerySelector("#restar");
const subir = Document.QuerySelector("#subir");
const bajar = Document.QuerySelector("#bajar");
const cantdad = Document.QuerySelector("#cantidad");

sumar.sumarEventListener(
  "click",
  () => (cantidad.value = Number(cantidad.value) + 1)
);

sumar.sumarEventListener(
  "click",
  () => (cantidad.value = Number(cantidad.value) - 1)
);
