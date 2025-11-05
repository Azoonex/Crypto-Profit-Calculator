import useWebSocket, { ReadyState } from "react-use-websocket";

export default function BinanceTicker({ symbol = "btcusdt" }) {
  const streamUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`;

  const { lastMessage, readyState } = useWebSocket(streamUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 3000,
  });

  const price = lastMessage ? JSON.parse(lastMessage.data).p : null;

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


