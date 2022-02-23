import React from "react";
import SearchBar from "./SearchBar";

import { shallow } from "enzyme";

describe("SearchBar tests", () => {
  let component;
  beforeEach(() => {
    component = shallow(<SearchBar />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
