import {render , screen , fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/menuMockData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";


describe("Restaurent Menu Page test Cases" , ()=>{

    beforeEach(async ()=>{
        await act(async ()=>{
            render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>);
        });
        const accordioHeader = screen.getByText("Recommended");
        fireEvent.click(accordioHeader);
    })
    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json: ()=> Promise.resolve(MOCK_DATA)
        })
    })
    
    it("should load the add button in the Cart component" , ()=>{
        const addBtn = screen.getAllByRole("button" , {name: "Add"});
    
         addBtn.forEach((btn)=>{
            expect(btn).toBeInTheDocument();
         })
    })

    it("should check if the header is not updated" , ()=>{
        //  checking if header is not updated yet Before clicking on add..
        expect(screen.getByText("🛒Cart (0 items)")).toBeInTheDocument();
    })


    it("should check if header gets updated on clicking on the Add button" , async ()=>{
        const addBtn = screen.getAllByRole("button" , {name: "Add"});
    
         fireEvent.click(addBtn[0]);
    
         const cartItems = screen.getByText("🛒Cart (1 items)");
    
         expect(cartItems).toBeInTheDocument();
    
         expect(addBtn.length).toBe(15);
         
    })


    it("should render the items list on clicking on the  accordion header ", ()=>{
        const menuCard = screen.getAllByTestId("menuCard").length;
         expect(menuCard).toBe(15);
    })

})


describe("Cart page Test Cases" , ()=>{

    beforeEach(()=>{
        render(<Provider store={appStore}>
            <Cart/>
        </Provider>);
        
    })
    it("should check if the cart Page has cards (added) " , ()=>{
        const cartItems = screen.getAllByTestId("menuCard").length;
        expect(cartItems).toBe(1);

    })

    it("should check the remove cartItem button is presnet and is working" , ()=>{
        const removeBtn = screen.getByRole("button" , {name: "Remove Cart Item"});

        expect(removeBtn).toBeInTheDocument();
        
        const addBtn = screen.getAllByRole("button" , {name: "Add"});
        fireEvent.click(addBtn[0]);
        fireEvent.click(addBtn[0]);
        fireEvent.click(addBtn[0]);
        fireEvent.click(addBtn[0]);

        const cartItemsBefore = screen.getAllByTestId("menuCard");


        expect(cartItemsBefore.length).toBe(5)

        fireEvent.click(removeBtn);
        fireEvent.click(removeBtn);
        fireEvent.click(removeBtn);

        // After clicking on the clearBtn:
        const cartItemsAfter = screen.getAllByTestId("menuCard");

        expect(cartItemsAfter.length).toBe(2);


    })

    it("should check if the clear Cart button is working or not" , ()=>{
        const clearBtn = screen.getByRole("button" , {name: "Clear Cart"});

        fireEvent.click(clearBtn);

        const emptyCartMsg = screen.getByText("Your cart is empty");

        expect(emptyCartMsg).toBeInTheDocument();


    })
})