import MainVisualImg from "../../../assets/images/main/main-visual.jpg";
import useDownloadFile from "../../../hooks/useDownloadFile";
import Button from "../../ui/Button";
import styles from "./MainVisual.module.scss";

export default function MainVisual() {
  const downloadFile = useDownloadFile();

  return (
    <section id="main-visual-sec" className={styles.mainVisual}>
      <div className={styles.imgWrap}>
        <img src={MainVisualImg} alt="" role="presentation" />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.subTitle}>Web Publisher</div>
          <h1 className={styles.title}>
            <span>Da.Rock</span>'s Portfolio
          </h1>
          <Button
            text="이력서 보기"
            color="blue"
            onClick={() => downloadFile("/files/resume.pdf", "김다희_이력서.pdf")}
          />
        </div>
        <p>&lt;AI를 사용하여 제작된 이미지 입니다.&gt;</p>
      </div>
    </section>
  );
}
