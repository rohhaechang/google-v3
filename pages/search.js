import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";


export default function Search({results}) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>  
      </Head>

      {/* Search Header */}      

      <SearchHeader />

      {/** Search web and Images Results */}

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ):(
        <SearchResults results={results} />
      )}

    </div>
  )
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1"
  // mockData는 가짜 데이터로, 실제로 서버에서 데이터를 가져오지 않고 미리 만들어놓은 데이터를 가져오는 것
  // 지금은 서버에서 가져오지 않는 단계이므로, mock data를 만들어놓고, true로 설정하여 Response.js에 json으로 만들어놓은 데이터를 가져오도록 하였다.
  const mockData = false;
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response) => response.json())
  return {
    props: {
      results: data
    }
  }
}