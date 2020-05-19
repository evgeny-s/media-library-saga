import React from 'react';
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";

import Paginator from '../../../components/common/Paginator';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should have some string', () => {
  act(() => {
    render(<Paginator
      limit={1}
      fetchItems={() => {}}
      page={1}
      count={1}
    />, container);
  });

  expect(container).toHaveTextContent("Back1Next");

  act(() => {
    render(<Paginator
      limit={5}
      fetchItems={() => {}}
      page={1}
      count={18}
    />, container);
  });

  expect(container).toHaveTextContent("Back1234Next");
});
