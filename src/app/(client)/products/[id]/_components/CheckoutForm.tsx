import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type CheckoutFormProps = {
  product: {},
  clientSecret: string
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

export function CheckoutForm({product, clientSecret}: CheckoutFormProps){
  return (
    <Elements options={{clientSecret}} stripe={stripePromise}>

    </Elements>
  )
}

function Form(){
  const stripe = useStripe()
  const elements = useElements()
}