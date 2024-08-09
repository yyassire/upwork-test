import React from "react";

function PageComponent({ page, data, setData }) {
  const toggleBox = (e) => {
    const newData = data.map((p) => {
      if (page.id === p.id) {
        return { ...page, isChecked: e.target.checked };
      }
      return p;
    });

    setData(newData);
  };
  return (
    <div className="page-item">
      <span>{page.name}</span>
      <input
        onChange={toggleBox}
        type="checkbox"
        className="box-input"
        checked={page.isChecked}
        value={page.isChecked}
      />
    </div>
  );
}

export default PageComponent;
