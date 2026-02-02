// import { useState } from 'react'
// import NavBar from './NavigationBar/NavBar.jsx'
// import Products from './Products/Product.jsx'
// import Recommended from './Recommended/Recommended.jsx'
// import Sidebar from './Sidebar/Sidebar.jsx'
// import Card from './Components/Card.jsx'
// //database that i created 
// import  products from'./db/data.jsx'
// function App() {

//   //state for query to store queries and update
//   const [query,setQuery]=useState("");
//   const [selectedCategory,setSelectedCategory]=useState(null)

//   //it will handles the input queries in the search box
//  // --------------Input filter ----------------
//   const handleChange=(event)=>{
//     setSelectedCategory(event.target.value);
//   }
//   const filteredItems = products.filter(
//     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );
// //--------------Radio filter ----------------
// const handlechange=(event)=>{
// setSelectedCategory(event.target.value)
// }
//  const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };
// //--------------Buttons filter ----------------
// const handleClick=(event)=>{
// setSelectedCategory(event.target.value)
// }

// //------------Filtering Input dependes on what we search what we select on filter section--------------
// function FilteredData(products,selected,query){
// let filteredProducts=products;
//   if (query) {
//     filteredProducts = filteredProducts.filter(product =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//   }

//   // Category/brand/color filter
//  if (selected) {
//       filteredProducts = filteredProducts.filter(
//         ({ category, color, company, newPrice, title }) =>
//           category === selected ||
//           color === selected ||
//           company === selected ||
//           newPrice === selected ||
//           title === selected
//       );
//     }
//  return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
//   <Card 
//   key={title}
//   img={img}
//   title={title}
//   star={star}
//   reviews={reviews}
//   newPrice={newPrice}
//   prevPrice={prevPrice}
//   />
//  ))

// }

// const result=FilteredData(products,selectedCategory,query);





//   return (
//     <>
    
//      <Sidebar handleChange={handleChange}/>
//     <NavBar query={query}  handleInputChange={handleInputChange}/>
//     <Recommended handleClick={handleClick}  />
//     <Products result={result}/>
    
    
//       </>
//   )
// }

// export default App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
export default App;
