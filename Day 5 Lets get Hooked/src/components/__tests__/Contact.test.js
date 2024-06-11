import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page Test Case" , ()=>{

    beforeEach(()=>{
        render(<Contact/>);
    })
    test("Should load contact us component" , ()=>{
        
    
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load the button inside the Contact Us component" , ()=>{
        
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        // Assertion:
        expect(button).toBeInTheDocument();
    })
    test("Should load the input inside the Contact Us component" , ()=>{
        
    
        // const button = screen.getByRole("button");
        const input = screen.getByPlaceholderText("Enter Your Name");
    
        // Assertion:
        expect(input).toBeInTheDocument();
    })
    
    // 'it' is an alias or different name for test :-  "both are same"
    it("Should load all input boxes inside the Contact us component" , ()=>{
        
    
        // This is call querying..
        const inputBoxes = screen.getAllByRole("textbox");
    
        // it prints the array of react elements(jsx element)(i.e. input box)...
        // console.log(inputBoxes);
    
        expect(inputBoxes.length).toBe(4);
    })
})


