import { useEffect, type Dispatch, type SetStateAction } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export default function BinanceTicker({
  symbol,
  setCurrentPriceCrypto,
  currentPriceCrypto,
}: {
  symbol: string;
  setCurrentPriceCrypto: Dispatch<SetStateAction<string[]>>;
  currentPriceCrypto: Array<string>;
}) {
  const streamUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`;

  const { lastMessage, readyState } = useWebSocket(streamUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 3000,
  });

  const price = lastMessage ? JSON.parse(lastMessage.data).p : null;

  useEffect(() => {
    if (price && currentPriceCrypto.length < 5) {
      setCurrentPriceCrypto((prev) => {
        if (prev.length < 5) {
          return [...prev, price];
        }
        CloseEvent;
        return prev;
      });
    }
  }, [price]);

  return (
    <div>
      <h3>{symbol.toUpperCase()}</h3>
      <div>
        {readyState === ReadyState.OPEN ? "connected" : "disconnected"} •
        {price ? Number(price).toLocaleString() : "loading…"}
      </div>
    </div>
  );
}
