
import StatusChip from "@/components/Atoms/status-chip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/Organisms/ModeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Login from "./login/login";

export default function Home() {
  return (
   <>
   <main className="flex flex-col items-center justify-center min-h-screen">
    {/* <Login /> */}
    <ModeToggle />
    <Input type="email" placeholder="Email" />
    <Input type="email" placeholder="Email" />
    <Input type="email" placeholder="Email" />
    <Button variant="ghost">Submit</Button>
    <Button variant="default">Submit</Button>
    <Button variant="link">Submit</Button>
    <Button variant="destructive">Submit</Button>
    <Button variant="outline">Submit</Button>
    <StatusChip status="Applied" />
    <StatusChip status="Shortlisted" />
    <StatusChip status="Rejected" />
    <StatusChip status="Interview" />
    <StatusChip status="Offer" />
    <StatusChip status="Hired" />
    <StatusChip status="Rejected" />
    {/* <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}
   </main>
   </>
  );
}
