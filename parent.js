const parent = React.createElement("div", { id: "parentdiv" },[
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {id: "heading1"}, "Heading 1"),
        React.createElement("h2", {id: "heading2"}, "Heading 2")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Heading 1"),
        React.createElement("h2", {}, "Heading 2")]
    )
])
const root = ReactDOM.createRoot(document.getElementById("rootid"));
root.render(parent);