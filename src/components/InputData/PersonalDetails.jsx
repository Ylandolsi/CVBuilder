import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { PersonalDetailsContext } from "../contexts/PersonalDetailsContext";

function FullName() {
  const { setName, PersonalDetails } = useContext(PersonalDetailsContext);
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="name" className="w-30">
        Full Name :
      </Label>
      <Input
        type="name"
        id="name"
        className="w-1/2 "
        value={PersonalDetails.name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
function Email() {
  const { setEmail, PersonalDetails } = useContext(PersonalDetailsContext);

  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="email" className="w-30">
        Email :
      </Label>
      <Input
        type="email"
        id="email"
        className="w-1/2"
        value={PersonalDetails.email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function Mobile() {
  const { setPhone, PersonalDetails } = useContext(PersonalDetailsContext);
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="number" className="w-30">
        Phone Number :
      </Label>
      <Input
        id="number"
        className="w-1/2 "
        value={PersonalDetails.phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}

function ClearAll() {
  const { setName, setEmail, setPhone } = useContext(PersonalDetailsContext);
  return (
    <Button
      className="w-25 hover:cursor-pointer hover:bg-red-400"
      onClick={() => {
        setPhone("");
        setName("");
        setEmail("");
      }}
    >
      Clear All
    </Button>
  );
}

function PersonalDetails() {
  return (
    <div className="flex flex-col gap-4">
      <FullName />
      <Email />
      <Mobile />
      <ClearAll />
    </div>
  );
}

export default PersonalDetails;
