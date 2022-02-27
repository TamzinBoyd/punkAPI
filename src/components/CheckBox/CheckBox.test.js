import React from "react";
import { render, useEvent } from "@testing-library/react";
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

// want to be able to check that when ticking the checkbox the state correctly updates to true / false
