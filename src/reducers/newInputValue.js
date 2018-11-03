export default function newInputValue(
  state = "Enter the Input Value Here",
  action
) {
  switch (action.type) {
    case "NEW_INPUT_VALUE":
      return action.payload;
    default:
      return state;
  }
}
