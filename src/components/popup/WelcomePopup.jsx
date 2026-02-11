import { useState } from "react";
import popupImg from "../../assets/images/main/popup_img.png";

export default function WelcomePopup() {
  const STORAGE_KEY = "portfolio_popup_expriry"; // 로컬스토리지에 저장할 키 이름

  const [isVisible, setIsVisible] = useState(() => {
    const expiry = localStorage.getItem(STORAGE_KEY);
    const now = new Date().getTime();

    // 1. 만료일(expiry) 기록이 아예 없거나 (처음 방문)
    // 2. 현재 시간이 만료일보다 지났다면 (안 보기 기간 끝남)
    // -> true (보여줌)
    if (!expiry || now > parseInt(expiry)) {
      return true;
    }

    // 아니라면 -> false (숨김)
    return false;
  });

  // 3. 닫기 핸들러 (days가 0이면 그냥 닫기, 1 이상이면 그만큼 안 보기)
  const handleClose = (days = 0) => {
    if (days > 0) {
      // 현재 시간 + (일 * 24시간 * 60분 * 60초 * 1000밀리초)
      const expiryDate = new Date().getTime() + days * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, expiryDate);
    }

    // 화면에서 사라지게 함
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="hidden md:flex fixed top-32.5 right-[20%] z-9999 justify-center items-center">
      <div className="bg-white w-90 max-w-[90%] rounded-[10px] shadow-lg overflow-hidden flex-col">
        <div className="p-0 flex">
          <img className="max-w-full h-auto" src={popupImg} alt="" />
        </div>

        <div className="p-0 bg-black flex">
          <button className="px-3 py-2 border-r border-r-gray-600 bg-black text-white text-sm cursor-pointer w-[40%]" onClick={() => handleClose(1)}>오늘 하루 안 보기</button>
          <button className="px-3 py-2 border-r border-r-gray-600 bg-black text-white text-sm cursor-pointer w-[40%]" onClick={() => handleClose(7)}>일주일간 안 보기</button>
          <button className="px-3 py-2 bg-blue-500 text-white text-sm cursor-pointer w-[20%]" onClick={() => handleClose(0)}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
