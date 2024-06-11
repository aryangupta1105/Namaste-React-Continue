import { render , screen , fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom";
import Body from "../Body"
import Mock_Data from "../mocks/mockFetchData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(Mock_Data);
        }
    })
});

it("should render the body component " , async ()=>{
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>));

    // checking before filter or search feature:
    const cardsBeforeClick = screen.getAllByTestId("resCard");
    expect(cardsBeforeClick.length).toBe(20);

    // checking for filter button
    const filterBtn = screen.getByTestId("filterBtn");

    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(19);


    // checking for search by restaurant feature:
    const searchButton = screen.getByRole("button" , {name: "Search🔍"});
    
    const searchByRestaurant = screen.getByTestId("searchByRestaurant");
    
    fireEvent.change(searchByRestaurant , {target: {value: "pizza"}});

    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard");
    
    expect(cards.length).toBe(2);

    
    expect(filterBtn).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchByRestaurant).toBeInTheDocument();

});
