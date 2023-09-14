import React from "react";

const ErrorModal = ({ onClickToShowModal }) => {
  return (
    <div className="modal-wrap">
      <div className="modal">
        <div className="modal-content">
          <div className="content">이미 추가된 옵션입니다.</div>
          <div className="modal-button">
            <button onClick={onClickToShowModal}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
