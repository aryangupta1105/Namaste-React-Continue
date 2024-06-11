import Header from "../Header";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


test("Should load login button in header component" , ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

// If multiple buttons are present in header , we can pass parameters also....
    const loginButton  = screen.getByRole("button" , {name: "Log In"});

    expect(loginButton).toBeInTheDocument();
})


test("Should check login button feature is working in header component" , ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button" , {name:"Log In"});

    // how to click a button from the code (by using fireEvent)....
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button" , {name:"Log Out"});

    expect(logoutButton).toBeInTheDocument();


})

it("should check the cart to be in the Header" , ()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

  

    // rejecs: routing (if we wanted to chech if cart is present or not)

    const cart = screen.getByText(/Cart/);


    expect(cart).toBeInTheDocument();
})
it("should check the cart items to be 0" , ()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const cartItem = screen.getByText("🛒Cart (0 items)");

    expect(cartItem).toBeInTheDocument();
})