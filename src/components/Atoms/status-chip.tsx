import clsx from "clsx";

type StatusChipProps = {
  status: string;
}
const StatusChip = ({ status }: StatusChipProps) => {
     const statusClass  = clsx(
      status === 'Applied' && 'bg-blue-100 text-blue-800',
      status === 'Shortlisted' && 'bg-green-100 text-green-800',
      status === 'Rejected' && 'bg-red-100 text-red-800',
      status === 'Interview' && 'bg-yellow-100 text-yellow-800',
      status === 'Offered' && 'bg-green-100 text-green-800',
      status === 'Hired' && 'bg-green-100 text-green-800',
      status === 'Ghosted' && 'border border-gray-200',
      status === 'Rejected' && 'bg-red-100 text-red-800',
      status === 'Others' && 'bg-gray-100 text-gray-800'
    )
  return (
    <span className={clsx("px-2 py-1 text-xs rounded-md", statusClass)}>
      {status}
    </span>
  )
}

export default StatusChip