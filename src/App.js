import React from "react";
import { Switch, Route } from "react-router-dom";
import Acceuil from "./Acceuil";
import Menu from "./Menu";
import Catalogue from "./Catalogue";

const App = () => {
  return (
    <div className="">
      <Menu />
      <Switch>
        <Route exact path="/" component={Acceuil} />
        <Route exact path="/catalogue" component={Catalogue} />
      </Switch>
      {/* <div class="leaf">
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
      </div>

      <div class="leaf leaf1">
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
            height="75px"
            width="75px"
            alt="sheet"
          ></img>
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
      </div>

      <div class="leaf leaf2">
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>

        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          {" "}
          <img
            src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
        <div>
          <img
            src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png"
            height="75px"
            width="75px"
            alt="sheet"
          />
        </div>
      </div> */}
    </div>
  );
};

export default App;
