import MainLayout from "./components/layout/MainLayout/MainLayout";
import MainVisual from "./components/sections/MainVisual/MainVisual";
import "./styles/App.scss";

function App() {
  return (
    <>
      <MainLayout>
        <MainVisual />
      </MainLayout>
    </>
  );
}

export default App;
