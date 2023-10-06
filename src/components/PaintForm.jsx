import React from "react";
import ColorOptions from "../common/ColorOptions";

const PaintForm = () => {
  const paintSquares = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={paintSquares}>
      <div className="my-3">
        <h1 className="text-2xl font-medium my-2">Paint in</h1>
        <ColorOptions />
      </div>

      <div className="my-2">
        <div>
          <input type="radio" name="fuck" />
          <label className="ml-2 text-lg">Empty Ones</label>
        </div>
        <div>
          <input type="radio" name="fuck" />
          <label className="ml-2 text-lg">Selected Ones</label>
        </div>
      </div>
      <div className="my-2 mb-4 text-center">
        <button
          className=" bg-blue-600 text-white  
          font-medium text-center text-lg 
          px-5 py-2.5 rounded-lg hover:bg-blue-500"
        >
          Paint
        </button>
      </div>
    </form>
  );
};

export default PaintForm;
