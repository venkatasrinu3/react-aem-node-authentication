import React, { useState } from "react";
const PureComponentMemoInstance = ({name}) => {
    console.log("Name from Parent",name);
    return (
        <div>
        </div>
    )
}
export default PureComponentMemoInstance;