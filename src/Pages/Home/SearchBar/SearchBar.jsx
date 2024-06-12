// import React, { useEffect, useState } from "react";
// import Container from "../../../components/Container/Container";
// import logo from "../../../assets/FoodLogo.jpg"


// const foodData = [
//     {  category: "pizza" },
//     {  category: "salad" },
//     {  category: "soup" },
//     {  category: "dessert" },
//     {  category: "drinks" },
//     {  category: "popular" },
//   ];

// const SearchBar = () => {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [filteredFood, setFilteredFood] = useState([]);

//     useEffect(() => {
//         if (searchTerm) {
//           const results = foodData.filter((food) =>
//             food.category.toLowerCase().includes(searchTerm.toLowerCase())
//           );
//           setFilteredFood(results);
//         } else {
//           setFilteredFood([]);
//         }
//       }, [searchTerm]);



//   return (
//     <div className="px-1 bg-[#365E32]">
//       <Container>
//         <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
//           <div className="logo flex">
//             <img className="h-[100px]"  src={logo} alt="logo" />
//             <h1 className="mt-10 ms-1 text-orange-400 lg:text-3xl uppercase font-bold">Mayan</h1>
//           </div>
//           <div className="searchBar mt-8">
//             <form>
//                 <input
//                  className="w-full border p-2 rounded-md text-black text-2xl font-normal" type="text" name="search" id="search" placeholder="Search Your Food......"  
//                  value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}/>
//             </form>
//           </div>

//           <div className="mt-4">
//           {filteredFood.length > 0 ? (
//             filteredFood.map((food, index) => (
//               <div key={index} className="p-2 border-b border-gray-200">
//                 <p className="text-sm text-gray-600">{food.category}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-white">No food items found</p>
//           )}
//         </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SearchBar;
