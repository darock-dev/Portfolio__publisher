import useScrollAnimation from "../../../hooks/useScrollAnimation";
import styles from "./Filter.module.scss";
import addOutlineIcon from "../../../assets/images/icon/add-outline.png"
import prodImg01 from "../../../assets/images/product/f_01.png";
import prodImg02 from "../../../assets/images/product/f_02.png";
import prodImg03 from "../../../assets/images/product/f_03.png";
import prodImg04 from "../../../assets/images/product/f_04.png";
import prodImg05 from "../../../assets/images/product/f_05.png";
import prodImg06 from "../../../assets/images/product/f_06.png";
import prodImg07 from "../../../assets/images/product/f_07.png";
import prodImg08 from "../../../assets/images/product/g_01.png"
import prodImg09 from "../../../assets/images/product/g_02.png"
import prodImg10 from "../../../assets/images/product/g_03.png"
import prodImg11 from "../../../assets/images/product/g_04.png"
import prodImg12 from "../../../assets/images/product/g_05.png"
import prodImg13 from "../../../assets/images/product/g_06.png"
import prodImg14 from "../../../assets/images/product/g_07.png"
import prodImg15 from "../../../assets/images/product/g_08.png"
import prodImg16 from "../../../assets/images/product/g_09.png"
import prodImg17 from "../../../assets/images/product/m_01.png"
import prodImg18 from "../../../assets/images/product/m_02.png"
import prodImg19 from "../../../assets/images/product/m_03.png"
import prodImg20 from "../../../assets/images/product/m_04.png"
import prodImg21 from "../../../assets/images/product/s_01.png"
import prodImg22 from "../../../assets/images/product/s_02.png"
import prodImg23 from "../../../assets/images/product/s_03.png"
import prodImg24 from "../../../assets/images/product/s_04.png"
import prodImg25 from "../../../assets/images/product/s_05.png"
import prodImg26 from "../../../assets/images/product/s_06.png"
import { useState } from "react";

const prodData = [
  {id: 1, category: '패브릭', img: prodImg01, color: 'white', name: '부드러운 이불', price: 40000},
  {id: 2, category: '패브릭', img: prodImg02, color: 'ivory', name: '포근한 베개', price: 27000},
  {id: 3, category: '패브릭', img: prodImg03, color: 'ivory', name: '푹신한 쿠션', price: 13000},
  {id: 4, category: '패브릭', img: prodImg04, color: 'gray', name: '침구 세트(gray)', price: 104000},
  {id: 5, category: '패브릭', img: prodImg05, color: 'white', name: '침구 세트(white)', price: 104000},
  {id: 6, category: '패브릭', img: prodImg06, color: 'ivory', name: '침구 세트(ivory)', price: 104000},
  {id: 20, category: '패브릭', img: prodImg07, color: 'gray', name: '침구 세트(gray)', price: 104000},
  {id: 7, category: '가구', img: prodImg08, color: 'ivory', name: '편안한 소파', price: 61000},
  {id: 8, category: '가구', img: prodImg09, color: 'burlywood', name: '수납이 좋은 책장', price: 86000},
  {id: 9, category: '가구', img: prodImg10, color: 'burlywood', name: '의자 세트(3)', price: 75000},
  {id: 10, category: '가구', img: prodImg11, color: 'burlywood', name: '간이 테이블', price: 45000},
  {id: 11, category: '가구', img: prodImg12, color: 'white', name: '옷 걸기에 좋은행거', price: 75000},
  {id: 21, category: '가구', img: prodImg13, color: 'burlywood', name: '식탁의자 세트', price: 215000},
  {id: 22, category: '가구', img: prodImg14, color: 'burlywood', name: '옷 수납장', price: 85000},
  {id: 23, category: '가구', img: prodImg15, color: 'burlywood', name: '물품 수납장', price: 75000},
  {id: 24, category: '가구', img: prodImg16, color: 'burlywood', name: '편안한 의자', price: 55000},
  {id: 12, category: '문구', img: prodImg17, color: 'ivory', name: '수납력이 좋은 필통', price: 8000},
  {id: 13, category: '문구', img: prodImg18, color: 'burlywood', name: '수납력이 좋은 박스', price: 8000},
  {id: 14, category: '문구', img: prodImg19, color: 'white', name: '테이프 및 펜 거치대', price: 12000},
  {id: 25, category: '문구', img: prodImg20, color: 'burlywood', name: '다용도 거치대', price: 16000},
  {id: 15, category: '수납', img: prodImg21, color: 'white', name: '다용도 상자', price: 6000},
  {id: 16, category: '수납', img: prodImg22, color: 'burlywood', name: '2단 우드 수납 박스', price: 12000},
  {id: 17, category: '수납', img: prodImg23, color: 'white', name: '투명 수납함(S)', price: 5000},
  {id: 18, category: '수납', img: prodImg24, color: 'white', name: '철제 바구니', price: 5000},
  {id: 19, category: '수납', img: prodImg25, color: 'ivory', name: '수건 바구니', price: 10000},
  {id: 26, category: '수납', img: prodImg26, color: 'white', name: '투명 수납함(L)', price: 5000},
]

