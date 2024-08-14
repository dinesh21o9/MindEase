import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import userFetchData from "../../hooks/userFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
const DoctorList = () => {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      avgRating: 4.8,
      totalRating: 250,
      photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxhealthcare.in%2Fdoctor%2Fdr-rajesh-kumar&psig=AOvVaw0yhmVHqWDtwnf-lE-_oT1R&ust=1723733171507000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCv8s7c9IcDFQAAAAAdAAAAABAE",
      specialization: "Psychiatry",
      totalPatients: 1800,
      hospital: "AIIMS, New Delhi",
      experiences: [
        "15 years in mental health diagnosis and treatment",
        "Specializes in anxiety disorders and depression",
        "Conducts workshops on mental wellness"
      ],
      website: "https://www.practo.com/lucknow/doctor/dr-rajesh-kumar-5-general-physician-1",
    },
    {
      name: "Dr. Shalini Mehta",
      avgRating: 4.7,
      totalRating: 300,
      photo: "url_to_photo_shalini_mehta",
      specialization: "Clinical Psychology",
      totalPatients: 1500,
      hospital: "NIMHANS, Bengaluru",
      experiences: [
        "12 years in cognitive behavioral therapy",
        "Expert in adolescent mental health",
        "Author of research papers on PTSD"
      ],
      website: "https://www.justdial.com/Panipat/Dr-Shalini-Mehta-Panipat-HO/9999PX180-X180-130108170942-W7V9_BZDET",
    },
    {
      name: "Dr. Anil Deshmukh",
      avgRating: 4.9,
      totalRating: 320,
      photo: "url_to_photo_anil_deshmukh",
      specialization: "Neuropsychiatry",
      totalPatients: 2100,
      hospital: "Tata Memorial Hospital, Mumbai",
      experiences: [
        "20 years in neuropsychiatry and mental health",
        "Specializes in schizophrenia and bipolar disorder",
        "Conducts clinical trials and research"
      ],
      website: "https://www.justdial.com/Sangamner/Dr-Anil-Deshmukh-deshmukh-Hospital-Nr-Dr-Sahyandri-High-School-Sangamner/9999PX241-X241-180212061304-E8U5_BZDET",
    }
  ];
  
  const loading = false;
  const error = null;
  
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
