import React from "react";
import Card from "./Card";
import CardList from "../CardList/CardList";

import { shallow } from "enzyme";

describe("Card tests", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Card searchedBeers={searchedBeers} beer={CardList} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