export default function Filter() {
  useScrollAnimation();

  // 아코디언 상태 관리
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  // 필터 조건 상태 관리
  const [category, setCategory] = useState("전체");
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 화면에 렌더링할 필터링 데이터
  const [filteredData, setFilteredData] = useState(prodData);

  // 색상 체크박스 변경 핸들러
  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((color) => color !== value));
    }
  };

  // 필터 적용 함수 (상품보기 버튼 누를 때 실행)
  const applyFilters = (targetCategory = category) => {
    let result = prodData;

    // 카테고리 필터링
    if (targetCategory !== "전체") {
      result = result.filter((item) => item.category === targetCategory);
    }

    // 색상 필터링
    if (selectedColors.length > 0) {
      result = result.filter((item) => selectedColors.includes(item.color));
    }

    // 가격 필터링
    const min = minPrice ? parseInt(minPrice, 10) : 0;
    const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;
    result = result.filter((item) => item.price >= min && item.price <= max);

    setFilteredData(result);
  };

  // 카테고리 탭 클릭 핸들러 (클릭 즉시 필터링 반영)
  const handleCategoryClick = (cat) => {
    setCategory(cat);
    applyFilters(cat);
  };

  return (
    <section id="form-filter" className={styles.formFilter}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={`${styles.title} scroll-animate`}>
            <div>AI와 협동하여 만든 </div>
            <div>
              Section06. <span>Product Filter</span>
            </div>
          </h2>
          <div className={`${styles.subTitle} scroll-animate`}>AI를 활용하여 만든 상품 목록 필터링 페이지</div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.prodListWrap} scroll-animate`}>
            {/* 좌측 필터 설정 */}
            <div className={styles.filterWrap}>
              <div className={styles.filterSubTitle}>필터 설정</div>
              <ul className={styles.filterAccordion}>
                
                {/* 색상 아코디언 */}
                <li className={styles.accordionItem}>
                  <div className={styles.accordionTitle} onClick={() => toggleAccordion(1)}>
                    <span>색상</span>
                    <img src={addOutlineIcon} alt="" />
                  </div>
                  {openIndex === 1 && (
                    <div className={styles.accordionDesc}>
                      <div className={styles.colorList}>
                        {['white', 'ivory', 'gray', 'burlywood'].map(color => (
                          <div key={color}>
                            <input
                              type="checkbox"
                              name="color"
                              id={color}
                              value={color}
                              className={styles.hiddenCheckbox}
                              checked={selectedColors.includes(color)}
                              onChange={handleColorChange}
                            />
                            <label className={styles.colorOption} htmlFor={color}>
                              <span>{color === 'burlywood' ? 'brown' : color}</span> 
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* 가격 아코디언 */}
                <li className={styles.accordionItem}>
                  <div className={styles.accordionTitle} onClick={() => toggleAccordion(2)}>
                    <span>가격</span>
                    <img src={addOutlineIcon} alt="" />
                  </div>
                  {openIndex === 2 && (
                    <div className={styles.accordionDesc}>
                      <label htmlFor="min-price" className={styles.srOnly}>최소 금액</label>
                      <input
                        className={styles.priceInput}
                        type="text"
                        placeholder="최소금액"
                        id="min-price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      ~
                      <label htmlFor="max-price" className={styles.srOnly}>최대 금액</label>
                      <input
                        className={styles.priceInput}
                        type="text"
                        placeholder="최대금액"
                        id="max-price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      /> 원
                    </div>
                  )}
                </li>
              </ul>

              <div className={styles.filterFooter}>
                <button type="button" onClick={() => applyFilters()}>
                  상품보기
                </button>
              </div>
            </div>

            {/* 우측 상품 리스트 영역 */}
            <div className={styles.prodList}>
              <ul className={styles.prodTabmenu}>
                {['전체', '패브릭', '수납', '가구', '문구'].map(cat => (
                  <li
                    key={cat}
                    className={`${styles.tabItem} ${category === cat ? styles.active : ''}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>

              <ul className={styles.prodItemWrap}>
                {filteredData.length === 0 ? (
                  <li className={styles.prodListNone}>조건에 맞는 상품이 없습니다.</li>
                ) : (
                  filteredData.map(item => (
                    <li key={item.id} data-category={item.category}>
                      <a href="javascript:;">
                        <div className={styles.prodImage}>
                          <img src={item.img} alt={item.name} />
                        </div>
                        <div className={styles.prodColor} style={{ backgroundColor: item.color }}></div>
                        <div className={styles.prodName}>{item.name}</div>
                        <div className={styles.prodPrice}>{item.price.toLocaleString()}원</div>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}