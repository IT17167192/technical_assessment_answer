import React, {
    useState as useStateMock
} from "react";
import ReactDOM from 'react-dom';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';

import ViewPosts from "../ViewPosts";


const setState = jest.fn();
//clean up after every test case
afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ViewPosts/>, div);
})

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

it("has expected total posts", () => {
    const setState = jest.fn();
    let count = 100;
    const { getByTestId } = render(<ViewPosts/>);
    expect(getByTestId("postCountIndicator")).toHaveTextContent( count + " Total Posts | Page 1 / 10")
})

