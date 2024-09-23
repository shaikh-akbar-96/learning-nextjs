function ProductDetails({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h3>Details About Product {params.productId}</h3>
    </div>
  );
}

export default ProductDetails;
