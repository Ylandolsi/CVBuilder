import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ProfileSummaryArea() {
  return <Textarea placeholder="Profil Summary." className="mx-2 w-2/3" />;
}

function Role() {
  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="name" className="w-15 pl-2">
        Role :
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
function ClearSummary() {
  return (
    <Button
      className="w-30 hover:cursor-pointer hover:bg-red-400"
      onClick={() => console.log("Cleared")}
    >
      Clear Summary
    </Button>
  );
}
function ProfileSummary() {
  return (
    <div className="flex flex-col gap-4 overflow-hiddens">
      <Role />
      <ProfileSummaryArea />
      <ClearSummary />
    </div>
  );
}

export default ProfileSummary;
