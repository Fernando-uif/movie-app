
import Search from "@/app/components/Search/Search";
import { CardMovie } from "@/app/components/movie/card-movie/CardMovie";


const DashBoardPage = () => {


  return (
    <>
      <Search />
      <CardMovie title="Trending"  />
    </>
  );
};

export default DashBoardPage;
