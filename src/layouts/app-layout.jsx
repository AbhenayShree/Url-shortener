import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (<div>
        <main className="min-h-screen container">
            <Header />
            <Outlet/>
        </main>

        <div className="p-10 text-centre bg-gray-800 mt-10">
            <pre>
                BY ABHENAY SHREE
                <br/>
                contact: abhenayshree03@gmail.com
                <br/>
                <a href="https://github.com/AbhenayShree" target="_blank" rel="noopener noreferrer" className="text-blue-400"></a>
                        GitHub:github.com/AbhenayShree
                <a/>
            </pre> 
        </div>
    </div>
    )
}

export default AppLayout;
