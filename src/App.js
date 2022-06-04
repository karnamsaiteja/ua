import logo from "./logo.svg";
import "./App.css";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

// UA-230674282-1

import ReactGA from "react-ga";
const TRACKING_ID = "UA-230674282-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const gaEventTracker = useAnalyticsEventTracker("Contact us");
  return (
    <div>
      <h3>Contact Us</h3>
      <div>
        <a href="#" onClick={() => gaEventTracker("call")}>
          Call Us
        </a>
      </div>
      <div>
        <a
          href="mailto:someone@example.com"
          onClick={() => gaEventTracker("email")}
        >
          Write to us
        </a>
      </div>
    </div>
  );
}

export default App;
