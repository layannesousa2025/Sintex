import "./Home.css";

const restaurants = [
  {
    name: "Almoço da Vila",
    rating: "4.8",
    type: "Brasileira · Delivery",
    positives: [
      "Entrega rápida",
      "Porções bem servidas",
      "Atendimento cordial",
    ],
    negatives: [
      "Poucas opções vegetarianas", "Temperatura do prato varia"],
    menu: [
      { dish: "Filé à parmegiana", price: "R$ 42,90" },
      { dish: "Parmegiana de frango", price: "R$ 38,50" },
      { dish: "Lasanha de carne", price: "R$ 35,00" },
    ],
  },
  {
    name: "Sabor Sushi Bar",
    rating: "4.6",
    type: "Japonesa · Restaurante",
    positives: [
      "Peixe fresco",
      "Ambiente calmo",
      "Apresentação bonita",
    ],
    negatives: [
      "Tempo de espera maior nos fins de semana", "Preços um pouco altos"],
    menu: [
      { dish: "Temaki Salmão", price: "R$ 28,90" },
      { dish: "Combinado Especial", price: "R$ 89,90" },
      { dish: "Uramaki Hot", price: "R$ 34,00" },
    ],
  },
];

export default function Home() {
  return (
    <main className="Home">
      <section className="HomeHeader">
        <h1>Restaurantes avaliados</h1>
        <p>
          Escolha seu restaurante com base nas avaliações, pontos positivos, pontos negativos e cardápio.
        </p>
      </section>

      <section className="RestaurantGrid">
        {restaurants.map((restaurant) => (
          <article key={restaurant.name} className="RestaurantCard">
            <h2>{restaurant.name}</h2>
            <div className="RestaurantMeta">
              <span className="Rating">Avaliação: {restaurant.rating}</span>
              <span>{restaurant.type}</span>
            </div>

            <div className="Points">
              <div className="PointsColumn">
                <h3>Pontos positivos</h3>
                <ul className="PointsList">
                  {restaurant.positives.map((item) => (
                    <li key={item}>+ {item}</li>
                  ))}
                </ul>
              </div>
              <div className="PointsColumn">
                <h3>Pontos negativos</h3>
                <ul className="PointsList">
                  {restaurant.negatives.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3>Cardápio</h3>
              <ul className="MenuList">
                {restaurant.menu.map((item) => (
                  <li key={item.dish} className="MenuItem">
                    <span>{item.dish}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}