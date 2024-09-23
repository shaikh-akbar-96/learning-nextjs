import { notFound } from "next/navigation";

function ReviewsDetails({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h2>
        Review {params.reviewsId} for Product {params.productId}
      </h2>
    </div>
  );
}

export default ReviewsDetails;
