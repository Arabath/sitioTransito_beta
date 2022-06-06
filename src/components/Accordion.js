import { faqs } from "../components/data";
import AccordionItem from "./AccordionItem";
import '../Styles/accordion.css'

const Accordion = () => {
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;