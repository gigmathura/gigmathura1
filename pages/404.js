import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Error() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          flexGrow: 1,
          height:"100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          alignItems: "center",
          backgroundColor: "#f8f9fa", // Optional: background color for better visuals
        }}
      >
        <h6>This Page is Under Construction</h6>
        <Link className="btn btn-primary" href="/">
        Go Back to Home
      </Link>
      </div>
      <Footer />
    </div>
  );
}
