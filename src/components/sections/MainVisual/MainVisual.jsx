import MainVisualImg from "../../../assets/images/main/main-visual.jpg";
import useOpenFile from "../../../hooks/useOpenFile";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Button from "../../ui/Button/Button";

export default function MainVisual() {
  const baseUrl = import.meta.env.BASE_URL;
  const openFile = useOpenFile();
  useScrollAnimation();

  return (
    <section id="main-visual-sec" className="relative w-full h-[calc(100vh-65px)] 3xl:h-256 mt-15.25">
      <div className="absolute w-full h-full top-0 left-0">
        <img className="w-full h-full object-cover z-2" src={MainVisualImg} alt="" role="presentation" />
      </div>
      <div className="inner h-full relative flex flex-col justify-center pl-5">
        <div className="">
          <div className="text-2xl md:text-4xl font-bold mb-4 md:mb-5 scroll-animate">Web Publisher</div>
          <h1 className="text-[40px] md:text-[72px] font-bold mb-9.5 md:mb-16 scroll-animate" style={{ transitionDelay: "0.2s" }}>
            <span className="text-blue-500">Da.Rock</span>'s Portfolio
          </h1>
          <Button
            text="이력서 보기"
            color="blue"
            onClick={() => openFile(`${baseUrl}files/resume.pdf`)}
            animateDelay={0.4}
          />
        </div>
        <p className="absolute overlay-text">&lt;AI를 사용하여 제작된 이미지 입니다.&gt;</p>
      </div>
    </section>
  );
}
