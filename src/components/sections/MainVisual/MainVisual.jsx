import MainVisualImg from "../../../assets/images/main/main-visual.jpg";
import useOpenFile from "../../../hooks/useOpenFile";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import Button from "../../ui/Button/Button";
import styles from "./MainVisual.module.scss";

export default function MainVisual() {
  const openFile = useOpenFile();
  useScrollAnimation();

  return (
    <section id="main-visual-sec" className={styles.mainVisual}>
      <div className={styles.imgWrap}>
        <img src={MainVisualImg} alt="" role="presentation" />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={`${styles.subTitle} scroll-animate`}>Web Publisher</div>
          <h1 className={`${styles.title} scroll-animate`} style={{ transitionDelay: "0.2s" }}>
            <span>Da.Rock</span>'s Portfolio
          </h1>
          <Button
            text="이력서 보기"
            color="blue"
            onClick={() => openFile("/files/resume.pdf")}
            animateDelay={0.4}
          />
        </div>
        <p>&lt;AI를 사용하여 제작된 이미지 입니다.&gt;</p>
      </div>
    </section>
  );
}
