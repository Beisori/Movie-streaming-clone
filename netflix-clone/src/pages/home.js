import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Banner';
import '../Banner.css';
import MovieSlider from '../Movieslider';
import requests from '../requests';
import '../pages/home.css';

export function Home() {
  return (
    <div className='home-container'>

      <Banner></Banner>
      <MovieSlider title="Trending" requestUrl={requests.fetchTrending} />
      <MovieSlider title="Top Rated" requestUrl={requests.fetchTopRated} />
      <MovieSlider title="Popular" requestUrl={requests.fetchPopular} />
      <MovieSlider title="TV Shows" requestUrl={requests.fetchTVShows} />
      <MovieSlider title="Action" requestUrl={requests.fetchAction} />
      <MovieSlider title="Comedies" requestUrl={requests.fetchComedy} />
      <MovieSlider title="Horror" requestUrl={requests.fetchHorror} />
      <MovieSlider title="Documentaries" requestUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default Home;