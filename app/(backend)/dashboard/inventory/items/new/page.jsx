
import FormHeader from "@/components/dashboard/FormHeader";
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import { getData } from "@/lib/getData";
import FixedHeader from "@/components/dashboard/FixedHeader";

export default async function NewItem() {
  const categoriesData = getData('categories');
  const unitsData = getData('units');
  const brandsData = getData('brands');
  const warehousesData = getData('warehouses');
  const [categories,units,brands,warehouses] = await Promise.all([categoriesData, unitsData, brandsData, warehousesData]);

  return (
    <div>

<FormHeader title="New Item" href="/dashboard/inventory" />


      <CreateItemForm categories={categories} units={units} brands={brands} warehouses={warehouses}/>
    </div>
  );
}
