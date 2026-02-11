import Button from "../../ui/Button/Button";
import useOpenFile from "../../../hooks/useOpenFile";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

export default function Contact() {
  const baseUrl = import.meta.env.BASE_URL;
  const openFile = useOpenFile();
  useScrollAnimation();

  return (
    <section id="contact-sec" className="w-full h-screen flex items-center justify-center flex-col bg-gray-900">
      <div className="text-center text-[36px] md:text-[64px] font-medium text-white mb-12 md:mb-25 leading-12 md:leading-21.5">
        <div className="scroll-animate">이상으로 포트폴리오를 마칩니다.</div>
        <div className="scroll-animate">소중한 시간 내어 봐주셔서 감사합니다.</div>
        <div className="scroll-animate">함께하고 싶어지셨다면, 언제든 연락 주세요.</div>
      </div>
      <div className="flex gap-5">
        <Button
          text="이력서 보기"
          color="white"
          onClick={() => openFile(`${baseUrl}files/resume.pdf`)}
        />
      </div>
    </section>
  );
}
