import { render ,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import Recommended_MOCK_DATA from "../mocks/recommendedResCard.json";
import withRecommendedLabel from "../RestaurantCard";

it("should render RestaurantCard component with props data " , ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const resName = screen.getByText("Pizza Hut");
    
    expect(resName).toBeInTheDocument();
})

// it("should render RestaurantCard with PromotedLabel component with props data " , ()=>{
//     const RecommendedRestaurantCard = withRecommendedLabel(RestaurantCard)
//     render(<RecommendedRestaurantCard resData={Recommended_MOCK_DATA}/>);

//     const rating = screen.getByText(4.6);
    
//     expect(parseFloat(rating.textContent)).toBeGreaterThan(4.5);
// })