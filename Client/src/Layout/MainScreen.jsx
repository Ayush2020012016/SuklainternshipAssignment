import React from "react";
import Category from "../Components/Category";

const MainScreen = () => {
  return (
    <div className="w-full h-[100vh]  bg-slate-50 flex items-center justify-center">
      <div className="bg-zinc-100 w-[90%] h-[90%] border border-indigo-600 rounded-2xl shadow-lg ">
        <Category />
      </div>
    </div>
  );
};

export default MainScreen;
