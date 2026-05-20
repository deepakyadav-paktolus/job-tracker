'use client'
import StatusChip from "../Atoms/status-chip"
import Badge from "../Atoms/badge"
import { Bookmark, BookmarkCheck } from "lucide-react"
import { useState } from "react"

const Card = () => {
    const [bookmarkd, setbookmarkd] = useState(false)
    return (
        <>
            <div className="h-50 w-70 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="p-4">

                    <div className="flex items-center gap-2 relative">
                        <span className="h-8 w-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full text-xl flex items-center justify-center">C</span>
                        <span onClick={() => setbookmarkd(!bookmarkd)} className="absolute top-1 right-1 rounded-full">  {bookmarkd ? <Bookmark className="fill-foreground" /> : <Bookmark />}</span>
                        <h1 className="text-lg font-semibold">Company Name</h1>
                    </div>
                    <h3 className="text-lg font-semibold">Job Title</h3>
                    <p>Salary: $100,000</p>
                    <p className="text-gray-600 dark:text-gray-400 text-md font-light whitespace-nowrap overflow-hidden text-ellipsis">Job description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta facere itaque quo ut aspernatur illum. Est </p>
                    <StatusChip status="Applied" />
                    {/* <div className="flex flex-wrap gap-2">  <Badge badge="Applied" />
            <Badge badge="Shortlisted" />
            <Badge badge="Rejected" />
            <Badge badge="Interview" />
            <Badge badge="Offer" />
            <Badge badge="Accepted" /></div> */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-light">Time: 2 hours ago</p>
                </div>
            </div>
        </>
    )
}

export default Card