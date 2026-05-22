import Header from "@/components/Organisms/header"
import Card from "@/components/Molecules/card"
import SubHeader from "@/components/Organisms/sub-header"

const Dashboard = () => {
  return (
   <>
   <Header />
   {/* <SubHeader /> */}
   <div className="mt-40">Main Content</div>
   <div className="">Sidebar</div>
   {/* <Card /> */}
   <div className="flex gap-6 flex-wrap p-4 justify-center">
   {
    Array.from({ length: 20 }).map((_, index) => (
      <Card key={index} companyName={`Company ${index + 1}`} jobTitle={`Job Title ${index + 1}`} salary={`$${(index + 1) * 1000}`} description={`Job description ${index + 1}`} status="Applied" time="2 hours ago" />
    ))
   }
   </div>
   </>
  )
}

export default Dashboard