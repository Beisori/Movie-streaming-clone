import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';

export default Home;
export function Home() {
  return <h1>Home</h1>
}

function Slider() {
  return (
    <div className='App'>
      <Carousel />
    </div>
  )
}
