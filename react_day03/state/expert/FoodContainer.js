import React, { useRef, useState } from "react";
import Form from "./Form";
import Foods from "./Foods";

// 음식의 한글 이름과 영문 이름을 입력한 뒤 추가 버튼 클릭 시 추가,
// 음식을 체크한 뒤 삭제 버튼 클릭 시 해당 음식 삭제

const FoodContainer = () => {
  const style = { listStyle: "none" };

  // 사용자가 입력한 음식 정보를 담아줄 state
  const [foods, setFoods] = useState([]);
  // 각 음식별 체크박스 상태 관리 state
  const [checked, setChecked] = useState([]);
  // input태그 객체
  const inputRef = useRef([]);

  // 추가하기 버튼 클릭 시 실행할 함수
  const onClickToAdd = () => {
    // 체크박스 한 개가 만들어졌다는 뜻!
    // 상태 1개 추가!
    setChecked(checked.concat(false));

    // 사용자가 입력한 음식 정보 추가!
    setFoods(
      foods.concat({
        kor: inputRef.current[0].value,
        eng: inputRef.current[1].value,
      })
    );

    // 추가 완료 후 입력한 내용은 초기화
    inputRef.current[0].value = "";
    inputRef.current[1].value = ""
  };

  // 삭제하기 버튼 클릭 시 실행할 함수
  const onClickToDelete = () => {
    // 음식 정보 중 사용자가 삭제를 위해 체크한(true) 정보를 제외한 나머지만 추출한다.
    setFoods(foods.filter((food, i) => !checked[i]));
    // 음식 정보를 n개 삭제했기 때문에 남은 음식 정보 개수 만큼 다시 체크박스 상태값을 구성한다.
    setChecked(new Array(foods.length).fill(false));
  };

  // 체크박스 체크 시 상태 변경 함수
  const onChangeCheckbox = (i) => {
    // splice(a, b, c): a에서 b개 c로 변경
    checked.splice(i, 1, !checked[i]);
    // setChecked([...checked]);
    setChecked(checked.concat());
  };

  return (
    <div>
      <Form
        inputRef={inputRef}
        onClickToAdd={onClickToAdd}
        onClickToDelete={onClickToDelete}
      />
      <Foods style={style} foods={foods} checked={checked} onChangeCheckbox={onChangeCheckbox}/>
    </div>
  );
};

export default FoodContainer;
