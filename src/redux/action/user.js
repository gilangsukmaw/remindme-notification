import { GET_USER_BEGIN, PUT_ALERT_BEGIN, PUT_USER_BEGIN, PUT_ALERT_PHOTO_BEGIN } from "../const/type";

export const getUser = () => {
  return {
    type: GET_USER_BEGIN,
  };
};

export const putUser = (update) => {
  return {
    type: PUT_USER_BEGIN,
    update,
  };
};

export const alertPut = (showModal) => {
  return {
    type: PUT_ALERT_BEGIN,
    showModal,
  };
};

export const alertPhoto = (showModalPhoto) => {
  return {
    type: PUT_ALERT_PHOTO_BEGIN,
    showModalPhoto,
  };
};
