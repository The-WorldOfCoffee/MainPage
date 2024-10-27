import { useState } from "react";
import logo from "@public/logo/logo.svg";
import { Returning_panels } from "./Dashboard_panels";

const DashBoard = () => {
  const [activePanel, setActivePanel] = useState("profile"); 


  const navigation = (PanelName: string) => {
    setActivePanel(PanelName);
  };

  return (
    <div style={{ background: "#A79277" }} className="w-screen h-screen flex justify-center items-center">
      <div style={{ background: "#D1BB9E" }} className="w-11/12 h-5/6 flex flex-col rounded-xl">
        <header style={{ background: "#EAD8C0" }} className="h-20 flex rounded-tl-lg rounded-tr-lg justify-between px-5 py-7">
          <div className="flex gap-2">
            <img src="./public/header/icon.png" alt="" />
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-3">
            <button style={{ background: "#FFF2E1" }} className="w-7 rounded-full flex items-center justify-center p-2 h-7">
              <img src="./public/icon/vector.png" alt="" />
            </button>
            <button style={{ background: "#FFF2E1" }} className="w-7 rounded-full flex items-center justify-center h-7">
              <img src="./public/icon/notif.png" alt="" />
            </button>
            <button style={{ background: "#FFF2E1" }} className="w-7 rounded-full flex items-center justify-center h-7">
              <img src="./public/icon/notif.png" alt="" />
            </button>
          </div>
        </header>
        <div className="flex flex-1">
          <aside style={{ background: "#FFF2E1" }} className="lg:w-1/4 w-1/6 rounded-bl-lg h-full">
            <div className="w-full h-full">
              <button onClick={() => navigation("profile")} className="bg-inherit h-12 sidebar_button w-full">
                Profile
              </button>
              <button onClick={() => navigation("order")} className="bg-inherit h-12 sidebar_button w-full">
                Order
              </button>
              <button onClick={() => navigation("settings")} className="bg-inherit h-12 sidebar_button w-full">
                Settings
              </button>
              <button onClick={() => navigation("signout")} className="bg-inherit h-12 sidebar_button w-full">
                Signout
              </button>
            </div>
          </aside>
          <div style={{ background: "#FDFDFD" }} className="w-full h-full panel">
            {Returning_panels(activePanel)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
