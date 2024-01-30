import React from "react";
import {Button,Bar} from '@ui5/webcomponents-react';

const BarStart = (props) => {
    return <div slot={props.slot}>Start</div>;
  };
  const BarEnd = (props) => {
    return <Button slot={props.slot}>Close</Button>;
  };
  const Slot = () => {
    return (
      <Bar startContent={<BarStart />} endContent={<BarEnd />}>
        <div>I'm not a custom component</div>
      </Bar>
    );
  };

  export default Slot;