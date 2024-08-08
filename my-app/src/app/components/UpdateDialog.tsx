import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";

export function UpdateDialog({handleUpdate
}: {
    handleUpdate: ({rank, percentile, score}: {rank: number, percentile: number, score: number}) => void,
}) {

  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);

  const [open,setOpen] = useState(false);


  return (
    <Dialog
        open={open}
        onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white" onClick={() => setOpen(true)}>Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update scores</DialogTitle>
          <DialogDescription>
            Make changes to your scores here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rank" className="text-left col-span-3">
              Update your <b>Rank</b>
            </Label>
            <Input id="rank" value={rank} onChange={(e) => setRank(parseInt(e.target.value))}  type="number"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="percentile" className="text-left col-span-3">
              Update your <b>Percentile</b>
            </Label>
            <Input id="percentile" value={percentile}  onChange={(e) => setPercentile(parseInt(e.target.value))} type="number"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="score" className="text-left col-span-3">
              
              Update your <b>Current Score (out of 15)</b>
            </Label>
            <Input id="score" value={score}  onChange={(e) => setScore(parseInt(e.target.value))} type="number"/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => {
            handleUpdate({rank, percentile, score});
            setOpen(false);
            }}>
                Save changes
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
