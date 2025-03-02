import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "./Compo/DateRangePicker";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { EducationContext } from "../contexts/EducationContext";
import { addDays } from "date-fns";

function SchoolName({ ed, ModifyFunction }) {
  return (
    <div className="flex w-full items-center gap-5 p-2">
      <Label htmlFor="CompN" className="w-30">
        School/University :
      </Label>
      <Input
        type="name"
        id="CompN"
        className="w-1/3"
        value={ed.name}
        onChange={(e) => ModifyFunction({ ...ed, name: e.target.value })}
      />
    </div>
  );
}
function Degree({ ed, ModifyFunction }) {
  return (
    <div className="flex items-center gap-5 p-2">
      <Label htmlFor="position" className="w-30">
        Degree :
      </Label>
      <Input
        type="name"
        id="position"
        className="w-1/3"
        value={ed.degree}
        onChange={(e) => ModifyFunction({ ...ed, degree: e.target.value })}
      />
    </div>
  );
}

function Location({ ed, ModifyFunction }) {
  return (
    <div className="flex w-full items-center gap-5 p-2">
      <Label htmlFor="details" className="w-30">
        Location :
      </Label>
      <Input
        className="w-1/3"
        value={ed.location}
        onChange={(e) => ModifyFunction({ ...ed, location: e.target.value })}
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
      Add Education
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

function Duration({ ed, ModifyFunction }) {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  useEffect(() => {
    console.log(date.from, date.to);
    console.log({ ...ed, from: date.from, to: date.to });
    ModifyFunction({ ...ed, from: date.from, to: date.to });
  }, [date]);

  return (
    <div className="flex items-center gap-5 p-2">
      <Label className="w-30">Duration</Label>
      <DatePickerWithRange
        date={date}
        setDate={setDate}
        ModifyFunction={ModifyFunction}
        ed={ed}
      />
    </div>
  );
}
function OneEducation({ ed, ModifyFunction, DelFunction }) {
  return (
    <div className="flex flex-col border-black border-1 p-0.5 ">
      <SchoolName ed={ed} ModifyFunction={ModifyFunction} />
      <Degree ed={ed} ModifyFunction={ModifyFunction} />
      <Duration ed={ed} ModifyFunction={ModifyFunction} />
      <Location ed={ed} ModifyFunction={ModifyFunction} />
      <DeleteButton id={ed.id} DelFunction={DelFunction} />
    </div>
  );
}

function Education() {
  const {
    Education,
    handleAddEducation,
    handleDeleteEducation,
    handleModifyEducation,
  } = useContext(EducationContext);

  return (
    <div className="flex flex-col gap-4 overflow-hiddens">
      {Education.map((ed) => (
        <OneEducation
          key={ed.id}
          ed={ed}
          ModifyFunction={handleModifyEducation}
          DelFunction={handleDeleteEducation}
        />
      ))}
      <AddButton AddFunction={handleAddEducation} />
    </div>
  );
}

export default Education;
