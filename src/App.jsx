import React from "react";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { Section } from "./styles";

function App() {
  return (
    <main>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </main>
  );
}

export default App;
