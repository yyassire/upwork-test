import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PageComponent from "./components/PageComponent";
import "react-toastify/dist/ReactToastify.css";
import { crudeData } from "./utils/customData";

function App() {
  const [data, setData] = useState(crudeData);
  const [allChecked, setAllChecked] = useState(false);

  // return true or false depending on if all the check boxes are checked or not
  const isAllDataChecked = () => {
    const result = data.filter((p) => {
      return p.isChecked;
    });
    setAllChecked(result.length == data.length);
  };

  // toggle all the ckeckboxes
  const toggleCheckBoxes = (e) => {
    setAllChecked(e.target.checked);
    if (e.target.checked) {
      const newData = data.map((p) => {
        return { ...p, isChecked: true };
      });
      setData(newData);
    }
    if (!e.target.checked) {
      const newData = data.map((p) => {
        return { ...p, isChecked: false };
      });
      setData(newData);
    }
  };
  useEffect(() => {
    isAllDataChecked();
  }, [data]);

  const onButtonClick = () => toast("The button was clicke");
  return (
    <div className="upwor-text">
      <div className="box">
        <div className="component-wrapper">
          <div className="page-header">
            <span>All pages</span>
            <input
              type="checkbox"
              className="box-input"
              onChange={toggleCheckBoxes}
              checked={allChecked}
            />
          </div>
          <div className="line" />
        </div>
        <div className="page-items">
          {data.map((page) => {
            return (
              <PageComponent
                key={page.id}
                page={page}
                data={data}
                setData={setData}
              />
            );
          })}
          <div className="line" />
        </div>
        <button className="custom-btn" onClick={onButtonClick}>
          Done
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
