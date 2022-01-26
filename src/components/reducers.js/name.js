export const name = (state = "-enter name-", action) => {
  switch (action.type) {
    case "changeName":
      return action.name;
    default:
      return state;
  }
};

export default name;
