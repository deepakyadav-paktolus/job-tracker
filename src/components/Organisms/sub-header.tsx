'use client'
import { Ellipsis, Funnel, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { toast } from "sonner"

const SubHeader = () => {
    return (
        <div className="h-20 fixed top-20 z-20 w-full bg-white/30 backdrop-blur-md border-b border-white/20 flex items-center ">
            <div className="flex w-screen justify-between items-center px-4"> 
                <div className="text-4xl font-bold">Job Application Tracker</div> 
                <div className="flex gap-2">
                   <Button onClick={() => toast.success('New job application added!')}>New <Plus /> </Button>
                   <Button onClick={() => toast.success('Filter applied!')}> <Funnel /></Button>
                   <Button onClick={() => toast.success('More options!')}> <Ellipsis /></Button>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
