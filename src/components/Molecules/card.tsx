"use client";

import { ReactEventHandler, useState } from "react";
import { Bookmark } from "lucide-react";
import StatusChip from "../Atoms/status-chip";
type CardProps = {
  companyName: string;
  jobTitle: string;
  salary?: string | undefined;
  description?: string;
  status: string;
  time?: string;
};

const Card = ({
  companyName,
  jobTitle,
  salary,
  description,
  status,
  time,
}: CardProps) => {
  const [bookmarked, setBookmarked] = useState(false);
const handleBookmark = (e) => {
    e.preventDefault();
  e.stopPropagation(); 

  console.log("Saved job:");
}
  return (
    <div className="w-72 rounded-xl border bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
            {companyName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="font-semibold text-sm">{companyName}</h2>
            <p className="text-xs text-gray-500">{jobTitle}</p>
          </div>
        </div>
        <button
          onClick={handleBookmark}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Bookmark
            className={`w-5 h-5 ${bookmarked ? "fill-yellow-400 text-yellow-400" : ""}`}
          />
        </button>
      </div>
      {description && (
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      )}
      <div className="mt-4 flex items-center justify-between">
        <StatusChip status={status} />

        {salary && (
          <span className="text-xs font-medium text-green-600">{salary}</span>
        )}
      </div>
      {time && <p className="mt-2 text-[10px] text-gray-400">{time}</p>}
    </div>
  );
};

export default Card;