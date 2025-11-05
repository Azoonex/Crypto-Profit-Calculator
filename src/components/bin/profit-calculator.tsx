import { useActionState } from "react";
import Input from "../input";
import Button from "../button";

type ActionState = { message: string };

type ActionResult = {
  price: FormDataEntryValue | null;
  amount: FormDataEntryValue | null;
};

function CryptoCalculator({
  currentPriceCrypto,
}: {
  currentPriceCrypto: Array<string>;
}) {
  function action(currentState: ActionState, formData: FormData) {
    const price = formData.get("price");
    const amount = formData.get("amount");
    console.log(price, amount);
    return {
      price,
      amount,
    };
  }
  const [state, formAction, isPending] = useActionState<ActionResult, null>(
    action,
    null
  );

  console.log(state);

  return (
    <form action={formAction}>
      <Input name="price" placeholder="By Price" />
      <Input placeholder="price" />
      <Input name="amount" placeholder="Amount" />
      <Button type="submit">{isPending ? "Loading..." : "Submit"}</Button>
    </form>
  );
}

export default CryptoCalculator;
