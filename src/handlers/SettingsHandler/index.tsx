import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Popup } from "../../components/Popup";
import { actions } from "../../store/actions";
import { Wrapper, Button } from "./style";

export const SettingsHandler = () => {
  const dispatch = useDispatch();
  const [isVisible, setVisibility] = useState(false);
  return (
    <Wrapper>
      <Popup
        isVisible={isVisible}
        onClick={() => {
          setVisibility(false);
        }}
        scrollLock
      >
        <div style={{ padding: "30px 15px", maxWidth: "300px" }}>
          <img
            src={process.env.PUBLIC_URL + "/warning.svg"}
            height="72px"
            alt="Warning Icon"
          />
          <h2>Warning</h2>
          <p style={{ color: "gray" }}>
            Deleting your account is permanent/irreversible. Are you sure you
            wish to continue?
          </p>
          <span style={{ display: "flex", justifyContent: "stretch" }}>
            <button
              style={{ display: "flex", flex: 1 }}
              onClick={() => dispatch(actions.deleteProfileButtonClicked())}
            >
              Continue
            </button>
            <button
              style={{ display: "flex", flex: 1 }}
              onClick={() => setVisibility(false)}
            >
              Cancel
            </button>
          </span>
        </div>
      </Popup>
      <Button onClick={() => setVisibility(true)}>Delete Profile</Button>
    </Wrapper>
  );
};
