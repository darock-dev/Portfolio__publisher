import MainLayout from "./components/layout/MainLayout/MainLayout";
import AccordionMenu from "./components/sections/AccordionMenu/AccordionMenu";
import CssAnimation from "./components/sections/CssAnimation/CssAnimation";
import MainVisual from "./components/sections/MainVisual/MainVisual";
import "./styles/App.scss";

function App() {
  return (
    <>
      <MainLayout>
        <MainVisual />
        <CssAnimation />
        <AccordionMenu />
      </MainLayout>
    </>
  );
}

export default App;
