import Header from "@/components/Organisms/header";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Header isSubHeader={false}/>
      <div className="mt-20">
       
      {children}
      </div>
    </>
  );
}