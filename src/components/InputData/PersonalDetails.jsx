import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FullName() {
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="name" className="w-30">
        Full Name :
      </Label>
      <Input
        type="name"
        id="name"
        className="w-1/2 container"
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
      <Input id="number" className="w-1/2 container" placeholder="9999912" />
    </div>
  );
}
function PersonalDetails() {
  return (
    <div className="flex flex-col gap-4">
      <FullName />
      <Email />
      <Mobile />
    </div>
  );
}

export default PersonalDetails;
