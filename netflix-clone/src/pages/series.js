import Serieslist from "../SeriesList";
import requests from "../requests";

export function Series() {
  return <Serieslist requestUrl={requests.fetchTVShows}></Serieslist>
}

export default Series;