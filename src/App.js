import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FeatureForm from "./features/FunctionalFeatures";
import NonfunctionalFeatureForm from "./features/NonfunctionalFeatures";
import HostingForm from "./features/Hosting";
import CommonProductForm from "./features/CommonProducts";
import QualityForm from "./features/Quality";

function App() {
  const [productHours, setProductHours] = React.useState({
    min: 0,
    max: 0,
  });
  const [isCommonProduct, setIsCommonProduct] = React.useState(true);
  const [featureHours, setFeatureHours] = React.useState({ min: 0, max: 0 });
  const [nonfunctionalHours, setNonfunctionalHours] = React.useState({
    min: 0,
    max: 0,
  });
  const [hostingHours, setHostingHours] = React.useState({ min: 0, max: 0 });
  const [hourlyRate, setHourlyRate] = React.useState(300);
  const [total, setTotal] = React.useState({ min: 0, max: 0 });

  const calculateTotalPrice = () => {
    const totalHours = [
      productHours,
      featureHours,
      nonfunctionalHours,
      hostingHours,
    ].reduce(
      (acc, curr) => ({ min: acc.min + curr.min, max: acc.max + curr.max }),
      { min: 0, max: 0 }
    );
    setTotal({
      min: totalHours.min * hourlyRate,
      max: totalHours.max * hourlyRate,
    });
  };

  React.useEffect(calculateTotalPrice.bind(this), [
    productHours,
    featureHours,
    nonfunctionalHours,
    hostingHours,
    hourlyRate,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ maxWidth: "1800px" }}>
          <div
            style={{ position: "fixed", right: "50px", padding: "20px" }}
          >{`${total.min
            .toString()
            .replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )} - ${total.max
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} THB`}</div>
          <CommonProductForm
            setIsCommonProduct={setIsCommonProduct}
            isCommonProduct={isCommonProduct}
            productHours={productHours}
            setProductHours={setProductHours}
          />
          {!isCommonProduct && (
            <>
              <FeatureForm
                setFeatureHours={setFeatureHours}
                featureHours={featureHours}
              />
              <NonfunctionalFeatureForm
                featureHours={featureHours}
                setNonfunctionalHours={setNonfunctionalHours}
                nonfunctionalHours={nonfunctionalHours}
              />
            </>
          )}
          <HostingForm
            hostingHours={hostingHours}
            setHostingHours={setHostingHours}
          />
          <QualityForm hourlyRate={hourlyRate} setHourlyRate={setHourlyRate} />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
