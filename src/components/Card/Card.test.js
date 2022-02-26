import React from "react";
import Card from "./Card";
import CardList from "../CardList/CardList";
import App from "../../App";

import { shallow } from "enzyme";

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beer[0];
    component = shallow(<Card beer={beer} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct name based on beer passed in as props", () => {
    const beerTitle = testBeer.name;
    expect(component.text()).toContain(beerTitle);
  });

  it("should render the correct number of cards", () => {
    const numberOfBeers = beers.length;
    const numberOfRenderedCards = component.find(Card).length;
    expect(numberOfBeers).toEqual(numberOfRenderedCards);
  });
});
