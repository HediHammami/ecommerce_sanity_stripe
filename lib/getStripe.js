import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51KRdRTAQu76lYFIKvac2NqVZBm8VuGTrKYOPFnlXpYcsQsjgE3gKSJSI2QLgojCKzrYgSzkxGaNa7RsXSldEv26m00TB8TFVTg"
    );
  }

  return stripePromise;
};

export default getStripe;
