"use client";
import Header from "@/components/Organisms/header";
import Card from "@/components/Molecules/card";
import { trpc } from "@/utils/trpc";
import { format, formatDate, formatDistanceToNow } from "date-fns";
import Link from "next/link";

const Dashboard = () => {
  const { data, isLoading } = trpc.formData.getAll.useQuery();
  console.log(data);
  return (
    <>
      <Header isSearch />
      <main>
        <div className="flex mt-40 gap-6 flex-wrap p-4 justify-center">
          {data?.map((item) => (
            <Link href={`/jobs/${item.id}`} key={item?.id}>
              <Card
                key={item?.id}
                companyName={item?.companyName}
                jobTitle={item.jobTitle}
                {...(item.salary ? { salary: item.salary } : null)}
                description={item?.role}
                status={
                  item.status.charAt(0) + item.status.slice(1).toLowerCase()
                }
                time={
                  item?.appliedDate
                    ? format(new Date(item.appliedDate), "do MMMM")
                    : "—"
                }
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
