import React from "react";
import Accordion from "./Accordion/Accordion";
import SearchListItem from "./SearchListItem/SearchListItem";
import Place from "./Place";

const App = () => {
  const PLACES = [
    { id: 1, title: "Wnd", description: "This is my wnd" },
    { id: 2, title: "Electrovese", description: "This is my Electrovese" },
    { id: 3, title: "Think wik", description: "This is my ThinkWik" },
  ];
  return (
    <main>
      
      <section className={"main"}>
        <Accordion className={"accordion"}>
          <Accordion.Item className={"accordionItem"} id={"experience"}>
            <Accordion.Title>We got 20 years of experience</Accordion.Title>
            <Accordion.Content>
              <article>
                <p>You can&apos;t go worng with us.</p>
                <p>
                  We are in the business of planning highly indvvidualized
                  vaction trips
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Accordion className={"accordion"}>
          <Accordion.Item className={"accordionItem"} id={"local"}>
            <Accordion.Title>We got 20 years of experience</Accordion.Title>
            <Accordion.Content>
              <article>
                <p>You can&apos;t go worng with us.</p>
                <p>
                  We are in the business of planning highly indvvidualized
                  vaction trips
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      <section className="main border">
        <SearchListItem items={PLACES} keyFuncItem={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchListItem>
      </section>
      <section className="main border">
        <SearchListItem items={["item1", "item2"]} keyFuncItem={(item) => item}>
          {(item) => <h3>{item}</h3>}
        </SearchListItem>
      </section>
    </main>
  );
};

export default App;
