export default function useDownloadFile() {
  const downloadFile = (url, fileName) => {
    // 가상의 a태그 생성 (다운로드 기능 구현을 위해)
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return downloadFile;
}
