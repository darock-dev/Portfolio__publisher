import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import styles from "./Form.module.scss";

export const ErrorMessage = ({ message }) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default function Form() {
  // 폼 state
  const [form, setForm] = useState({
    name: "",
    email: "",
    ask: "",
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailValError, setEmailValError] = useState(false);
  const [askError, setAskError] = useState(false);

  // 폼 입력 검증 및 state 반영
  const onChangeForm = (e) => {
    if (e.target.name === "name") {
      // 이름이 비어있는지 확인
      if (!e.target.value) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    }
    // 이메일이 비어있는지 확인
    if (e.target.name === "email") {
      if (!e.target.value) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      // 이메일 형식 오류 확인
      if (emailValError) {
        if (validateEmail(e.target.value)) {
          setEmailValError(false);
        }
      }
    }
    // 문의사항이 비어있는지 확인
    if (e.target.name === "ask") {
      if (!e.target.value) {
        setAskError(true);
      } else {
        setAskError(false);
      }
    }
    // 입력한 값들을 폼 state에 반영
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 이메일 형식 확인
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 폼 제출
  const submitForm = () => {
    // 전송 전 폼 검증
    if (!form.name) {
      setNameError(true);
    }
    if (!form.email) {
      setEmailError(true);
    }

    if (!form.ask) {
      setAskError(true);
    }

    // 이메일 검증 후 유효하지 않으면 전송하지 않음
    if (validateEmail(form.email)) {
      setEmailValError(false);
    } else {
      setEmailValError(true);
      return;
    }

    // 셋 중 하나라도 비어있으면 전송하지 않음
    if (!form.name || !form.email || !form.ask) {
      return;
    }
    alert("제출되었습니다! (따로 서버로 전송되지는 않습니다.)");
  };

  return (
    <section id="form-sec" className={styles.formSec}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            <div>React와 Javascript로 만든</div>
            <div>
              Section04. <span>Form</span>
            </div>
          </h2>
          <div className={styles.subTitle}>React와 Javascript로 만든 Form</div>
        </div>
        <div className={styles.content}>
          <div className={styles.formWrap}>
            <Input
              label="Name form"
              type="text"
              placeholder={"이름을 입력해주세요."}
              isRequired={true}
              name="name"
              onChange={onChangeForm}
            />
            {nameError && <ErrorMessage message={"* 이름을 입력해주세요."} />}
            <Input
              label="Email form"
              type="text"
              placeholder={"이메일을 입력해주세요."}
              isRequired={true}
              name="email"
              onChange={onChangeForm}
            />
            {emailError && <ErrorMessage message={"* 이메일을 입력해주세요."} />}
            {!emailError && emailValError && (
              <ErrorMessage message={"* 이메일 형식을 확인해주세요."} />
            )}
            <Textarea
              label="Ask form"
              placeholder={"문의사항을 입력해주세요."}
              isRequired={true}
              name="ask"
              onChange={onChangeForm}
            />
            {askError && <ErrorMessage message={"* 문의사항을 입력해주세요."} />}
          </div>
          <div className={styles.formButtonWrap}>
            <Button text="제출하기" onClick={submitForm} />
          </div>
        </div>
      </div>
    </section>
  );
}
