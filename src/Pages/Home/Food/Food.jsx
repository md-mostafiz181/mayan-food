
import React, { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleMenu from "../SingleMenu/SingleMenu";
import "./Food.css";

const Food = () => {
  const [menu, setMenu] = useState([]);
  const [showAll, setShowAll] = useState(false); 

  // Search 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    // Fetch the menu data
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setFilteredFood(data); // Initialize filteredFood with the full menu
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      // Filter the menu based on the search term
      const results = menu.filter((food) =>
        food.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFood(results);
    } else {
      setFilteredFood(menu);
    }
  }, [searchTerm, menu]);

  const handleSeeMore = () => {
    setShowAll(true); 
  };

  const handleShowLess = () => {
    setShowAll(false); 
  };

  return (
    <div>
      <Container>
        <SectionTitle
          subHeading="What do you want"
          heading="Our Food"
        ></SectionTitle>

        {/* Search bar start */}
        <div className=" ">
          <Container>
            <div>
              <div className="searchBar mt-4 mb-5">
                <form>
                  <input
                    className="w-full border p-2 rounded-full text-white ps-5   text-2xl font-normal"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Your Food......"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <div className="mt-4">
              
              {
                  filteredFood.map((food, index) => (
                    <div key={index} className="absolute">
                      <p className="text-sm  ">{food.category}</p>
                    </div>
                  ))
              }
              
            </div>
          </Container>
        </div>
        {/* Search bar end */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {filteredFood.slice(0, showAll ? filteredFood.length : 6).map((item) => (
            <SingleMenu key={item._id} item={item}></SingleMenu>
          ))}
        </div>
        {filteredFood.length > 6 && (
          <div className="flex justify-center">
            <button className="my-3 cart-btn fontPrimary font-bold uppercase text-orange-400" onClick={showAll ? handleShowLess : handleSeeMore}>
              {showAll ? "Show Less Food" : "See More Food"}
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Food;

