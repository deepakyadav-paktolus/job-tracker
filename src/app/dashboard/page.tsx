"use client";
import Header from "@/components/Organisms/header";
import Card from "@/components/Molecules/card";
import SubHeader from "@/components/Organisms/sub-header";
import { trpc } from "@/utils/trpc";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

const Dashboard = () => {
  const { data, isLoading } = trpc.formData.getAll.useQuery();
  console.log(data);
  return (
    <>
      <Header />
      <div className="mt-40">Main Content</div>
      <div className="">Sidebar</div>
      <div className="flex gap-6 flex-wrap p-4 justify-center">
        {data?.map((item, index) => (
         <Link href={`/jobs/${item.id}`}> <Card
            key={item.id}
            companyName={item?.companyName}
            jobTitle={item.jobTitle}
             {...(item.salary ? { salary: item.salary } : null)}
            description={item?.role}
            status={item.status.charAt(0) + item.status.slice(1).toLowerCase()}
            time={formatDistanceToNow(new Date(item?.appliedDate), {
              addSuffix: true,
            })}
          /></Link>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
