'use client'
import  { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Search } from "lucide-react";

const NavSearch = () => {
      const [results, setresults] = useState<number>(0);
  return (
    <>
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          {results > 0 ? `${results} results` : ""}
        </InputGroupAddon>
      </InputGroup>
    </>
  );
};

export default NavSearch;
