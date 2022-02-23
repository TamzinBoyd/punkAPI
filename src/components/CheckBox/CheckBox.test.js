import React from "react";
import CheckBox from "./CheckBox";

import { shallow } from "enzyme";

describe("CheckBox tests", () => {
  let component;
  beforeEach(() => {
    component = shallow(<CheckBox />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
