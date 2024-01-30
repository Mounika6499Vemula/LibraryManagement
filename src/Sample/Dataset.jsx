import React from "react";
import {Select,Option} from '@ui5/webcomponents-react';

const data = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' }
  ];
  
  const onChange = (event) => {
    // event.detail.selectedOption is a reference to the selected HTML Element
    // dataset contains all attributes that were passed with the data- prefix.
    console.log(event.detail.selectedOption.dataset.id);
  };
  const Dataset = () =>
  {
    return(
        <Select onChange={onChange}>
            {data.map((item) => (
            <Option key={item.id} data-id={item.id}>
                {item.text}
            </Option>
            ))}
        </Select>
    );
  }
  
  export default Dataset;