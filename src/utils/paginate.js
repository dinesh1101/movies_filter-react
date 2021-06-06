import _ from "lodash";

export function paginate(arr, pageno, pagesize) {
  const index = (pageno - 1) * pagesize;
  const sliced = _(arr).slice(index).take(pagesize).value();
  return sliced;
}
