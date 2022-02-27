import React from "react";
import Card from "./Card";
import CardList from "../CardList/CardList";
import App from "../../App";
import { render, screen } from "@testing-library/react";
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

  // below doesn't work - need to figure it out
  it("should render the correct number of cards", () => {
    const numberOfBeers = beers.length;
    const numberOfRenderedCards = component.find(Card).length;
    expect(numberOfBeers).toEqual(numberOfRenderedCards);
  });
});

describe("async component", () => {
  test("renders results if request succeeds", async () => {
    // create dummy function
    window.fetch = jest.fn();
    // object resolved by promise - want to return an array when promise is resolved
    window.fetch.mockResultValueOnce({
      // over riders built in fetch function with this dummy object
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Card />);
    const cardEl = await screen.findAllByRole("heading1");
    expect(cardEl).not.toHaveLength(0);
  });
});
