import React from "react";
import { shallow, mount } from "enzyme";
import TableUsers from "./tableusers";

describe("Table Users", () => {
  it("Table user should render correctly if users is null", () => {
    const component = shallow(<TableUsers />);
    expect(component).toMatchSnapshot();
  });
});
