import ResultContainer from "./containers/ResultContainer";
import ItemContainer from "./containers/ItemContainer";
import PopUpContainer from "./containers/PopUpContainer";
import ErrorModal from "./components/ErrorModal";
import { ItemProvider } from "./contexts/ItemContext";
import { useSelector } from "react-redux";

const App = () => {
  const modal = useSelector((state) => state.modal);
  return (
    <>
      {modal && <ErrorModal />}
      <ItemProvider>
        <div className="wrap">
          <PopUpContainer />
          <ItemContainer />
          <ResultContainer />
        </div>
      </ItemProvider>
    </>
  );
};

export default App;
