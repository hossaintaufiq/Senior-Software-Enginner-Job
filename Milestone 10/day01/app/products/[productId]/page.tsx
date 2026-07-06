export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
    const  productId  = (await params).productId; 
  return (
    <div>
      <h2>Hello from Product Page {productId}</h2>
    </div>
  );
}
