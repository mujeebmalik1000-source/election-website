import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import About from "./About";
import Contact from "./Contact";
import Layout from "./components/Layouts/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         
          <Route path="home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />

          <Route path="about" element={<About />} />
          <Route path="contactpage" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Home2 from "./components/Home2"; 
// import Home2Politician from "./components/Home2Politician";
// import About from "./About";
// import Contact from "./Contact";
// import Layout from "./components/Layouts/layout";





// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//            { <Route path="home2" element={<Home2/>  } /> }
//            <Route path="home2politician" element={<Home2Politician />} />
//           <Route path="about" element={<About />} />
//           <Route path="contactpage" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






