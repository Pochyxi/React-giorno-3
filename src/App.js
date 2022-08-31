import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/books/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <WarningSign
        color="danger"
        text="Sono una stringa passata tramite una prop in un elemento Alert di bootstrap"
      />
      <h1>
        Sono un H1 con un badge contentente una prop per il testo ed una per il
        suo colore <MyBadge color="secondary" text="ECCOMI!" />
      </h1>
      <div className="d-flex justify-content-center">
        <SingleBook
          img={fantasy[1].img}
          title={fantasy[1].title}
          price={fantasy[1].price}
        />
      </div>
      <BookList list={fantasy} />
    </div>
  );
}

export default App;
