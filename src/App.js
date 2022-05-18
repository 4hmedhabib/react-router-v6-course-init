import {Fragment} from 'react'
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Product from "./components/Products/Product";

function App() {
  const products = [
    {
      username: "Ahmed Hassan",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      created: "2020-04-02",
    },
    {
      username: "Muuse Jaamac",
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      created: "2021-12-05",
    },
    {
      username: "Ridwan Mohamed",
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      created: "2022-01-20",
    },
    {
      username: "Cabdisamad Axmed",
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      created: "2022-02-15",
    },
    {
      username: "Khaalid Hassan",
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      created: "2022-05-18",
    },
  ];
  // return (
  //   <div className="flex flex-col justify-center items-center mt-10 font-ubuntu">
  //     <h1 className="text-3xl font-bold tracking-wider text-gray-600">
  //       Welcome To
  //     </h1>
  //     <h3 className="text-5xl my-5 text-blue-500">React Router V6</h3>
  //     <img
  //       src="https://cdn.pellerex.com/public/ecosystem/web/content/web-spa-routing/pellerex-spa-routing.png"
  //       alt=""
  //       className="h-52 object-cover"
  //     />
  //   </div>
  // );

  return (
    <Fragment>
       {/* <Home /> */}
       {/* <Products products={products}/> */}
       <Product />
    </Fragment>
  );
}

export default App;
