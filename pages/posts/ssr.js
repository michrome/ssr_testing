function Page({ res }) {
  console.log(res.test);
  return <h1>First Post</h1>;
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = { test: "test" };

  // Pass data to the page via props
  return { props: { res } };
}

export default Page;
