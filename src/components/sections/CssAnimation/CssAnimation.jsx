import useScrollAnimation from "../../../hooks/useScrollAnimation";

export default function CssAnimation() {
  useScrollAnimation();

  return (
    <section id="css-animation-sec" className="section bg-gray-50">
      <div className="inner">
        <div className="">
          <h2 className="section-title scroll-animate">
            <div>CSS 애니메이션을 활용한 텍스트</div>
            <div>
              Section01. <span className="text-blue-500">Animation</span>
            </div>
          </h2>
          <div className="section-subtitle scroll-animate">
            CSS 애니메이션을 활용하여 만든 애니메이션 효과 요소들을 적용한 텍스트
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="animation-item scroll-animate ball-item md:flex-row-reverse text-center md:text-right">
            <button className="animation-item-text">D</button>
            <div className="animation-item-desc">hover시 원형의 배경이 생기며 늘어납니다.</div>
          </div>
          <div className="animation-item scroll-animate wave-item md:text-left">
            <button className="animation-item-text" data-text="R">
              R
            </button>
            <div className="animation-item-desc">hover시 텍스트가 파도처럼 차오르는 효과가 보입니다.</div>
          </div>
          <div className="animation-item scroll-animate gradation-item md:flex-row-reverse text-center md:text-right">
            <button className="animation-item-text">C</button>
            <div className="animation-item-desc">hover시 텍스트에 점점 그라데이션 효과가 생깁니다.</div>
          </div>
          <div className="animation-item scroll-animate blur-item md:text-left">
            <button className="animation-item-text">K</button>
            <div className="animation-item-desc">hover시 텍스트가 블러화되며 점점 사라집니다.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
