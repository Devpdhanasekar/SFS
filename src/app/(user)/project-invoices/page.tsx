// "use client";
// import React, { useState } from "react";

// import Image from "next/image";
// // import addBtn from "../../assets/addBtn.svg";

// import { nanoid } from "nanoid";
// // import { TrashIcon } from "@heroicons/react/24/outline";
// // import { Droppable, Draggable } from 'react-beautiful-dnd';
// import { useEffect, useRef } from "react";
// // import { Value } from "sass";
// import{ jsPDF }  from 'jspdf';
// import html2canvas from 'html2canvas';
// import { TrashIcon } from "lucide-react";
// interface AddInputItem {
//   uniqueString: string;
// }
// const Page = () => {
//   const [addInput, setAddInput] = React.useState<AddInputItem[]>([
//     { uniqueString: nanoid() },
//   ]);
//   const [openSidebar, setOpenSidebar] = useState(false);
//   function handleInput() {
//     const newItem: AddInputItem = { uniqueString: nanoid() };
//     setAddInput((prev) => [...prev, newItem]);
//   }
//   function handleDelete(id: number) {
//     if (addInput.length === 1) {
//       alert("You can't delete the last item");
//     } else {
//       setAddInput((prev) => prev.filter((_, index) => index !== id));
//     }
//   }
//   const [invoiceDetails, setInvoiceDetails] = React.useState<any>({
//     invoiceNumber: "",
//     issuedOn: "",
//     billTo: "",
//     due: "",
//     project:""
//   });
//   const [userData, setUserData] = React.useState<any>({
//     item: "",
//     quantity: "",
//     price: "",
//     total: ""
//   });
//   function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
//     setUserData((prevState: any) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }));
//     console.log(userData);
//   }
//   const downloadPdf = () => {
//     const input = document.getElementById('invoiceContent');
//     if (input) {
//       html2canvas(input, { scale: 2 }).then((canvas: { toDataURL: (arg0: string) => any; width: any; height: any; }) => { // Adjust scale for better quality
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF({
//           orientation: 'portrait',
//           unit: 'pt',
//           format: [canvas.width, canvas.height]
//         });
//         pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
//         pdf.save('invoice.pdf');
//       });
//     } else {
//       console.error('Element with id "invoiceContent" not found');
//     }
//   };
  
//   return (
//     <>
  
//       <div className=" grid  grid-cols-1 gap-2 sm:grid-cols-2 w-[600px] sm:w-[1200px]  mx-6">
//         <div className=" border-r-gray-100 border-r-2 h-screen ">
//           <span className="  block text-gray-200"> From</span>
//           <div className="flex justify-between">
//             <span className="  font-bold">Innocraft Technologies Pvt Ltd</span>
//             <button
//               type="button"
//               className="border rounded-[30px] px-1 py-1.5 text-xs  mx-5"
//             >
//               Custom Branding
//             </button>
//           </div>
//           <span className=" text-xs"> INVOICE#</span> <br />
//           <input
//             type="text"
//             placeholder="24-001"
//             className=" border  w-60 text-sm my-2 border-gray-100 outline-none px-1 py-1.5 rounded-[10px]"
//             name="invoice"
//             value={invoiceDetails.invoiceNumber}
//             onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceNumber: e.target.value })}
//           />
//           <div className=" flex justify-between mx-2 text-xs w-[310px] ">
//             <span> ISSUED ON</span>
            
//             <span> BILL TO</span>
    
//           </div>
//           <div className="flex justify-between  text-xs text-start  w-[500px] ">
//             <input
//               type="date"
//               placeholder="24-001"
//               className=" border  w-[250px] text-xs my-2 border-gray-100 outline-none px-1 py-1.5 rounded-[10px]"
//               value={invoiceDetails.issuedOn}
//               onChange={(e) => setInvoiceDetails({ ...invoiceDetails, issuedOn: e.target.value })}
//             />
//             <input
//               type="email"
//               placeholder="enter email address"
//               className=" border w-[250px] mx-2 text-sm my-2 border-gray-100 outline-none px-2  py-1.5 rounded-[10px]"
//               value={invoiceDetails.billTo}
//               onChange={(e) => setInvoiceDetails({ ...invoiceDetails, billTo: e.target.value })}
//             />
//           </div>
//           <span className="block text-xs mx-1"> Due</span>
//           <input
//             type="date"
//             className="border   w-[250px]  text-xs my-2 border-gray-100 outline-none px-1 py-1.5 rounded-[10px]"
//             name="due"
//             value={invoiceDetails.due}
//             onChange={(e) => setInvoiceDetails({ ...invoiceDetails, due: e.target.value })}
          
//           ></input>
//           <hr className="border-gray-100 my-2" />
//           <span className="block text-xs"> Project</span>
//           <input
//             type="text"
//             placeholder="Select Project "
//             className="border text-xs rounded-[30px] my-3 px-2 py-2 w-[500px]"
//             value={invoiceDetails.project}
//             onChange={(e) => setInvoiceDetails({ ...invoiceDetails, project: e.target.value })}
//           />
//           <table className=" border-b-2 border-b-gray-100">
//             <thead className="  ">
//               <tr className="">
//                 <th
//                   scope="col"
//                   className="py-3.5 pl-4 pr-4  text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
//                 >
//                   Items
//                 </th>
//                 <th
//                   scope="col"
//                   className=" py-3.5 px-3 text-left text-sm font-normal text-slate-700 sm:table-cell"
//                 >
//                   QTY
//                 </th>
//                 <th
//                   scope="col"
//                   className=" py-3.5 px-3 text-left text-sm font-normal text-slate-700 sm:table-cell"
//                 >
//                   Rate
//                 </th>
//                 <th
//                   scope="col"
//                   className="py-3.5 pl-3 pr-4 text-left text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
//                 >
//                   Total
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {addInput.map((item, index) => (
//                 <>
//                   <tr className="" key={item.uniqueString}>
//                     <td className="py-1">
//                       <div className="font-medium text-slate-700 flex items-center ">
//                         {" "}
//                         {/* <Image
//                           src={TrashIcon}
//                           alt="addBtn"
//                           className=" inline my-6 sm:my-4"
//                           width={20}
//                           height={20}
//                         /> */}
//                         <input
//                           type="text"
//                           placeholder="Item / Service"
//                           className="border-solid border-2  border-gray-20 rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]  sm:w-[250px]  mx-2   sm:col-span-2  px-2 py-2"
//                           onChange={(e) => handleUserInput(e)}
//                           name="item"
//                           value={userData.item}
//                         />
//                       </div>
//                     </td>
//                     <td className="px-3 py-1 text-sm text-right text-slate-500 sm:table-cell ">
//                       <input
//                         type="text"
//                         placeholder="1"
//                         className="border-solid border-2   border-gray-20 rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] w-[70px]  px-2 py-2"
//                         onChange={(e) => handleUserInput(e)}
//                         name="quantity"
//                         value={userData.quantity}
//                       />
//                     </td>
//                     <td className=" px-3 py-1 text-sm text-right text-slate-500 sm:table-cell  ">
//                       <input
//                         type="text"
//                         placeholder="$0.00"
//                         className="border-solid border-2   border-gray-20 rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] px-2 py-2 w-[70px]"
//                         onChange={(e) => handleUserInput(e)}
//                         name="price"
//                         value={userData.price}
//                       />
//                     </td>
//                     <td className="py-1  text-sm text-right text-slate-500 sm:pr-6 md:pr-0 flex justify-center items-center  mx-4">
//                       <span className="my-1 py-2">$0.00</span>
//                       <button
//                         onClick={() => handleDelete(index)}
//                         className="my-1 inline py-2"
//                       >
//                         <TrashIcon className="w-[25px] border-none hover:stroke-Pink-900 mx-3" />
//                       </button>
//                     </td>
//                   </tr>
//                 </>
//               ))}
//             </tbody>
//           </table>
//           <div className=" flex justify-between w-[75%] my-3">
//             <span className=" text-sm">Total</span>
//             <span>$00 </span>
//           </div>
//           <button  className=" text-sm  bg-black-100 text-White-900 my-3 font-semibold border w-[200px] px-1 b before:after:first: py-2 rounded-[30px] hover:bg-Pink-900 hover:text-White-900"
//             onClick={handleInput}>+ New Item</button>
         
//         </div>

//         <div className="" >
//         <div id="invoiceContent"> world
//           <p>Invoice Number: {invoiceDetails.invoiceNumber}</p>
//           <p>Issued On: {invoiceDetails.issuedOn}</p>
//           <p>Bill To: {invoiceDetails.billTo}</p>
//           <p>Due: {invoiceDetails.due}</p>
//           <p>Project: {invoiceDetails.project}</p>
//           <ul>
//             {Object.entries(userData).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {typeof value === 'string' ? value : ''}
//               </li>
//             ))}
//           </ul></div>
//           <button onClick={downloadPdf}>Download PDF</button>

//       </div>
//       </div>
//     </>
//   );
// };

// export default Page;

// "use client"
// import React, { useContext, useState } from "react";

// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import InvoiceItem from "./InvoiceItem";
// import { Button, InputGroup } from "react-bootstrap";
// import InvoiceModel from "./reusable/InvoiceModel";


// const InvoiceForm = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [invoiceNumber, setInvoiceNumber] = useState(1);
//     const [tax, setTax] = useState(0);
//     const [taxAmount, setTaxAmount] = useState();
//     const [discount, setDiscount] = useState(0);
//     const [discountAmount, setDiscountAmount] = useState();
//     const [customurName, setCustomurName] = useState("");
//     const [customurEmail, setCustomurEmail] = useState("");
//     const [customurAddress, setCustomurAddress] = useState("");

//     const [subTotal, setSubTotal] = useState("1.00");
//     // const [total,setTotal] = useState('0.00')

//     //    const [itemName,setItemName] = useState('ddddd')

//     //    setItemName=(console.log('set'))

//     const [items, setItems] = useState([
//       {
//         id: 1,
//         name: "",
//         price: 1.0,
//         quantity: 1,
//       },
//     ]);

//     const subtotal = items.reduce((prev, curr) => {
//       if (curr.name.trim().length > 0) {
//         return prev + curr.price * curr.quantity;
//       }
//       return prev;
//     }, 0);

//     // const sub = items.map((item)=>{
//     //   return item.price * item.quantity;
//     // })

//     const subCalculate = () => {
//       let totalCost = 0;
//       for (const item of items) {
//         totalCost += item.price * item.quantity;
//       }
//       return totalCost;
//     };
//     const sub = subCalculate();

//     const taxRate = (tax * sub) / 100;
//     const discountRate = (discount * sub) / 100;
//     const total = sub - discountRate + taxRate;

//     const handleAddItem = () => {
//       const id = items.length + 1;

//       const newItem = {
//         id,
//         name: "",
//         price: 1,
//         quantity: 1,
//       };

//       const newItems = [...items, newItem];
//       setItems(newItems);
//     };

//     const handleDeleteItem = (item:any) => {
//       console.log(item.id);
//       const newItems = items.filter((data) => data.id !== item.id);
//       setItems(newItems);
//     };

//     // const handleEditItem = (event) => {
//     //   const editedItem = {
//     //     id: event.target.id,
//     //     name: event.target.name,
//     //     value: event.target.value,
//     //   };
//     //   console.log(editedItem);

//     //   const newItems = items.map((item) => {
//     //     for (var key in item) {
//     //       console.log(item.id === editedItem.id);
//     //       if (item.id === editedItem.id) {
//     //         item[key] === editedItem.value;
//     //       }
//     //     }
//     //     return item;
//     //   });

//     //   console.log(newItems);
//     //   setItems(newItems);
//     // };

//     const handleEditItem = (event:any, itemId:any, field:any) => {
//       const updatedItems = items.map((item) => {
//         if (item.id === itemId) {
//           return {
//             ...item,
//             [field]: event.target.value,
//           };
//         }
//         return item;
//       });

//       setItems(updatedItems);
//     };

//     const currency = "$";
//   return (
//     // <DataProvider>
//       <div>
//         <Form onSubmit={(e) => e.preventDefault()}>
//           <Row>
//             <Col md={8} lg={9}>
//               <Card className="p-4 p-xl-5 my-3 my-xl-4">
//                 <div className="d-flex flex-row justify-content-between mb-3">
//                   <div>
//                     <span className="fw-bold">Current Date:</span>
//                     <span>{new Date().toLocaleDateString()}</span>
//                   </div>
//                   <div>
//                     <span className="fw-bold">Invoice Number:</span>
//                     <span>{invoiceNumber}</span>
//                   </div>
//                 </div>
//                 <hr />
//                 <Row>
//                   <Col>
//                     <Form.Label className="fw-bold">
//                       Customur Details
//                     </Form.Label>
//                     <Form.Control
//                       name="name"
//                       className="mt-3 bg-light"
//                       type="text"
//                       placeholder="name"
//                       value={customurName}
//                       onChange={(e) => setCustomurName(e.target.value)}
//                       required={true}
//                     />
//                     <Form.Control
//                       name="email"
//                       className="mt-3"
//                       type="text"
//                       placeholder="email"
//                       value={customurEmail}
//                       onChange={(e) => setCustomurEmail(e.target.value)}
//                       required={true}
//                     />
//                     <Form.Control
//                       name="address"
//                       className="mt-3"
//                       type="text"
//                       placeholder="address"
//                       value={customurAddress}
//                       onChange={(e) => setCustomurAddress(e.target.value)}
//                       required={true}
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Label className="fw-bold">Vendor Details</Form.Label>
//                     <Form.Control
//                       name="name"
//                       className="mt-3"
//                       type="text"
//                       value={"Sathish xerox"}
//                       disabled={true}
//                     />
//                     <Form.Control
//                       name="email"
//                       className="mt-3"
//                       type="text"
//                       value={"sathish@gmail.com"}
//                       disabled={true}
//                     />
//                     <Form.Control
//                       name="address"
//                       className="mt-3"
//                       type="text"
//                       value={"Tamilnadu"}
//                       disabled={true}
//                     />
//                   </Col>
//                 </Row>
//                 <InvoiceItem
//                   // className="mt-3"
//                   items={items}
//                   setItems={setItems}
//                   currency={currency}
//                   handleAddItem={handleAddItem}
//                   handleDeleteItem={handleDeleteItem}
//                   handleEditItem={handleEditItem}
//                 />

//                 <Row className="mt-4 justify-content-end">
//                   <Col lg={6}>
//                     <div className="d-flex flex-row align-items-start justify-content-between">
//                       <span className="fw-bold">Subtotal:</span>
//                       <span>
//                         {currency}
//                         {sub}
//                       </span>
//                     </div>
//                     <div className="d-flex flex-row align-items-start justify-content-between mt-2">
//                       <span className="fw-bold">Discount:</span>
//                       <span>
//                         <span className="small ">({discount || 0}%)</span>
//                         {currency}
//                         {discountRate || 0}
//                       </span>
//                     </div>
//                     <div className="d-flex flex-row align-items-start justify-content-between mt-2">
//                       <span className="fw-bold">Tax:</span>
//                       <span>
//                         <span className="small ">({tax || 0}%)</span>
//                         {currency}
//                         {taxRate || 0}
//                       </span>
//                     </div>
//                     <hr />
//                     <div
//                       className="d-flex flex-row align-items-start justify-content-between"
//                       style={{
//                         fontSize: "1.125rem",
//                       }}
//                     >
//                       <span className="fw-bold">Total:</span>
//                       <span className="fw-bold">
//                         {currency}
//                         {total || 0}
//                       </span>
//                     </div>
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>

//             <Col md={4} lg={3}>
//               <div className="sticky-top pt-md-3 pt-xl-4">
//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className="d-block w-100"
//                   onClick={() => setIsOpen(true)}
//                 >
//                   Review Invoice
//                 </Button>
//                 <Form.Group className="mb-5 mt-3">
//                   <Form.Label className="fw-bold">Currency:</Form.Label>
//                   <Form.Select
//                     // onChange={(event) =>
//                     //   this.onCurrencyChange({ currency: event.target.value })
//                     // }
//                     className="btn btn-light my-1"
//                     name="currency"
//                     aria-label="Change Currency"
//                   >
//                     <option value="$">USD (United States Dollar)</option>
//                     <option value="£">GBP (British Pound Sterling)</option>
//                     <option value="¥">JPY (Japanese Yen)</option>
//                     <option value="$">CAD (Canadian Dollar)</option>
//                     <option value="$">AUD (Australian Dollar)</option>
//                     <option value="$">SGD (Signapore Dollar)</option>
//                     <option value="¥">CNY (Chinese Renminbi)</option>
//                     <option value="₿">BTC (Bitcoin)</option>
//                   </Form.Select>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                   <Form.Label className="fw-bold">Tax rate:</Form.Label>
//                   <InputGroup className="my-1 flex-nowrap">
//                     <Form.Control
//                       name="taxRate"
//                       type="number"
//                       value={tax}
//                       onChange={(event:any) => setTax(event.target.value)}
//                       className="bg-white border"
//                       placeholder="0.0"
//                       min="0.00"
//                       step="0.01"
//                       max="100.00"
//                     />
//                     <InputGroup.Text className="bg-light fw-bold text-secondary small">
//                       %
//                     </InputGroup.Text>
//                   </InputGroup>
//                 </Form.Group>
//                 <Form.Group className="my-3">
//                   <Form.Label className="fw-bold">Discount rate:</Form.Label>
//                   <InputGroup className="my-1 flex-nowrap">
//                     <Form.Control
//                       name="discountRate"
//                       type="number"
//                       value={discount}
//                       onChange={(event:any) => setDiscount(event.target.value)}
//                       className="bg-white border"
//                       placeholder="0.0"
//                       min="0.00"
//                       step="0.01"
//                       max="100.00"
//                     />
//                     <InputGroup.Text className="bg-light fw-bold text-secondary small">
//                       %
//                     </InputGroup.Text>
//                   </InputGroup>
//                 </Form.Group>
//               </div>
//             </Col>

//             <InvoiceModel
//               isOpen={isOpen}
//               billFrom={"Sathish"}
//               invoiceNumber={invoiceNumber}
//               currency={currency}
//               total={total}
//               items={items}
//               customurName={customurName}
//               customurEmail={customurEmail}
//               customurAddress={customurAddress}
//               subTotal={subTotal}
//               taxRate={taxRate}
//               discountRate={discountRate}
//               setIsOpen={setIsOpen}
//             />
//           </Row>
//         </Form>
//       </div>
    
//   );
// };

// export default InvoiceForm;


"use client"
import { Metadata } from 'next';
import Image from 'next/image';

import { Sidebar } from '@/components/ui/sidebar';
import { playlists } from '@/data/playlists';
import { Button } from '@/components/ui/button';
import UserNav from '@/components/ui/usernav';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
// import { Filters } from './components/Filters';
// import { DiscoverCard } from './components/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import './style.css'
import EmbeddedPage from './ItemRow'

// export const metadata: Metadata = {
//   title: 'Discover',
//   description: 'Example music app using the components.',
// };

export default function Discover() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: 'AIzaSyCejrgwc8YOfUgiyIav3acGZHifa1MY9wE',
            q: 'e sevai',
            part: 'snippet',
            type: 'video',
            maxResults: 10, // Adjust the number of results as needed
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    fetchVideos();
  }, []);

  // AIzaSyCejrgwc8YOfUgiyIav3acGZHifa1MY9wE
  return (
    <>
      <div className=" md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} />
              <div className="col-span-3 lg:col-span-4 lg:border-l overflow-auto   ">
                <div className="h-lvh z-20">
                  <div className="   z-30 ">
                    <div className="flex justify-between items-center border-b bg-stone-50">
                      <div className="topHeadings p-5">
                        <h3 className="text-lg">Discover</h3>
                      </div>
                      <div className="righ-nav flex items-center px-5">
                        <Button variant="ghost">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
                          </svg>
                        </Button>
                        <Button variant="ghost">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                          </svg>
                        </Button>
                        <UserNav />
                      </div>
                    </div>
                    {/* <div className="coverImage bg-slate-100 h-36 relative">
                      <h4 className="absolute bottom-0 px-5 py-5">
                        Welcome, Nikki 👋
                      </h4>
                    </div> */}
                    {/* <Filters /> */}
                  </div>
                  <EmbeddedPage />
                  {/* {videos.map((video: any) => (
                    <div key={video.id.videoId} className="video-item">
                      <h2>{video.snippet.title}</h2>
                      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                      <p>{video.snippet.description}</p>
                      <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

