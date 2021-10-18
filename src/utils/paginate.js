import _ from "lodash";
export default  function paginate (Items, PageNumber, PageSize) {
  const startIndex = (PageNumber - 1) * PageSize;
  return _(Items).slice(startIndex).take(PageSize).value();
}
