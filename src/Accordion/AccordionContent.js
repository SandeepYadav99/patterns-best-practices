import React from "react";
import { useAccordionContext } from "./Accordion";
import { AccordionItemProvider } from "./AccordionItem";

const AccordionContent = ({  children }) => {
  const { openItemId } = useAccordionContext();
  const id = AccordionItemProvider()
  const isOpen = openItemId === id;
  console.log(isOpen)
  return   <div className={isOpen ? "open" : "close"}>{children}</div>;
};

export default AccordionContent;
