import React from "react";
import { PacmanLoader } from "react-spinners";


function PageLoading() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <PacmanLoader color="#36d7b7" 
            loading={true}
            />
        </div>
    )
}

export default PageLoading;