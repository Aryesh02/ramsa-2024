import "./css/style.css";
import Map from "./Map";
export default function Contact() {
    return (
        <>
            <div className="my-4">
                <h3 className="text-center">Contact Us</h3>
                <div className="d-flex flex-lg-column justify-content-center p-4 flex-wrap">
                    {/* Contact Info here */}
                    <div className="d-flex flex-column">
                        <div className="red-head">
                            Jaypee Institute of Information Technology
                        </div>
                        <div>
                            {" "}
                            <b>
                                A-10, Sector - 62, Noida, Uttar Pradesh, India -
                                201309
                            </b>
                        </div>
                        <hr />
                        <div className="red-head">
                            Address your communications to
                        </div>
                        <div>
                            Prof. Alka Tripathi <br />
                            (Conference Chair) <br />
                            Head, Department of Mathematics <br />
                            Email:{" "}
                            <a
                                href="mailto:alka.tripathi@mail.jiit.ac.in"
                                className="text-decoration-none"
                            >
                                {" "}
                                <b>alka.tripathi@mail.jiit.ac.in</b>
                            </a>
                            <br />
                            Mobile no: +9197111 55009 <br /> <br />
                            Dr. Pankaj K. Srivastava <br />
                            (Convener) <br />
                            Department of Mathematics <br />
                            Dr. Dinesh C.S. Bisht <br />
                            (Convener) <br />
                            Department of Mathematics <br />
                            Email :{" "}
                            <a
                                href="mailto:ramsa.conference2024@gmail.com"
                                className="text-decoration-none"
                            >
                                <span>
                                    <b> ramsa.conference2024@gmail.com</b>
                                </span>
                            </a>
                            <br />
                            WhatsApp Contact:
                            <b>
                                <a
                                    href="https://wa.me/+919650516758"
                                    className="text-decoration-none"
                                >
                                    +919650516758
                                </a>
                            </b> &{" "}
                            <b>
                                <a
                                    href="https://wa.me/+919599862586"
                                    className="text-decoration-none"
                                >
                                    {" "}
                                    +919599862586
                                </a>
                            </b>
                        </div>

                        <div className="red-head">How to reach</div>
                        <div>
                            <b>Metro</b>
                        </div>
                        <div className="overflow-auto">
                            The nearest metro station is NOIDA ELECTRONIC CITY.
                            The institute is situated at a walking distance from
                            the metro station.
                        </div>
                        <div>
                            <b>Railway</b>
                        </div>
                        <div>
                            Noida is well connected to the New Delhi, Old Delhi
                            and Ghaziabad railway stations by bus. Cabs can be
                            hired just outside the railway stations.
                        </div>
                        <div>
                            <b>Airport</b>
                        </div>
                        <div>
                            Cabs can be hired just outside the airport terminal
                            for JIIT Sector‐62, Noida.
                        </div>
                    </div>
                    {/* Map here */}
                    <Map />
                </div>
                <div className="mx-4">
                    <h4 className="red-head">
                        Website Designed & Developed by:
                    </h4>
                    <ol>
                        <li>
                            Tanmay Vig :
                            <a
                                href="mailto:cooltanmayvig@gmail.com"
                                className="text-decoration-none"
                            >
                                <span className="text-info">
                                    <b> cooltanmayvig@gmail.com </b>
                                </span>
                            </a>{" "}
                        </li>
                        <li>
                            Aryesh Srivastava :
                            <a
                                href="mailto:aryeshsrivastava@gmail.com"
                                className="text-decoration-none"
                            >
                                <span className="text-info">
                                    <b> aryeshsrivastava@gmail.com </b>
                                </span>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
}
