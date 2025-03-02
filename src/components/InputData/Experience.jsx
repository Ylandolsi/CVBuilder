import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "./Compo/DateRangePicker";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { ExperienceContext } from "../contexts/ExperiencesContext";
import { addDays } from "date-fns";

function CompanyName({ exp, ModifyFunction }) {
  return (
    <div className="flex w-full items-center gap-5 p-2">
      <Label htmlFor="CompN" className="w-30">
        Company Name :
      </Label>
      <Input
        type="name"
        id="CompN"
        className="w-1/3"
        value={exp.name}
        onChange={(e) => ModifyFunction({ ...exp, name: e.target.value })}
      />
    </div>
  );
}
function Position({ exp, ModifyFunction }) {
  return (
    <div className="flex items-center gap-5 p-2">
      <Label htmlFor="position" className="w-30">
        Position :
      </Label>
      <Input
        type="name"
        id="position"
        className="w-1/3"
        value={exp.position}
        onChange={(e) => ModifyFunction({ ...exp, position: e.target.value })}
      />
    </div>
  );
}

function Details({ exp, ModifyFunction }) {
  return (
    <div className="flex w-full items-center gap-5 p-2">
      <Label htmlFor="details" className="w-30">
        Details :
      </Label>
      <Textarea
        placeholder="Details"
        className="w-1/3"
        value={exp.details}
        onChange={(e) => ModifyFunction({ ...exp, details: e.target.value })}
      />
    </div>
  );
}

function AddButton({ AddFunction }) {
  return (
    <Button
      className="w-35 hover:cursor-pointer hover:bg-green-700 ml-3 p-b mb-2"
      onClick={() =>
        AddFunction({
          id: Date.now(),
          name: "",
          position: "",
          from: new Date(2022, 0, 20),
          to: addDays(new Date(2022, 0, 20), 20),
          details: "",
        })
      }
    >
      Add Experience
    </Button>
  );
}

function DeleteButton({ id, DelFunction }) {
  return (
    <Button
      className="w-25 hover:cursor-pointer hover:bg-red-400 ml-3 p-b mb-2 "
      onClick={() => DelFunction(id)}
    >
      Delete
    </Button>
  );
}

function Duration({ exp, ModifyFunction }) {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  useEffect(() => {
    console.log(date.from, date.to);
    console.log({ ...exp, from: date.from, to: date.to });
    ModifyFunction({ ...exp, from: date.from, to: date.to });
  }, [date]);

  return (
    <div className="flex items-center gap-5 p-2">
      <Label className="w-30">Duration</Label>
      <DatePickerWithRange
        date={date}
        setDate={setDate}
        ModifyFunction={ModifyFunction}
        exp={exp}
      />
    </div>
  );
}
function OneExperience({ Exp, ModifyFunction, DelFunction }) {
  return (
    <div className="flex flex-col border-black border-1 p-0.5 ">
      <CompanyName exp={Exp} ModifyFunction={ModifyFunction} />
      <Position exp={Exp} ModifyFunction={ModifyFunction} />
      <Duration exp={Exp} ModifyFunction={ModifyFunction} />
      <Details exp={Exp} ModifyFunction={ModifyFunction} />
      <DeleteButton id={Exp.id} DelFunction={DelFunction} />
    </div>
  );
}

function Experience() {
  const {
    Experiences,
    handleAddExperience,
    handleDeleteExperienec,
    handleModifyExperience,
  } = useContext(ExperienceContext);

  return (
    <div className="flex flex-col gap-4 overflow-hiddens">
      {Experiences.map((exp) => (
        <OneExperience
          key={exp.id}
          Exp={exp}
          ModifyFunction={handleModifyExperience}
          DelFunction={handleDeleteExperienec}
        />
      ))}
      <AddButton AddFunction={handleAddExperience} />
    </div>
  );
}

export default Experience;
