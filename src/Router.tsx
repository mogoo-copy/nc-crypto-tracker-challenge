import { createHashRouter } from "react-router-dom";

import Root from "./Root";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
import Chart from "./screens/Coin/tabs/Chart";
import Price from "./screens/Coin/tabs/Price";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Coins /> },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          { path: "chart", element: <Chart /> },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
