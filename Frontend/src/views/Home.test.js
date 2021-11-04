import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../redux/configureStore";
import Home from "./Home";

test("renders Home component correctly", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  // initinial render before fectching data
  const noDataText = screen.getByText(/loading/i);
  expect(noDataText).toBeInTheDocument();

  const listTitleElement = await screen.findByText(
    /List of Books on Poetry Shelf/i
  );
  const fictionButton = screen.getByText("Fiction");
  userEvent.click(fictionButton);
  const newListTitleElement = await screen.findByText(
    /List of Books on Fiction Shelf/i
  );

  // after fecting of data
  expect(listTitleElement).toBeInTheDocument();
  expect(newListTitleElement).toBeInTheDocument();
});
