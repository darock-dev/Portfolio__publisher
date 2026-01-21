import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    // 스크롤 감시할 대상 찾기
    const targets = document.querySelectorAll(".scroll-animate");

    // 감시자 설정
    // IntersectionObserver: 감시자 생성
    // entries: 감시 대상들의 정보가 담긴 배열
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // isIntersecting: 감시 대상이 화면에 보이는지 여부
            entry.target.classList.add("on"); // 화면에 보이면 on 클래스 추가
          } else {
            entry.target.classList.remove("on"); // 화면에 보이지 않으면 on 클래스 제거
          }
        });
      },
      { threshold: 0.2 } // 20% 보이면 실행
    );

    // 감시 시작
    targets.forEach((target) => observer.observe(target));

    // 페이지 떠나면 감시 해제
    return () => {
      observer.disconnect();
    };
  }, []);
}
