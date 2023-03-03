export async function getServerSideProps() {
  return {
    props: {
      data: 52,
    }, // will be passed to the page component as props
  };
}
export default function Home({ data }: any) {
  return <h1>we got the headers: {data}</h1>;
}
