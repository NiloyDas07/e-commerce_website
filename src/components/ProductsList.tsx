import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { mockData } from "@/lib/utils";

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-10 lg:grid-cols-3 xl:grid-cols-4">
      {mockData.map((product) => (
        <Card key={product?.id} className="rounded-xl bg-white p-4 shadow-md">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <img
                src={product?.imageUrl}
                alt={product?.name}
                className="w-full overflow-hidden rounded-md"
              />
            </div>

            <CardTitle className="text-lg font-bold">{product?.name}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <CardDescription className="text-gray-600">
              {product?.description}
            </CardDescription>

            <p className="text-sm font-bold text-gray-600">
              Stock: {product?.stock}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
