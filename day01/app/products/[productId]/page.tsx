export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h2>Hello from Product {params.productId} Page</h2>
    </div>
  );
}
