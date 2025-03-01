import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function FullName() {
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="name" className="w-30">
        Full Name :
      </Label>
      <Input
        type="name"
        id="name"
        className="w-1/2 "
        placeholder="Jack Martinez"
      />
    </div>
  );
}
function Email() {
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="email" className="w-30">
        Email :
      </Label>
      <Input
        type="email"
        id="email"
        className="w-1/2"
        placeholder="JackMartinez@gmail.com"
      />
    </div>
  );
}

function Mobile() {
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="number" className="w-30">
        Phone Number :
      </Label>
      <Input id="number" className="w-1/2 " placeholder="9999912" />
    </div>
  );
}

function ClearAll() {
  return (
    <Button
      className="w-25 hover:cursor-pointer hover:bg-red-400"
      onClick={() => console.log("Cleared")}
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
