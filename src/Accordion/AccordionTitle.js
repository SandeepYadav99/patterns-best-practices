import React from "react";
import { useAccordionContext } from "./Accordion";
import { AccordionItemProvider } from "./AccordionItem";

const AccordionTitle = ({  children }) => {
  const { toggleItem } = useAccordionContext();
  const id = AccordionItemProvider()
  return <h2 onClick={() => toggleItem(id)}>{children}</h2>;
};

export default AccordionTitle;
