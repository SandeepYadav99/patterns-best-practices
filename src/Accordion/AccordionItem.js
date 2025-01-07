import React, { createContext, useContext } from "react";
const AccordionItemContext= createContext()

export const AccordionItemProvider=()=>{
  const ctx= useContext(AccordionItemContext);
  if(!ctx){
    throw new Error("Somthing went worng!")
  }
  return ctx;
}
const AccordionItem = ({id, className, children }) => {

  return <AccordionItemContext value={id}><li className={className}>{children}</li></AccordionItemContext> ;
};

export default AccordionItem;
