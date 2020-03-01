import * as React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { SearchBox } from './SearchBox';

describe("SearchBox", () => {
  it("renders", () => {
    const { asFragment } = render(<SearchBox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows the correct text for the label", () => {
    const { getByLabelText } = render(<SearchBox />);
    const label = getByLabelText(/Pick-up Location/i);
    expect(label).toBeInTheDocument();
  });

  it("shows the correct text for the placeholder", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText(/city, airport, station, region and district.../i);
    expect(input).toBeInTheDocument();
  });

  it("applies the focus state", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const input = getByPlaceholderText(/city, airport, station, region and district.../i);
    input.focus();
    expect(document.activeElement).toEqual(input);
  });

  it("has the input field accessible from screen readers", () => {
    const { container } = render(<SearchBox />);
    const label = container.querySelector(`[id="search-box-label"]`);
    const input = container.querySelector(`[aria-labelledby="search-box-label"]`);
    expect(label).toHaveTextContent("Pick-up Location");
    expect(input).toBeInTheDocument();
  });
});


