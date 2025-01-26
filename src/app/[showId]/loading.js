import React from "react";

export default function Loading() {
  return <div className="loader"></div>;
}

// "use client";
// import React, { useEffect, useState } from "react";
// import "boxicons/css/boxicons.min.css";
// export default function page({ params }) {
//   const [show, setShow] = useState([]);
//   const { showId } = React.use(params);
//   useEffect(() => {
//     const getData = async () => {
//       const req = await fetch(`https://api.tvmaze.com/shows/${showId}`);
//       const result = await req.json();
//       setShow(result);
//     };
//     getData();
//   }, []);

//   return (
//     <>
//       <h1 style={{ textAlign: "center", color: "gold", margin: "30px" }}>
//         {" "}
//         Here Is Your Show 😁
//       </h1>
//       {/* <Link href={"/"}> */}
//       <i
//         className="bx bx-arrow-back goBack"
//         onClick={() => {
//           history.back();
//         }}
//       ></i>
//       {/* </Link> */}
//       <div className="detailed-card">
//         <div className="left-side">
//           <img src={show?.image?.original} alt={show?.name} />
//         </div>
//         <div className="right-side">
//           <h1>
//             <i className="bx bx-movie-play"></i>
//             {show?.name}
//           </h1>
//           <h3>
//             <i className="bx bx-detail"></i>
//             {show?.genres?.join(" | ")}
//           </h3>
//           <h3>
//             <i className="bx bx-user-voice"></i>
//             {show?.language}
//           </h3>
//           <h3>
//             <i className="bx bxs-star"></i> {show?.rating?.average}
//           </h3>
//           <h3>
//             <i className="bx bx-calendar-plus"></i>First Show :{show?.premiered}
//           </h3>
//           <h3>
//             {show.ended && <i className="bx bx-calendar-x"></i>}
//             {show.ended && <span>Last Show :{show?.ended}</span>}
//           </h3>
//           <p>
//             <i className="bx bx-slideshow"></i>
//             {show?.summary}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
