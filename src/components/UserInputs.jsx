import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import PersonalDetails from "./InputData/PersonalDetails";
import PorfileSummary from "./InputData/ProfileSummary";
import Experience from "./InputData/Experience";
function UserInputs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-neutral-950 border-black border-2"
    >
      <AccordionItem value="item-1" className="p-3 pl-5">
        <AccordionTrigger className="[&[data-state=open]]:text-2xl">
          Personal Details
        </AccordionTrigger>
        <AccordionContent>
          <PersonalDetails />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="p-3 pl-5">
        <AccordionTrigger className=" [&[data-state=open]]:text-2xl">
          Profile Summary
        </AccordionTrigger>
        <AccordionContent>
          <PorfileSummary />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="p-3 pl-5">
        <AccordionTrigger className="[&[data-state=open]]:text-2xl">
          Experience
        </AccordionTrigger>
        <AccordionContent>
          <Experience />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="p-3 pl-5">
        <AccordionTrigger className="[&[data-state=open]]:text-2xl">
          Education Details
        </AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default UserInputs;
