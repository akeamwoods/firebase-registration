import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../components/Modal";
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
        <Modal
          heading="Warning"
          message="Deleting your account is permanent/irreversible. Are you sure you wish
          to continue?"
          onContinue={() => dispatch(actions.deleteProfileButtonClicked())}
          onCancel={() => setVisibility(false)}
        />
      </Popup>
      <Button onClick={() => setVisibility(true)}>Delete Profile</Button>
    </Wrapper>
  );
};
