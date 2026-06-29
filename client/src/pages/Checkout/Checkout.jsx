import CheckoutForm from "../../components/checkout/CheckoutForm";
import OrderSummary from "../../components/checkout/OrderSummary";

function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-20">

      <h1 className="mb-10 text-5xl font-bold text-white">
        Checkout
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        <OrderSummary />

      </div>

    </div>
  );
}

export default Checkout;