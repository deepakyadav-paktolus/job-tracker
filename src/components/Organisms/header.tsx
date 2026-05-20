"use client"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ModeToggle } from "./ModeToggle"
import { Ellipsis, Funnel, Plus, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { useState } from "react"
import AddForm from "../Molecules/AddForm"

const Header = () => {
    const [results, setresults] = useState<number>(0)
    return (

        <>
            <div className="fixed top-0 z-20 bg-white/30 backdrop-blur-md border-b border-white/20 w-screen text-black dark:text-white dark:border-gray-700 dark:bg-black/30">
                <div className="flex items-center h-20 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between px-4 w-full">
                        <div className="text-4xl font-bold">TiM</div>
                        <div className="flex items-center gap-4">
                            <InputGroup className="max-w-xs">
                                <InputGroupInput placeholder="Search..." />
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupAddon align="inline-end">{results > 0 ? `${results} results` : ''}</InputGroupAddon>
                            </InputGroup>
                            <div className="cursor-pointer">Profile</div>
                            <div className="cursor-pointer">Logout</div>
                            <div className="cursor-pointer">Settings</div>
                            <div className="cursor-pointer">Help</div>
                            <div className="cursor-pointer">About</div>
                            <Avatar>
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <div className="cursor-pointer"><ModeToggle /></div>
                        </div>
                    </div>

                </div>
                <div className="h-20  flex items-center ">
                    <div className="flex w-screen justify-between items-center px-4">
                        <div className="text-4xl font-bold">Job Application Tracker</div>
                        <div className="flex gap-2">
                            <AddForm /> 
                            <Button onClick={() => toast.success('Filter applied!')}> <Funnel /></Button>
                            <Button onClick={() => toast.success('More options!')}> <Ellipsis /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header