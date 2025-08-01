import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [selected, setSelected] = useState("book");

  const renderComponent = () => {
    if (selected === "book") return <BookDetails />;
    else if (selected === "blog") return <BlogDetails />;
    else return <CourseDetails />;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1> BloggerApp Dashboard</h1>

      {/* Buttons for selecting views */}
      <button onClick={() => setSelected("book")}>Show Book</button>
      <button onClick={() => setSelected("blog")}>Show Blog</button>
      <button onClick={() => setSelected("course")}>Show Course</button>

      <hr />

      {/* Way 1: Function-based conditional rendering */}
      {renderComponent()}

      {/* Way 2: Ternary conditional rendering */}
      {/* 
        selected === "blog" ? <BlogDetails /> : null 
      */}

      {/* Way 3: Logical AND rendering */}
      {/* 
        selected === "course" && <CourseDetails /> 
      */}
    </div>
  );
}

export default App;
