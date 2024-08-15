import Header from "../components/Header/Header";
import VideoCall from "../components/Video_call/VideoChat.jsx"
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
const layout = () => {
  return (
    <>
      <Header />
      <VideoCall />
      <main>
        <Routers />
      </main>

      <Footer />
    </>
  );
};

export default layout;
