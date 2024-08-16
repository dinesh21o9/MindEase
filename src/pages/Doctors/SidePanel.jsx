// /* eslint-disable react/prop-types */

// import convertTime from "../../utils/convertTime";
// import { BASE_URL, token } from "./../../config";

// const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
//   // const bookingHandler = async () => {
//   //   try {
//   //     const res = await fetch(
//   //       `${BASE_URL}/bookings/checkout-session/${doctorId}`,
//   //       {
//   //         method: "post",
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );

//   //     const data = await res.json();

//   //     if (data.session.url) {
//   //       window.location.href = data.session.url;
//   //     }
//   //   } catch (error) {
//   //     console.log(error.message);
//   //   }
//   // };

//   return (
//     <div className="shadow-panelShadow p-3 lg:p-5 rounded-md ">
//       <div className="flex items-center justify-between">
//         <p className="text__para mt-0 font-semibold">Booking price</p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           INR &#x20b9;  {ticketPrice}
//         </span>
//       </div>

//       <div className="mt-[30px]">
//         <p className="text-para mt-0 font-semibold text-headingColor">
//           Available Time:
//         </p>

//         <ul className="mt-3">
//           {timeSlots?.map((item, index) => (
//             <li key={index} className="flex items-center justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
//               </p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {/* {convertTime(item.startingTime)} -{convertTime(item.endingTime)} */}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button 
//       // onClick={bookingHandler} 
//       className="btn px-2 w-full rounded-md">
//         Book Appointment
//       </button>
//     </div>
//   );
// };

// export default SidePanel;




//------------ aboce is the starting code for booking apoinment side panel ---------



// -------- below is the working appioinment thing ,

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [appointment, setAppointment] = useState(null);

//   const bookingHandler = () => {
//     setShowModal(true);
//   };

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const confirmBooking = () => {
//     setAppointment(selectedDate);
//     setShowModal(false);
//     // You can also add your logic to save the appointment details here.
//   };

//   return (
//     <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
//       <div className="flex items-center justify-between">
//         <p className="text__para mt-0 font-semibold">Booking price</p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           INR &#x20b9; {ticketPrice}
//         </span>
//       </div>

//       {appointment && (
//         <div className="mt-[20px] p-3 bg-green-100 rounded-md">
//           <p className="text-[15px] leading-6 text-textColor font-semibold">
//             Appointment booked for: {appointment.toLocaleString()}
//           </p>
//           <button className="btn px-2 w-full rounded-md mt-2">
//             Navigate to Next Step
//           </button>
//         </div>
//       )}

//       <div className="mt-[30px]">
//         <p className="text-para mt-0 font-semibold text-headingColor">
//           Available Time:
//         </p>

//         <ul className="mt-3">
//           {timeSlots?.map((item, index) => (
//             <li key={index} className="flex items-center justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
//               </p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {/* {convertTime(item.startingTime)} - {convertTime(item.endingTime)} */}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
//         Book Appointment
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] md:w-[50%]">
//             <h3 className="text-xl font-semibold mb-4">Select Date and Time</h3>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateSelect}
//               showTimeSelect
//               dateFormat="Pp"
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="btn px-4 py-2 mr-2"
//               >
//                 Cancel
//               </button>
//               <button onClick={confirmBooking} className="btn px-4 py-2">
//                 Confirm Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidePanel;




// -----------------------
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointment, setAppointment] = useState(null);

  const bookingHandler = () => {
    setShowModal(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const confirmBooking = () => {
    setAppointment(selectedDate);
    setShowModal(false);
  };

  const deleteAppointment = () => {
    setAppointment(null);
    setSelectedDate(null);
  };

  return (
    <div className="shadow-lg p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between border-b pb-3 mb-4">
        <p className="text-lg font-semibold text-gray-700">Booking Price</p>
        <span className="text-xl font-bold text-gray-900">
          INR &#x20b9; {ticketPrice}
        </span>
      </div>

      {appointment ? (
        <div className="relative bg-green-100 p-4 rounded-lg mb-4">
          <p className="text-sm font-medium text-gray-800">
            Appointment booked for:{" "}
            <span className="font-semibold">{appointment.toLocaleString()}</span>
          </p>
          <button
            onClick={deleteAppointment}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            aria-label="Delete appointment"
          >
            ❌
          </button>
          <Link
          to="/video_chat">
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Navigate to Next Step
          </button>
          </Link>
        </div>
      ) : (
        <button
          onClick={bookingHandler}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Book Appointment
        </button>
      )}

      <div className="mt-5">
        <p className="text-md font-semibold text-gray-700 mb-2">Available Time:</p>
        <ul className="space-y-2">
          {timeSlots?.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
            >
              <p className="text-sm font-medium text-gray-700">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-sm font-medium text-gray-700">
                {/* {convertTime(item.startingTime)} - {convertTime(item.endingTime)} */}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Select Date and Time
            </h3>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              showTimeSelect
              dateFormat="Pp"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
