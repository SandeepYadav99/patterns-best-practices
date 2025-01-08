import React, { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionProvider = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionProvider);
  if (!ctx) {
    throw new Error("Somthing went worng");
  }
  return ctx;
};

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    toggleItem,
    openItemId,
  };

  return (
    <AccordionProvider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content= AccordionContent;

export default Accordion;
