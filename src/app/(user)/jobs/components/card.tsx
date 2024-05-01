// 'use client';
// import React, { useEffect, useState } from 'react';

// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';

// import { getAllJobs } from '@/app/api/auth/api-helper/index';
// export function JobsCard() {
//   const [jobs, setJobs] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getAllJobs();
//         setJobs(response);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="lg:grid px-5 py-1 discoverUsers">
//         <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
//           <Card className="rounded-2xl p-5 my-2">
//             <div className="flex items-center">
//               <Avatar className="w-16 h-16 rounded-lg">
//                 <AvatarImage
//                   src="https://github.com/shadcn.png"
//                   alt="@shadcn"
//                 />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//               <div className="mx-3">
//                 <h4 className="font-normal text-xl">Retool Dashboard</h4>
//                 <span className="font-light text-sm"> Google</span>
//               </div>
//             </div>
//             <div className="flex my-5 gap-1 items-center">
//               <span className="text-xs">$25 - $75/hour</span>
//               <Separator orientation="vertical" className="mx-1 h-5" />
//               <span className="text-xs">40hrs/week</span>
//               <Separator orientation="vertical" className="mx-1 h-5" />
//               <span className="text-xs">One-Time</span>
//             </div>
//         </div>
//         <div className="project-description my-3">
//           <span className="text-sm font-light">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industrys
//           </span>
//         </Card>
//         <Card className="rounded-2xl p-5 my-2">
//           <div className="flex items-center">
//             <Avatar className="w-16 h-16 rounded-lg">
//               <AvatarImage
//                 src="https://github.com/shadcn.png"
//                 alt="@shadcn"
//               />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <div className="mx-3">
//               <h4 className="font-normal text-xl">Retool Dashboard</h4>
//               <span className="font-light text-sm"> Google</span>
//             </div>
//           </div>
//           <div className="flex my-5 gap-1 items-center">
//             <span className="text-xs">$25 - $75/hour</span>
//             <Separator orientation="vertical" className="mx-1 h-5" />
//             <span className="text-xs">40hrs/week</span>
//             <Separator orientation="vertical" className="mx-1 h-5" />
//             <span className="text-xs">One-Time</span>
//           </div>
//       </div>
//       <div className="project-description my-3">
//         <span className="text-sm font-light">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys
//         </span>
//       </Card>
//       <Card className="rounded-2xl p-5 my-2">
//         <div className="flex items-center">
//           <Avatar className="w-16 h-16 rounded-lg">
//             <AvatarImage
//               src="https://github.com/shadcn.png"
//               alt="@shadcn"
//             />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//           <div className="mx-3">
//             <h4 className="font-normal text-xl">Retool Dashboard</h4>
//             <span className="font-light text-sm"> Google</span>
//           </div>
//         </div>
//         <div className="flex my-5 gap-1 items-center">
//           <span className="text-xs">$25 - $75/hour</span>
//           <Separator orientation="vertical" className="mx-1 h-5" />
//           <span className="text-xs">40hrs/week</span>
//           <Separator orientation="vertical" className="mx-1 h-5" />
//           <span className="text-xs">One-Time</span>
//         </div>
//       </div>
//       <div className="project-description my-3">
//         <span className="text-sm font-light">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industrys
//         </span>
//       </Card>
//     </div >
//       </div >
//     <div></div>
//     </>
//   );
// }
'use client';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { getAllJobs } from '@/app/api/auth/api-helper/index';
import { useGetUserQuery } from '@/redux/api/usersApi';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import './table.css'
import axios from 'axios';

export function JobsCard() {
  const [jobs, setJobs] = useState({});
  const [gridData,setGridData] = useState([])

  let user_token = Cookies.get('access_token');
  console.log('user_token', typeof user_token);
  const { data: Userdata } = useGetUserQuery(user_token ? user_token : '');
  console.log('Userdata', Userdata);

  useEffect(() => {
    getGridData()
  },[])

  const getGridData = async() => {
    const response = await axios.get('https://crafy-server.onrender.com/works')
    const data = response.data

    setGridData(data)
  }


  const bindGridData = () => {
    return gridData.map((item:any, index) =>
        <tr key={index} style={{backgroundColor:`${index % 2 === 0 ? 'white' :""}`}}>
          <td>{index + 1}</td>
          <td className='text-align-center'>{item.url}</td>
          <td className='text-align-right'>{item.image}</td>
          <td className='text-align-right'>{item.dateandTime}</td>
          <td className='text-align-right'><button className='edit-button'><a href={item.image} download>Download</a></button></td>
          <td className='text-align-right'><button className='delete-button'>Delete</button></td>
          </tr>
          )}

  return (
    <>
      {/* <div className="lg:grid px-5 py-1 discoverUsers"> */}
        {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3"> */}
          {/* <Card className="rounded-2xl p-5 my-2">
            <div className="flex items-center">
              <Avatar className="w-16 h-16 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mx-3">
                <h4 className="font-normal text-xl">Retool Dashboard</h4>
                <span className="font-light text-sm"> Google</span>
              </div>
            </div>
            <div className="flex my-5 gap-1 items-center">
              <span className="text-xs">$25 - $75/hour</span>
              <Separator orientation="vertical" className="mx-1 h-5" />
              <span className="text-xs">40hrs/week</span>
              <Separator orientation="vertical" className="mx-1 h-5" />
              <span className="text-xs">One-Time</span>
            </div>
          </Card> */}

          {/* Repeat the above Card and description block for additional cards */}
          {/* <Card className="rounded-2xl p-5 my-2">
            <div className="flex items-center">
              <Avatar className="w-16 h-16 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mx-3">
                <h4 className="font-normal text-xl">Retool Dashboard</h4>
                <span className="font-light text-sm"> Google</span>
              </div>
            </div>
            <div className="flex my-5 gap-1 items-center">
              <span className="text-xs">$25 - $75/hour</span>
              <Separator orientation="vertical" className="mx-1 h-5" />
              <span className="text-xs">40hrs/week</span>
              <Separator orientation="vertical" className="mx-1 h-5" />
              <span className="text-xs">One-Time</span>
            </div>
          </Card> */}
          <div className='parent-container'>
            {/* <div className='table-container'> */}
              <table style={{width:"100%"}} className='table-container'>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>File name</th>
                    <th>Url</th>
                    <th>Date and time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td>1</td>
                    <td className='text-align-center'>File name</td>
                    <td className='text-align-right'>Url</td>
                    <td className='text-align-right'><button className='edit-button'>Download</button></td>
                  </tr> */}
                  {gridData && bindGridData()}
                </tbody>
              </table>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
