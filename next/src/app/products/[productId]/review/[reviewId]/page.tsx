export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div>
      <h1>Review: {params.reviewId}</h1>
    </div>
  );
}
