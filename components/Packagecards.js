import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Package.module.css";
import Link from "next/link";

export default function Packagecards({ title, items, itineraries, img, description, duration, price, link }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleNavigation = (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading overlay
        router.push(link); // Navigate to the link
    };

    // Prepare itinerary text
    const itineraryText = `${itineraries.slice(0, 5).join(", ")} and much more`;

    return (
        <div className={styles.cardcontainer} onClick={handleNavigation}>
            {/* Loading Overlay */}
            {isLoading && (
                <div className={styles.loadingOverlay}>
                    <p>Loading your package...</p>
                </div>
            )}

            {/* Image Section */}
            <div
                style={{
                    height: "40%",
                    width: "100%",
                    backgroundColor: "grey",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    src={img}
                    alt="Package"
                    width={350}
                    height={200}
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                />
            </div>

            {/* Heading Section */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "8px",
                    paddingLeft: "8px",
                    marginTop: "23px",
                    width: "100%",
                }}
            >
                <div>
                    <h5>{title}</h5>
                    <p
                        className="text-muted"
                        style={{ marginTop: "-10px", fontSize: "10px", padding: "0", marginBottom: "0" }}
                    >
                        {description}
                    </p>
                </div>

                <div
                    style={{
                        border: "1px solid #3cc2bd",
                        borderRadius: "3px",
                        color: "#3cc2bd",
                        fontSize: "13px",
                        paddingLeft: "3px",
                        paddingRight: "3px",
                        height: "max-content",
                    }}
                >
                    {duration}
                </div>
            </div>
            <hr style={{ width: "90%", marginTop: "5px" }} />

            {/* List Items Section */}
            <div className={styles.listcontainer}>
                {items.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>

            {/* Itineraries Section */}
            <div
                style={{
                    marginTop: "10px",
                    padding: "0 15px",
                    fontSize: "14px",
                    color: "#555",
                    flex: 1,
                }}
            >
                <strong>Itineraries include:</strong> {itineraryText}
            </div>

            {/* Cost Section */}
            <div className="w-100 d-flex justify-content-center align-items-center mb-5 mt-2 flex-column">
                <div
                    style={{
                        background: "#F4F3F3",
                        width: "90%",
                        height: "max-content",
                        padding: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid #E0DFDF",
                        borderRadius: "5px",
                    }}
                >
                    <p style={{ margin: "0", padding: "0", fontSize: "10px" }}>
                        Specially Curated<br />
                        For You
                    </p>
                    <h6 className="font-weight-bold">
                        <span className="text-muted" style={{ fontSize: "10px" }}>
                            starting from*
                        </span>
                        <br />
                        ₹{price}
                        <span className="text-muted">/Person</span>
                    </h6>
                </div>
                <p style={{ margin: "0", padding: "0", fontSize: "10px" }}>
                    🏷️ Exclusive <span style={{ color: "green" }}>Offers and Discounts</span> at checkout
                </p>
            </div>
        </div>
    );
}
