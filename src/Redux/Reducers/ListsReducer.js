const initalState = [
  {
    title: "Open",
    cards: [
      {
        id: 1,
        title: "Task 1",
        status: "Open",
      },
    ],
  },
  {
    title: "Inprogress",
    cards: [
      {
        id: 1,
        title: "Task 2",
        status: "Inprogress",
      },
    ],
  },
  {
    title: "Completed",
    cards: [
      {
        id: 1,
        title: "Task 3",
        status: "Completed",
      },
    ],
  },
];

const listsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case "ADD_CARD":
      return state.map((list) => {
        if (list.title === payload.title) {
          return {
            ...list,
            cards: [
              ...list.cards,
              { ...payload.card, id: list.cards.length + 1 },
            ],
          };
        }
        return list;
      });
    case "EDIT_CARD":
      return state.map((list) => {
        if (
          list.title === payload.title &&
          list.title === payload.card.status
        ) {
          return {
            ...list,
            cards: list.cards.map((card) => {
              if (card.id === payload.card.id) {
                return payload.card;
              }
              return card;
            }),
          };
        } else if (list.title === payload.card.status) {
          return {
            ...list,
            cards: [
              ...list.cards,
              { ...payload.card, id: list.cards.length + 1 },
            ],
          };
        } else if (list.title === payload.title) {
          return {
            ...list,
            cards: list.cards.filter((card) => card.id !== payload.card.id),
          };
        }
        return list;
      });
    case "DELETE_CARD":
      return state.map((list) => {
        if (list.title === payload.title) {
          return {
            ...list,
            cards: list.cards.filter((card) => card.id !== payload.id),
          };
        }
        return list;
      });
    default:
      return state;
  }
};

export default listsReducer;
