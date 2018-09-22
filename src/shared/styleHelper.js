export function clearFix() {
  return `
    &:after {
      display: table;
      content: "";
      clear: both;
    }
  `;
}
