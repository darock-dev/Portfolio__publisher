import styles from "./CssAnimation.module.scss";

export default function CssAnimation() {
  return (
    <section id="css-animation" className={styles.cssAnimation}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            <div>CSS 애니메이션을 활용한 텍스트</div>
            <div>
              Section01. <span>Animation</span>
            </div>
          </h2>
          <div className={styles.subTitle}>
            CSS 애니메이션을 활용하여 만든 애니메이션 효과 요소들을 적용한 텍스트
          </div>
        </div>

        <div className={styles.content}>
          <div className={`${styles.item} ${styles.ballItem}`}>
            <div className={`${styles.text}`}>D</div>
            <div className={styles.desc}>hover시 원형의 배경이 생기며 늘어납니다.</div>
          </div>
          <div className={`${styles.item} ${styles.waveItem}`}>
            <div className={`${styles.text}`} data-text="R">
              R
            </div>
            <div className={styles.desc}>hover시 텍스트가 파도처럼 차오르는 효과가 보입니다.</div>
          </div>
          <div className={`${styles.item} ${styles.gradationItem}`}>
            <div className={`${styles.text}`}>C</div>
            <div className={styles.desc}>hover시 텍스트에 점점 그라데이션 효과가 생깁니다.</div>
          </div>
          <div className={`${styles.item} ${styles.blurItem}`}>
            <div className={`${styles.text}`}>K</div>
            <div className={styles.desc}>hover시 텍스트가 블러화되며 점점 사라집니다.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
