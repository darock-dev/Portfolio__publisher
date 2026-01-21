import styles from "./Contact.module.scss";
import Button from "../../ui/Button";
import useDownloadFile from "../../../hooks/useDownloadFile";

export default function Contact() {
  const downloadFile = useDownloadFile();

  return (
    <section id="contact-sec" className={styles.contactSec}>
      <div className={styles.textWrap}>
        <div>이상으로 포트폴리오를 마칩니다.</div>
        <div>소중한 시간 내어 봐주셔서 감사합니다.</div>
        <div>함께하고 싶어지셨다면, 언제든 연락 주세요.</div>
      </div>
      <div className={styles.buttonWrap}>
        <Button
          text="이력서 보기"
          color="white"
          onClick={() => downloadFile("/files/resume.pdf", "김다희_이력서.pdf")}
        />
      </div>
    </section>
  );
}
