
import './App.css';
import Accordian from './component/accordian';
import ImageSlider from './component/image slidder';
import LoadMoreData from './component/load-more-data';
import RandomColor from './component/random';
import StarRating from './component/star-rating';

function App() {
  return (
    <div className="App">
     {/* accordian component */}
     {/* <Accordian/> */}
     {/* random color component */}
     {/* <RandomColor/> */}
     {/* star rating */}
     {/* <StarRating noOfStars={10}/> */}
     {/* image slider component */}
     {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      /> */}
      {/* LoadMore product component */}
      <LoadMoreData/>
      
    </div>
  );
}

export default App;
