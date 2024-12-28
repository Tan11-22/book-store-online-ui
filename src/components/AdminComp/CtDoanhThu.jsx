import React, {useState, useEffect, useRef} from 'react'
import Chart from 'react-apexcharts';
import { getDoanhThu } from '../../context/QuanTriSach';
import { formatCurrency } from '../../context/utility';
import ReportDoanhThu from './ReportDoanhThu';
import ReactToPrint from 'react-to-print';

function CtDoanhThu() {
    const [data, setData] = useState()
    const [nam, setNam] = useState(2024)
    const componentRef = useRef();
    useEffect(
        () => {
            const fetchData1 = async () => {
                try {
                  const result = await getDoanhThu(parseInt(nam));
                  setData(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData1(); 
            // console.log(dataSach)
        }, 
        [nam]
    )

    const [activeTab, setActiveTab] = useState('0');

    // Handle tab click
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    if(data == undefined) return null
    const chartConfig1 = {
        series: [
          {
            name: "Chi phí",
            data: [data[0].thanhTienNhap, data[1].thanhTienNhap, data[2].thanhTienNhap, data[3].thanhTienNhap, data[4].thanhTienNhap,
             data[5].thanhTienNhap, data[6].thanhTienNhap, data[7].thanhTienNhap, data[8].thanhTienNhap, data[9].thanhTienNhap, data[10].thanhTienNhap, data[11].thanhTienNhap],
          },
          {
            name: "Doanh thu",
            data: [data[0].thanhTienBan, data[1].thanhTienBan, data[2].thanhTienBan, data[3].thanhTienBan, data[4].thanhTienBan, data[5].thanhTienBan,
            data[6].thanhTienBan, data[7].thanhTienBan, data[8].thanhTienBan, data[9].thanhTienBan, data[10].thanhTienBan, data[11].thanhTienBan],
          }
        ],
        chart: {
          type: "line",
          height: 240,
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "Biểu đồ doanh số",
          align: "left",
          style: {
            fontSize: "20px",
            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
            fontWeight: 700,
        }
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#b91c1c", "#4CAF50"],
        stroke: {
          lineCap: "round",
          curve: "smooth",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
          categories: [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
          ],
        },
        yaxis: {
            title: {
                text: "Việt Nam Đồng",
                align: "left",
                style: {
                  fontSize: "12px",
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
                  fontWeight: 700,
              }},
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
        },
        grid: {
          show: true,
          borderColor: "#dddddd",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: 5,
            right: 20,
          },
        },
        fill: {
          opacity: 0.8,
        },
        tooltip: {
          theme: "dark",
        },
      };


      const chartConfig2 = {
        series: [
          {
            name: "Nhập",
            data: [data[0].tongSoSachNhap, data[1].tongSoSachNhap, data[2].tongSoSachNhap, data[3].tongSoSachNhap, data[4].tongSoSachNhap,
             data[5].tongSoSachNhap, data[6].tongSoSachNhap, data[7].tongSoSachNhap, data[8].tongSoSachNhap, data[9].tongSoSachNhap, data[10].tongSoSachNhap, data[11].tongSoSachNhap],
          },
          {
            name: "Bán",
            data: [data[0].tongSoSachBan, data[1].tongSoSachBan, data[2].tongSoSachBan, data[3].tongSoSachBan, data[4].tongSoSachBan, data[5].tongSoSachBan,
            data[6].tongSoSachBan, data[7].tongSoSachBan, data[8].tongSoSachBan, data[9].tongSoSachBan, data[10].tongSoSachBan, data[11].tongSoSachBan],
          }
        ],
        chart: {
          type: "line",
          height: 240,
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "Biểu đồ thống kê bán hàng",
          align: "left",
          style: {
            fontSize: "20px",
            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
            fontWeight: 700,
        }
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#b91c1c", "#4CAF50"],
        stroke: {
          lineCap: "round",
          curve: "smooth",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
          categories: [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
          ],
        },
        yaxis: {
            title: {
                text: "Cuốn sách",
                align: "left",
                style: {
                  fontSize: "12px",
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
                  fontWeight: 700,
              }},
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
        },
        grid: {
          show: true,
          borderColor: "#dddddd",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: 5,
            right: 20,
          },
        },
        fill: {
          opacity: 0.8,
        },
        tooltip: {
          theme: "dark",
        },
      };
      

  return (
    <div>
      {/* <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"> */}
        <div className="relative mx-4 mt-4 flex flex-col gap-4 w-full overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
            
            <div className='grid grid-cols-3 gap-x-4 w-full'>
                <div>
                    <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Năm</label>
                                {/* {errorLoaiGia && <p className="text-red-600 mt-2">{errorLoaiGia}</p>} */}
                                <div>
                                <select
                                    value={nam}
                                    onChange={(e)=>setNam(e.target.value)}
                                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                                pl-3 text-sm border-gray-300 rounded border"
                                    >
                                    <option value="" disabled>Chọn năm</option>
                                    <option  value="2024">năm 2024</option>
                                    <option  value="2025">năm 2025</option>
                                    <option  value="2026">năm 2026</option>
                                    </select>
                                </div>
                </div>
                <div className='col-span-2 mx-auto'>


                    <div className="w-full">
                        <div className="relative right-0">
                            <ul
                            className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
                            data-tabs="tabs"
                            role="list"
                            >
                            <li className="z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${activeTab === '0' ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => handleTabClick('0')}
                                role="tab"
                                aria-selected={activeTab === '0'}
                                aria-controls="app"
                                >
                                <span className="ml-1 font-bold">Bảng</span>
                                </a>
                            </li>
                            <li className="ml-3 z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${activeTab === '1' ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => handleTabClick('1')}
                                role="tab"
                                aria-selected={activeTab === '1'}
                                aria-controls="message"
                                >
                                <span className="ml-1 font-bold">Biểu đồ</span>
                                </a>
                            </li>
                        
                            </ul>
                        </div>

                        </div>



                </div>
            </div>
        </div>
        {
            activeTab === '0'? (
                <>
                            <div className="p-2 px-0 overflow-scroll h-[80vh]">
                                <table className="w-full text-left table-auto min-w-max m-2">
                                <thead>
                                    <tr>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                     
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                        Tháng 1
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                        Tháng 2
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                        Tháng 3
                                        </p>
                                    </th>

                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black ">
                                        Tháng 4
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 5
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 6
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 7
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 8
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 9
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 10
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 11
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 12
                                        </p>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Số lượng sách nhập
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {data[0].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[1].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[2].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[3].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[4].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[5].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[6].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[7].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[8].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[9].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[10].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[11].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Chi phí
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {formatCurrency(data[0].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[1].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[2].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[3].thanhTienNhap) }
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[4].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[5].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[6].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[7].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[8].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[9].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[10].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[11].thanhTienNhap)} 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Số lượng sách bán
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {data[0].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[1].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[2].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[3].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[4].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[5].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[6].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[7].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[8].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[9].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[10].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[11].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Doanh số
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {formatCurrency(data[0].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[1].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[2].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[3].thanhTienBan) }
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[4].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[5].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[6].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[7].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[8].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[9].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[10].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[11].thanhTienBan)} 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                                Tổng cộng
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {formatCurrency(data[0].thanhTienBan - data[0].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[1].thanhTienBan - data[1].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[2].thanhTienBan - data[2].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[3].thanhTienBan - data[3].thanhTienNhap) }
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[4].thanhTienBan - data[4].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[5].thanhTienBan - data[5].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[6].thanhTienBan - data[6].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[7].thanhTienBan - data[7].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[8].thanhTienBan - data[8].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[9].thanhTienBan - data[9].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[10].thanhTienBan - data[10].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[11].thanhTienBan - data[11].thanhTienNhap)} 
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>

                                <div className='mr-5 mt-10 flex justify-end'>
                                  
                                <ReactToPrint
                                    trigger={() => <button 
                                    className='flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                    type='button'
                                    >
                                        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"/>
                                        </svg>


                                        Xuất báo cáo</button>}
                                    content={() => componentRef.current}
                                    pageStyle={`@page { 
                                      size: landscape; 
                                      margin: 0; 
                                      @top-left {
                                        content: none;
                                      }
                                      @bottom-left {
                                        content: none;
                                      }
                                    }`}
                                />
                                <div className='hidden'>
                                <ReportDoanhThu ref={componentRef} data={data} nam={nam}/>
                                </div>
                                </div>
                            </div>
                </>
            ):
            (
                <div className="grid grid-cols-2 gap-x-4">
                <div className="pt-2 px-2 pb-0 w-full">
                    <Chart
                    options={chartConfig1}
                    series={chartConfig1.series}
                    type="line"
                    height={400}
                    />
                </div>
                <div className="pt-2 px-2 pb-0 w-full">
                    <Chart
                    options={chartConfig2}
                    series={chartConfig2.series}
                    type="line"
                    height={400}
                    />
                </div>
                </div>
            )
        }


    </div>
  )
}

export default CtDoanhThu
