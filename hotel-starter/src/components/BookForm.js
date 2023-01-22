import React from "react";
// components
import AdultsDrobdown from "../components/AdultsDropdown";
import KidsDrobdown from "../components/KidsDropdown";
import ChekIn from "../components/CheckIn";
import ChekOut from "../components/CheckOut";

const BookForm = () => {
  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <ChekIn />
        </div>
        <div className="flex-1 border-r">
          <ChekOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDrobdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDrobdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
