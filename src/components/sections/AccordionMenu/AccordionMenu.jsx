import styles from "./AccordionMenu.module.scss";
import accImg01 from "../../../assets/images/main/accordion_img01.png";
import accImg02 from "../../../assets/images/main/accordion_img02.png";
import accImg03 from "../../../assets/images/main/accordion_img03.png";
import accImg04 from "../../../assets/images/main/accordion_img04.png";

export default function AccordionMenu() {
  const accordionData = [
    {
      id: 1,
      title: "Accordion 영역 01 입니다.",
      desc: "01: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
      imgSrc: accImg01,
    },
    {
      id: 2,
      title: "Accordion 영역 02 입니다.",
      desc: "02: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
      imgSrc: accImg02,
    },
    {
      id: 3,
      title: "Accordion 영역 03 입니다.",
      desc: "03: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
      imgSrc: accImg03,
    },
    {
      id: 4,
      title: "Accordion 영역 04 입니다.",
      desc: "04: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
      imgSrc: accImg04,
    },
  ];

  // 아코디언 메뉴 클릭 이벤트
  const onClickAccordionMenu = (e) => {
    const clickMenu = e.currentTarget;
    const allMenu = document.querySelectorAll(`#accordion-menu-sec .${styles.menu}`);

    // 모든 메뉴를 순회하면서 클릭된 메뉴가 아니면 닫기
    allMenu.forEach((item) => {
      if (item !== clickMenu) {
        item.classList.remove(styles.active);
      }
    });

    clickMenu.classList.toggle(styles.active);
  };

  return (
    <section id="accordion-menu-sec" className={styles.accordionMenuSec}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            <div>순수 Javascript로 만들어 낸</div>
            <div>
              Section02. <span>Accordion Menu</span>
            </div>
          </h2>
          <div className={styles.subTitle}>순수 자바스크립트로 코드로 만든 Accordion Menu</div>
        </div>
        <div className={styles.content}>
          {accordionData.map((item) => (
            <div key={item.id} className={styles.menu} onClick={onClickAccordionMenu}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>
                <div className={styles.imgWrap}>
                  <img src={item.imgSrc} />
                  <p>&lt;AI를 사용하여 제작된 이미지 입니다.&gt;</p>
                </div>
                <div>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
