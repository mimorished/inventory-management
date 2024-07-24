import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";


export default async function Warehouses() {
  const warehouses = await getData('warehouses');
  const columns = ["title", "description","location", "warehouseType" ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/warehouses/new" title="Warehouse" />

      <div className="my-4 p-8">
      <DataTable data={warehouses} columns={columns}/>
      </div>

    </div>
  )
}
