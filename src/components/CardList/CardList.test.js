import React from "react";
import cardList from "./cardList";

import { shallow } from "enzyme";

describe("cardList tests", () => {
  let component;
  beforeEach(() => {
    component = shallow(<cardList />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
