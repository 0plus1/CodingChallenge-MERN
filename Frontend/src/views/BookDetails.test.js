import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../redux/configureStore";
import BookDetails from "./BookDetails";

test("renders BookDetails component correctly", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    </Provider>
  );

  // initinial render before fectching data
  const noDataText = screen.getByText(/loading/i);
  expect(noDataText).toBeInTheDocument();

  const homeLinkElement = await screen.findByText(/home/i);

  // after fecting of data
  expect(homeLinkElement).toBeInTheDocument();
});
