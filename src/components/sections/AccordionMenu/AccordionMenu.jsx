import styles from "./AccordionMenu.module.scss";

export default function AccordionMenu() {
  const accordionData = [
    {
      id: 1,
      title: "Accordion 영역 01 입니다.",
      desc: "01: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
    },
    {
      id: 2,
      title: "Accordion 영역 02 입니다.",
      desc: "02: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
    },
    {
      id: 3,
      title: "Accordion 영역 03 입니다.",
      desc: "03: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
    },
    {
      id: 4,
      title: "Accordion 영역 04 입니다.",
      desc: "04: JS 하드코딩을 통해 만든 아코디언 영역입니다. 다른 아코디언 메뉴 클릭시 현재 열려있던 탭은 닫히며, 클릭된 탭이 열리는 방식입니다.",
    },
  ];

  const onClickAccordionMenu = (e) => {};

  return (
    <section id="accordion-menu" className={styles.accordionMenu}>
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
              <div className={styles.desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
