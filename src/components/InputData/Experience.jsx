import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "./Compo/DateRangePicker";
import { useState } from "react";
function CompanyName() {
  return (
    <div className="flex w-full items-center gap-5 p-2">
      <Label htmlFor="CompN" className="w-30">
        Company Name :
      </Label>
      <Input type="name" id="CompN" className="w-1/3" placeholder="x company" />
    </div>
  );
}
function Position() {
  return (
    <div className="flex items-center gap-5 p-2">
      <Label htmlFor="position" className="w-30">
        Position :
      </Label>
      <Input
        type="name"
        id="position"
        className="w-1/3"
        placeholder="Software Developer"
      />
    </div>
  );
}
function Duration() {
  return (
    <div className="flex items-center gap-5 p-2">
      <Label className="w-30">Duration</Label>
      <DatePickerWithRange />
    </div>
  );
}

function Details() {
  return (
    <div className="flex w-full items-center gap-5 p-2">
      <Label htmlFor="details" className="w-30">
        Details :
      </Label>
      <Textarea placeholder="Details" className="w-1/3" />
    </div>
  );
}

function AddButton() {
  return (
    <Button
      className="w-35 hover:cursor-pointer hover:bg-green-700 ml-3 p-b mb-2"
      onClick={() => console.log("added")}
    >
      Add Experience
    </Button>
  );
}

function DeleteButton() {
  return (
    <Button
      className="w-25 hover:cursor-pointer hover:bg-red-400 ml-3 p-b mb-2 "
      onClick={() => DeleteAction()}
    >
      Delete
    </Button>
  );
}
function OneExperience({ Exp, DelFunction }) {
  return (
    <div className="flex flex-col border-black border-1 p-0.5 ">
      <CompanyName Exp={Exp} />
      <Position Exp={Exp} />
      <Duration Exp={Exp} />
      <Details Exp={Exp} />
      <DeleteButton DelFunction={DelFunction} />
    </div>
  );
}

function Experience() {
  const [experience, setExperience] = useState([]);

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        CompanyName: "",
        Position: "",
        Duration: "",
        Details: "",
        id: Date.now(),
      },
    ]);
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 overflow-hiddens">
      <OneExperience />
      {experience.map((exp) => (
        <OneExperience Exp={exp} DelFunction={deleteExperience} />
      ))}
      <AddButton AddFunction={addExperience} />
    </div>
  );
}
function DeleteAction() {
  console.log("Deleted");
}

export default Experience;
