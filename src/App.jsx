import MainLayout from "./components/layout/MainLayout/MainLayout";
import CssAnimation from "./components/sections/CssAnimation/CssAnimation";
import MainVisual from "./components/sections/MainVisual/MainVisual";
import "./styles/App.scss";

function App() {
  return (
    <>
      <MainLayout>
        <MainVisual />
        <CssAnimation />
      </MainLayout>
    </>
  );
}

export default App;
