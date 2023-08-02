import prismadb from "@/lib/prismadb";

interface DashboardPage {
    params: { storeId : string }
};


const DashboardPage: React.FC<DashboardPage> = async ({ params }) => {
    
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    console.log("Name :", store?.name)

    return (
        <div>
            Active Store : {store?.name}
        </div>
    )
}

export default DashboardPage;