import React from "react";
import Filter from "./components/Filter";

const Regulasi = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800">Page Regulasi</h1>

      <button
        className="btn btn-primary bg-blue-500"
        onClick={() => document.getElementById("my_modal_1").showModal()}>
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <Filter />
    </div>
  );
};

export default Regulasi;
