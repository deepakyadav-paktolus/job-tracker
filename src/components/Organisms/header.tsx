import { toast } from "sonner";
import { Button } from "../ui/button";
import { Ellipsis } from "lucide-react";
import AddForm from "../../app/form/AddForm";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Nav from "../Molecules/Nav";
import NavSearch from "../Molecules/search";
import Link from "next/link";
const Header = ({
  isSubHeader = true,
  isSearch = false,
}: {
  isSubHeader?: boolean;
  isSearch?: boolean;
}) => {
  return (
    <>
      <div className="fixed top-0 z-20 bg-white/30 backdrop-blur-md border-b  border-white/20 w-screen text-black dark:text-white dark:border-gray-700 dark:bg-black/30">
        <div className="flex items-center h-20 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between px-4 w-full">
            <Link
              href={"/dashboard"}
              className="text-4xl cursor-pointer font-bold"
            >
              TiM
            </Link>
            <div className="flex items-center gap-4">
              {isSearch && <NavSearch />}
              <Nav aria-label="Main navigation" />
            </div>
          </div>
        </div>
        {isSubHeader && (
          <div className="h-20  flex items-center ">
            <div className="flex w-screen justify-between items-center px-4">
              <div className="text-4xl font-bold">Job Application Tracker</div>
              <div className="flex gap-2">
                <AddForm />
                <Select aria-label="Filter applications by status">
                  <SelectTrigger>
                    <SelectValue
                      className="bg text-white"
                      placeholder="Filter"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="ALL">All</SelectItem>
                      <SelectItem value="APPLIED">Applied</SelectItem>
                      <SelectItem value="INTERVIEW">Interview</SelectItem>
                      <SelectItem value="REJECTED">Rejected</SelectItem>
                      <SelectItem value="GHOSTED">Ghosted</SelectItem>
                      <SelectItem value="OFFERED">Offered</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button
                  aria-label="More options"
                  onClick={() => toast.success("More options!")}
                >
                  <Ellipsis />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
