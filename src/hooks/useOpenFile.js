export default function useOpenFile() {
  const openFile = (url) => {
    // 가상의 a태그 생성
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return openFile;
}
