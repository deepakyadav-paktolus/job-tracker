'use client'
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { trpc } from "../../utils/trpc";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const Logout = () => {
  const router = useRouter();
  const logOutMutation = trpc.auth.logout.useMutation();
  const handleLogout = async () => {
    try {
      await logOutMutation.mutateAsync();
      router.push("/login");
      toast.success("Logout successful!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    //  <Button className='bg-transparent text-text' onClick={handleLogout}>LogOut</Button>
    <Dialog>
       
      <DialogTrigger>Logout</DialogTrigger> 
      <DialogContent className="pt-6">
      
        <DialogHeader>
           
          <DialogTitle>Are you absolutely sure?</DialogTitle> 
          <DialogDescription>
             
            This action cannot be undone. This will log you out. 
          </DialogDescription> 
        </DialogHeader> 
        <DialogFooter className="sm:justify-end">
           
          <DialogClose asChild>
             
            <Button type="button">Close</Button> 
          </DialogClose> 
          <Button   disabled={logOutMutation.isPending} onClick={handleLogout}>LogOut</Button> 
        </DialogFooter> 
      </DialogContent> 
    </Dialog>
  );
};

export default Logout;
