import SideBar from "../components/SideBar";

function Page({ res }) {
  console.log(res.test);
  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

// This gets called on every request
export function getServerSideProps() {
  // Fetch data from external API
  const res = { test: "testing" };

  // Pass data to the page via props
  return { props: { res } };
}

export default Page;
