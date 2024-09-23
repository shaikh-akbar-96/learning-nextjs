function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h3>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h3>
    );
  } else if (params.slug?.length === 1) {
    <h3> Viewing docs for feature {params.slug[0]}</h3>;
  }
  return (
    <div>
      <h2>Docs Home Page</h2>
    </div>
  );
}

export default Docs;
