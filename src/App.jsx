import MainLayout from "./components/layout/MainLayout/MainLayout";
import WelcomePopup from "./components/popup/WelcomePopup";
import AccordionMenu from "./components/sections/AccordionMenu/AccordionMenu";
import Contact from "./components/sections/Contact/Contact";
import CssAnimation from "./components/sections/CssAnimation/CssAnimation";
import Form from "./components/sections/Form/Form";
import MainVisual from "./components/sections/MainVisual/MainVisual";
import Slide from "./components/sections/Slide/Slide";
import "./styles/App.scss";

function App() {
  return (
    <>
      <WelcomePopup />

      <MainLayout>
        <MainVisual />
        <CssAnimation />
        <AccordionMenu />
        <Slide />
        <Form />
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
