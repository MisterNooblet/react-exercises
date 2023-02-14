import { useState } from "react";
function App() {
  const [haveRead, setHaveRead] = useState(false)
  const [acceptTerms, setacceptTerms] = useState(false)
  const [wantsNews, setWantsNews] = useState(true)
  const [wantOffers, setWantOffers] = useState(true)
  return (
    <div className="terms">
      <div><input type='checkbox' checked={haveRead} /><span>I have read the terms of the app</span></div>
      <div><input type='checkbox' checked={acceptTerms} /><span>I accept the terms of the app</span></div>
      <div><input type='checkbox' checked={wantsNews} /><span>I want to get the weekly newsletter</span></div>
      <div><input type='checkbox' checked={wantOffers} /><span>I want to get sales and offers</span></div>
    </div>
  );
}

export default App;
