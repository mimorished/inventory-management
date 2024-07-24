import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";


export default async function Brands() {
  const brands = await getData('brands');
  const columns = ["title", "createdAt"]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/brands/new" title="Brands" />

      <div className="my-4 p-8">
      <DataTable data={brands} columns={columns}/>
      </div>

    </div>
  )
}
