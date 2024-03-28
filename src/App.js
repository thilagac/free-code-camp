import "./App.css";
import TabTest from "./component/CUSTOM-TABS/tab-test";
import Tabs from "./component/CUSTOM-TABS/tabs";
import Accordian from "./component/accordian";
import GithubProfilio from "./component/github-profile-finder";
import ImageSlider from "./component/image slidder";
import LightDarkMode from "./component/light-dark mode";
import LoadMoreData from "./component/load-more-data";
import QRcodeGenerator from "./component/qr--code-generator";
import RandomColor from "./component/random";
import ScrollIndicator from "./component/scroll-indicator";
import StarRating from "./component/star-rating";
import TreeView from "./component/tree";
import menus from "./component/tree/data";
import ModalTest from "./component/custom-modal-popup/modal-test";
import SearchAutocomplete from "./component/search-autocomplete-with-api";
import TicTacToe from "./component/tic-tact-toe";
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
      {/* <LoadMoreData/> */}

      {/* tree view component /menu UI component /recursive navigation menu  */}
      {/* <TreeView menus={menus}/> */}

      {/* qr code generator */}
      {/* <QRcodeGenerator/> */}

      {/* Drak mode -Light Mode */}
      {/* <LightDarkMode/> */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
     */}
    {/* customer tabs component  */}
    {/* <TabTest/> */}

    {/* github profilo finder */}
    {/* <GithubProfilio/> */}
       {/* Custom Modal Component */}
      {/* <ModalTest/> */}
     {/* Search Autocomplete */}
     {/* <SearchAutocomplete/> */}
     {/* tic tac toe */}
     <TicTacToe/>
    </div>
  );
}

export default App;
