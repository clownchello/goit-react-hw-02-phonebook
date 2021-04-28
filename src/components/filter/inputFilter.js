import React, {Comment} from "react";


const filter = ({filterField, handleChangeFilterField }) =>  (
    <>
    <h3>Find contacts by name</h3>
    <input
      value={filterField}
      onChange={handleChangeFilterField}
    />
    </>
);
export  default filter