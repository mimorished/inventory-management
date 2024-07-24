import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";


export default async function Categories() {
  const categories = await getData('categories');
  const columns = ["title", "description"]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/categories/new" title="Categories" />

      <div className="my-4 p-8">
      <DataTable data={categories} columns={columns}/>
      </div>

    </div>
  )
}
