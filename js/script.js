// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  data() {
    return {
      title: "Hello Word",
      image: {
        src: "https://picsum.photos/400/300",
        alt: "random image",
      },
    };
  },
});

// La monto nell'elemento HTML

app.mount("#root");
