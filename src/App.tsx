import { useCallback, useEffect, useState, useTransition } from "react";
import BinanceTicker from "./components/bin/binance-ticker";
import { binarySymbols } from "./components/constant/binance";
import SelectOption from "./components/drop-down";
import Header from "./components/layout/header";
import { initialParams } from "./components/link/params";
import CryptoCalculator from "./components/bin/profit-calculator";

export default function App() {
  const [params, setParams] = useState<null | string>("");
  const [isPending, startTransition] = useTransition();
  const [currentPriceCrypto, setCurrentPriceCrypto] = useState<Array<string>>(
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    startTransition(function () {
      const value = e.target.value;
      initialParams.set("binary_select", value);
      const newUrl = `${window.location.pathname}?${initialParams.toString()}`;
      window.history.pushState({}, "", newUrl);
      setParams(initialParams.get("binary_select"));
    });
  }

  return (
    <main>
      <Header />
      {params && (
        <BinanceTicker
          currentPriceCrypto={currentPriceCrypto}
          setCurrentPriceCrypto={setCurrentPriceCrypto}
          symbol={params}
        />
      )}
      <SelectOption
        handleChange={handleChange}
        defaultValue={initialParams.get("binary_select") || ""}
        options={binarySymbols}
        name="Select binary"
        disabled={isPending}
      />
      <CryptoCalculator currentPriceCrypto={currentPriceCrypto} />
    </main>
  );
}
