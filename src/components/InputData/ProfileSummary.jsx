import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import React from "react";
import { useContext } from "react";
import { ProfileSummaryContext } from "../contexts/ProfileSummaryContext";

function ProfileSummaryArea() {
  const { ProfileSummary, setSummary } = useContext(ProfileSummaryContext);
  return (
    <Textarea
      value={ProfileSummary.summary}
      className="mx-2 w-2/3"
      onChange={(e) => {
        setSummary(e.target.value);
      }}
    />
  );
}

function Role() {
  const { ProfileSummary, setRole } = useContext(ProfileSummaryContext);

  return (
    <div className="flex w-full items-center gap-5 pt-2">
      <Label htmlFor="name" className="w-15 pl-2">
        Role :
      </Label>
      <Input
        type="name"
        id="name"
        className="w-1/2 "
        value={ProfileSummary.role}
        onChange={(e) => setRole(e.target.value)}
      />
    </div>
  );
}
function ClearSummary() {
  const { setSummary } = useContext(ProfileSummaryContext);
  return (
    <Button
      className="w-30 hover:cursor-pointer hover:bg-red-400"
      onClick={() => {
        setSummary("");
      }}
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
