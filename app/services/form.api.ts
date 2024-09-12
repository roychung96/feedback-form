import { queryStringHelper } from "../helpers/queryStringHelper";

export const sendFeedbackForm = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  const { firstName, lastName, email, message } = formData;
  const query = {
    "entry.1442845131": firstName, //state
    "entry.533051443": lastName, //brand
    "entry.649492775": email, //model
    "entry.1092063468": message, //name
  };

  const queryString = queryStringHelper(query);
  //https://stackoverflow.com/questions/51995070/post-data-to-a-google-form-with-ajax
  const endPoints = `https://docs.google.com/forms/d/e/1HD4fh58kc66Ajux8QnmNmfDWTQ2GE0l0esU2Hm3JOLE/formResponse${
    queryString ? `?${queryString}` : ""
  }`;

  const sendFormResponse = await fetch(endPoints, {
    headers: { "Content-Type": "text/plain" },
    mode: "no-cors",
  });

  return sendFormResponse;
};
