import React from "react";
import "../../App.scss";
const ActionModal = props => {
  return (
    <div className="modal">
      <div className="modal-ask">
        <p>Are you sure you want to delete this item ? </p>
        <input
          type="button"
          className="button button-save"
          value="Delete"
          onClick={() => {
            props.removeUser(props.selectedUser);
            props.setModal(null);
          }}
        />
        <input
          type="button"
          className="button button-discard"
          value="Discard"
          onClick={() => props.setModal(null)}
        />
      </div>
    </div>
  );
};

export default ActionModal;
