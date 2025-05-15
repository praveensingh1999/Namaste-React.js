
const heading = React.createElement("h1",{id: "heading"},"Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);


// nested Element


{/* <div id ="parent">
    <div id="child">
        <h1>I'am h1 tag</h1>
    </div>
</div> */}

// const parent = React.createElement{
//     "div",
//     {
//         id: "parent"
//     },
//     React.createElement("div", {id:"child"},
// React.createElement("h1", {},"I am h1 tag")
// )
// };


// if we want to create sibling element

// const parent = React.createElement(
//     "div",
//     {
//         id: "parent"
//     },
//     React.createElement("div",{id: "child"}, [
//         React.createElement("h1", {}, "i am h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//     ]
//     )
//  React.createElement("div",{id: "child2"}, [
    //         React.createElement("h1", {}, "i am h1 tag"),
    //         React.createElement("h2", {}, "I am an h2 tag"),
    //     ]
    //     ),
// );