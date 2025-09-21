import { useIsDark } from '../utils/theme'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const isDark = useIsDark();

  return (
    <div className="dark:bg-[#1c1c1c] bg-white p-[24px] min-h-screen">
      <div className="flex items-center justify-between mb-[24px]">
        <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-semibold px-[8px] py-[4px] mb-[20px]">
          eCommerce
        </div>
          <span
          className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal px-[8px] py-[4px] underline cursor-pointer"
          onClick={() => navigate("/orderList")}
        >
          Go to OrderList
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[24px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
            {Array.from([
              {
                cardName: "Customers",
                data1: "3,781",
                data2: "+11.01%",
                data2Icon: "ArrowRise.png",
                bgColor: "#e3f5ff",
              },
              {
                cardName: "Orders",
                data1: "1,219",
                data2: "-0.03%",
                data2Icon: "ArrowFall.png",
                bgColor: "#f7f9fb",
                darkBgColor: "rgba(255, 255, 255, 0.05)",
              },
              {
                cardName: "Revenue",
                data1: "$695",
                data2: "+15.03%",
                data2Icon: "ArrowRise.png",
                bgColor: "#f7f9fb",
                darkBgColor: "rgba(255, 255, 255, 0.05)",
              },
              {
                cardName: "Growth",
                data1: "30.1%",
                data2: "+6.08%",
                data2Icon: "ArrowRise.png",
                bgColor: "#e5ecf6",
              },
            ]).map((currItem, index) => (
              <div
                key={index}
                className={`p-[24px] rounded-[16px] cursor-pointer transition-all duration-300 hover:scale-105 group ${
                  isDark && !!currItem.darkBgColor
                    ? "text-[#fff]"
                    : "text-[#1c1c1c]"
                } 
                }`}
                style={{
                  background:
                    isDark && !!currItem.darkBgColor
                      ? currItem.darkBgColor
                      : currItem.bgColor,
                }}
              >
                <div className="text-[14px] font-semibold mb-[8px]">
                  {currItem.cardName}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[32px] font-semibold group-hover:hidden">
                    {currItem.data1}
                  </div>
                  <div className="text-[12px] items-center gap-x-[4px] hidden group-hover:flex">
                    {currItem.data2}
                    <span>
                      <img
                        src={`${
                          isDark && !!currItem.darkBgColor
                            ? "dark/"
                            : ""
                        }${currItem.data2Icon}`}
                        className="w-[16px] h-[16px]"
                      />
                    </span>
                  </div>
                  <div className="text-[12px] flex items-center gap-x-[4px] group-hover:hidden">
                    {currItem.data2}
                    <span>
                      <img
                        src={`${
                          isDark && !!currItem.darkBgColor
                            ? "dark/"
                            : ""
                        }${currItem.data2Icon}`}
                        className="w-[16px] h-[16px]"
                      />
                    </span>
                  </div>
                  <div className="text-[32px] font-semibold hidden group-hover:block">
                    {currItem.data1}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div 
          className="p-[24px] rounded-[16px] text-[#1c1c1c]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f7f9fb',
            color: isDark ? '#fff' : '#1c1c1c'
          }}
        >
          <div className="dark:text-[#fff] text-[14px] font-semibold mb-[16px]">
            Projections vs Actuals
          </div>
          <div>
            <img
              src={`${isDark ? "dark/" : ""}BarChart.png`}
              className="w-full h-auto max-w-[384px] max-h-[168px]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[24px] mb-[24px]">
        <div 
          className="p-[24px] rounded-[16px]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f7f9fb',
            color: isDark ? '#fff' : '#1c1c1c'
          }}
        >
          <div className="flex items-center gap-[16px] mb-[16px]">
            <div className="text-[14px] font-semibold">Revenue</div>
            <div>|</div>
            <div className="flex items-center gap-x-[4px] py-[2px] pr-[8px] pl-[4px]">
              <span className="dark:bg-[#c6c7f8] w-[6px] h-[6px] bg-[#1c1c1c] rounded-full"></span>
              <span className="text-[12px]">Current Week</span>
              <span className="text-[12px] font-semibold">$58,211</span>
            </div>
            <div className="flex items-center gap-x-[4px] py-[2px] pr-[8px] pl-[4px]">
              <span className="w-[6px] h-[6px] bg-[#a8c5da] rounded-full"></span>
              <span className="text-[12px]">Previous Week</span>
              <span className="text-[12px] font-semibold">$68,768</span>
            </div>
          </div>
          <div>
            <img
              src={`${isDark ? "dark/" : ""}CurvChart.png`}
              className="w-full h-auto max-w-[614px] max-h-[232px]"
            />
          </div>
        </div>

        <div 
          className="p-[24px] rounded-[16px]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f7f9fb',
            color: isDark ? '#fff' : '#1c1c1c'
          }}
        >
          <div className="text-[14px] font-semibold mb-[16px]">
            Revenue by Location
          </div>
          <div className="mb-[16px]">
            <img
              src={`${isDark ? "dark/" : ""}World Map.png`}
              className="w-full h-auto max-w-[154px] max-h-[82px]"
            />
          </div>
          <div>
            {Array.from([
              {
                city: "New York",
                amount: 72,
                color: "#a8c5d8", // Blue
                bgColor: "rgba(168, 197, 216, 0.4)",
              },
              {
                city: "San Francisco",
                amount: 39,
                color: "#b8d4a8", // Green
                bgColor: "rgba(184, 212, 168, 0.4)",
              },
              {
                city: "Sydney",
                amount: 25,
                color: "#d4a8c5", // Pink
                bgColor: "rgba(212, 168, 197, 0.4)",
              },
              {
                city: "Singapore",
                amount: 61,
                color: "#d8c5a8", // Orange/Beige
                bgColor: "rgba(216, 197, 168, 0.4)",
              },
            ]).map((currItem, index) => (
              <div key={index} className="mb-[16px]">
                <div className="flex items-center justify-between text-[12px] mb-[8px]">
                  <span>{currItem.city}</span>
                  <span>{currItem.amount}K</span>
                </div>
                <div 
                  className="relative h-[2px] w-full"
                  style={{ backgroundColor: currItem.bgColor }}
                >
                  <div
                    style={{ 
                      width: `${currItem.amount}%`,
                      backgroundColor: currItem.color
                    }}
                    className="absolute top-0 left-0 h-full"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[24px]">
        <div 
          className="p-[24px] rounded-[16px]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f7f9fb',
            color: isDark ? '#fff' : '#1c1c1c'
          }}
        >
          <div className="text-[14px] font-semibold mb-[16px]">
            Top Selling Products
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr className="dark:border-[#fff] dark:border-opacity-20 border-b border-[#1c1c1c] border-opacity-20 text-left">
                  {Array.from([
                    {
                      th: "Name",
                    },
                    {
                      th: "Price",
                    },
                    {
                      th: "Quantity",
                    },
                    {
                      th: "Amount",
                    },
                  ]).map((currItem, index) => (
                    <th
                      key={index}
                      className="py-[8px] pr-[12px] text-[12px] opacity-40 font-normal"
                    >
                      {currItem.th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from([
                  {
                    name: "ASOS Ridley Hight Waist",
                    price: "$79.49",
                    quantity: "82",
                    amount: "$6,518.18",
                  },
                  {
                    name: "Marco Lightweight Shirt",
                    price: "$128.50",
                    quantity: "37",
                    amount: "$4,754.50",
                  },
                  {
                    name: "Half Sleeve Shirt",
                    price: "$39.99",
                    quantity: "64",
                    amount: "$2,559.36",
                  },
                  {
                    name: "Lightweight Jacket",
                    price: "$20.00",
                    quantity: "184",
                    amount: "$3,680.00",
                  },
                  {
                    name: "Marco Shoes",
                    price: "$79.49",
                    quantity: "64",
                    amount: "$1,965.81",
                  },
                ]).map((currItem, index) => (
                  <tr key={index}>
                    <td className="py-[8px] pr-[12px] text-[12px]">
                      {currItem.name}
                    </td>
                    <td className="py-[8px] pr-[12px] text-[12px]">
                      {currItem.price}
                    </td>
                    <td className="py-[8px] pr-[12px] text-[12px]">
                      {currItem.quantity}
                    </td>
                    <td className="py-[8px] pr-[12px] text-[12px]">
                      {currItem.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div 
          className="p-[24px] rounded-[16px]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f7f9fb',
            color: isDark ? '#fff' : '#1c1c1c'
          }}
        >
          <div className="text-[14px] font-semibold mb-[16px]">Total Sales</div>
          <div className="flex justify-center mb-[16px] relative">
            <img
              src={`${isDark ? "dark/" : ""}sales-chart.png`}
              className="w-[120px] h-[120px] max-w-full max-h-full"
            />
            <div className="absolute bottom-[20px] left-[25px] bg-[#1c1c1c] bg-opacity-80 px-[8px] py-[4px] text-[#fff] text-[12px] rounded-[8px]">
              38.6%
            </div>
          </div>
          <div>
            {Array.from([
              {
                name: "Direct",
                amount: "$300.56",
                color: "#1c1c1c",
                darkColor: "#c6c7f8",
              },
              {
                name: "Affilliate",
                amount: "$135.18",
                color: "#baedbd",
              },
              {
                name: "Sponsored",
                amount: "$154.02",
                color: "#95a4fc",
              },
              {
                name: "E-mail",
                amount: "$49.96",
                color: "#b1e3ff",
              },
            ]).map((currItem, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-[12px] mb-[16px]"
              >
                <div className="flex items-center gap-x-[4px]">
                  <span
                    style={{
                      background:
                        isDark && !!currItem.darkColor
                          ? currItem.darkColor
                          : currItem.color,
                    }}
                    className="w-[6px] h-[6px] rounded-full"
                  ></span>
                  {currItem.name}
                </div>
                <div>{currItem.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}