import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function TodoList(props) {
  const { title, cards, dispatches } = props;
  const { ADD_CARD, EDIT_CARD, DELETE_CARD } = dispatches;

  const [modalVisible, setModalVisible] = useState(false);
  const [editOrAdd, setEditOrAdd] = useState("");
  const [cardId, setCardId] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardStatus, setCardStatus] = useState("");

  const styleBadge = {
    top: "15px",
    right: "15px",
    padding: "10px 15px",
  };

  const handleClickCancel = () => {
    setModalVisible(false);
    setCardTitle("");
    setCardStatus("");
    setEditOrAdd("");
    setCardId("");
  };
  const handleClickAdd = () => {
    setModalVisible(true);
    setEditOrAdd("add");
  };
  const handleClickEdit = (card) => {
    setCardTitle(card.title);
    setCardStatus(card.status);
    setCardId(card.id);
    setModalVisible(true);
    setEditOrAdd("edit");
  };
  const handleClickDelete = (id) => {
    DELETE_CARD({ id, title: title });
  };
  const handleClickSave = () => {
    if (editOrAdd === "add" && cardTitle !== "" && cardStatus !== "") {
      const newCard = {
        id: cards.length + 1,
        title: cardTitle,
        status: cardStatus,
      };
      const newList = {
        title: cardStatus,
        card: newCard,
      };
      ADD_CARD(newList);
    } else if (editOrAdd === "edit" && cardTitle !== "") {
      const newCard = {
        id: cardId,
        title: cardTitle,
        status: cardStatus,
      };
      const newList = {
        title: title,
        card: newCard,
      };
      EDIT_CARD(newList);
    }
    handleClickCancel();
  };
  return (
    <>
      <Modal isOpen={modalVisible}>
        <ModalHeader toggle={handleClickCancel}>
          {`${editOrAdd === "edit" ? "Edit" : "Add"}`} Task
        </ModalHeader>
        <ModalBody>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Task title"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-control"
              value={cardStatus}
              onChange={(e) => setCardStatus(e.target.value)}
            >
              <option value="" disabled>
                Choose Status
              </option>
              <option value={"Open"}>Open</option>
              <option value={"Inprogress"}>In Progress</option>
              <option value={"Completed"}>Completed</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleClickCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClickSave}
          >
            Save
          </button>
        </ModalFooter>
      </Modal>
      <div className="col-md-12">
        <div className="card mb-2">
          <div className="card-header p-4">
            <h5 className="card-title text-center">{title}</h5>
            <span
              className="badge bg-primary position-absolute"
              style={styleBadge}
            >
              {cards.length}
            </span>
          </div>
        </div>
        {cards.map((card) =>
          card.status === title ? (
            <div className="card mb-2" key={card.id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h5 className="card-title">{card.title}</h5>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => handleClickEdit(card)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleClickDelete(card.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
        <div className="card">
          <div className="card-header text-center">
            <button className="btn btn-success" onClick={handleClickAdd}>
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
