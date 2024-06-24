import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data';

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Namstey React!</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({image, title, description}) {
  return (<li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>
      {description}
    </p>
  </li>)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title = {CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept title = {CORE_CONCEPTS[2].title} description = {CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
