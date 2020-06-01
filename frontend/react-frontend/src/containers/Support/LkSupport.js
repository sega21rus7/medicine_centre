import React from 'react';
import LkSupportLayout from "./LkSupportLayout";
import LkSupportRouter from "../../routes/lk_support_routes";


class LkSupport extends React.Component {
  render() {
    return (
      <div className="LkSupport">
        <LkSupportLayout>
          <LkSupportRouter/>
        </LkSupportLayout>
      </div>
    )
  };
}

export default LkSupport;
