import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { ADD_CARD, EDIT_CARD, DELETE_CARD } from "./Redux/Actions/CardsAction";

export function App(props) {
  const { lists, ADD_CARD, EDIT_CARD, DELETE_CARD } = props;
  const dispatches = {
    ADD_CARD,
    EDIT_CARD,
    DELETE_CARD,
  };
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title text-center">
                All number of tasks :{" "}
                {lists.reduce((acc, list) => acc + list.cards.length, 0)}
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {lists.map((list, index) => (
                  <div key={index} className="col-md-4">
                    <TodoList
                      title={list.title}
                      cards={list.cards}
                      dispatches={dispatches}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
const mapDispatchToProps = (dispatch) => ({
  ADD_CARD: (list) => dispatch(ADD_CARD(list)),
  EDIT_CARD: (list) => dispatch(EDIT_CARD(list)),
  DELETE_CARD: (list) => dispatch(DELETE_CARD(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
