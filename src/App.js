import React from "react";
import Nav from "./Nav";
import ThreeD from "./ThreeD";
import {useSpring, animated} from "react-spring"

function App() {
  const springDown = useSpring({marginTop: "0", from: {marginTop: "-1600px"}});

  return (
    <>
      <animated.div className="text" style={springDown}>
        <h1>marcus franco</h1>
        <p>computer engineering @ purdue university</p>
        <p>better website coming soon</p>
        <a href="mailto:m6franco@ucsd.edu">m6franco@ucsd.edu</a>
        <Nav items={[
          { url: "https://blog.marcusfran.co", name: "blog" },
          { url: "https://github.com/rasfmar", name: "github" },
          { url: "https://linkedin.com/in/rasfmar", name: "linkedin" },
          { url: "https://bookshelf.website/rasfmar", name: "bookshelf" },
          { url: "https://marcusfran.co/assets/MarcusFrancoResume.pdf", name: "résumé" }]}
        />
      </animated.div>
      <animated.div className="threecon" style={springDown}>
        <ThreeD />
      </animated.div>
      <div className="static" />
    </>
  );
}

export default App;
