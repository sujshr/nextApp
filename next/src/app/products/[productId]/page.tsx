export default function page({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>Product Id: {params.productId}</h1>
    </div>
  );
}
