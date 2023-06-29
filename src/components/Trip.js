import "./Tripstyle.css";
import Tripdata from "./Tripdata";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import trip1 from "../assets/Tahra1.jpg";
import trip2 from "../assets/baytna5.jpg";
import trip3 from "../assets/torath5.jpg";
import trip4 from "../assets/baghdida1.jpg";
import trip5 from "../assets/mar1.jpg";
import trip6 from "../assets/aslaf1.jpg";
import trip7 from "../assets/agh1.jpg";
import trip8 from "../assets/Redha1.jpg";
import trip9 from "../assets/lalash1.jpg";
import trip10 from "../assets/shikh1.jpg";
import { Link } from "react-router-dom";
function Trip(props) {
  return (
    <div className="trip">
      <h1>{props.title1}</h1>
      <p>{props.text1}</p>
      <Carousel>
        <div className="trip-card">
          <Link className="custom-link" to="./Tahira">
            <Tripdata
              image={trip1}
              heading="visit Al-Tahira Church"
              text=" The Great Immaculate Church, also known as Al-Kubra, 
          is the largest church in Iraq and the Middle East.  it stands as a remarkable 
            the Syriac Church."
            />
          </Link>
          <Link className="custom-link" to="./Baytna">
            <Tripdata
              image={trip2}
              heading="Baytna Foundation"
              text=" for Culture, Arts, and Heritagethe mission to revitalize the city's rich heritage  which was erased by years of war and terrorism."
            />
          </Link>
          <Link to="/BaghdidaMuseum" className="custom-link">
            <Tripdata
              image={trip4}
              heading="The  Baghdida Museum of Syriac Heritage "
              text=" is the first museum in the Hamdaniya district of Bakhdida. the museum has been dedicated to preserving and showcasing the rich Syriac heritage of the region."
            />
          </Link>
        </div>
        <div className="trip-card">
          <Link className="custom-link" to="./Torath">
            <Tripdata
              image={trip3}
              heading="The Mosul Heritage House"
              text=" created by the late Dr. Osama Al-Arhim their mission is to preserve and celebrate the rich heritage of Mosul."
            />
          </Link>
          <Link className="custom-link" to="./Mart">
            <Tripdata
              image={trip5}
              heading=" Mart Shmoni Church"
              text="For the Syriac Orthodox ,It dates back to the 7th century A.D. It is one of the oldest churches in Al-Hamdaniya district in Baghdida"
            />
          </Link>
          <Link className="custom-link" to="./Aslaf">
            <Tripdata
              image={trip6}
              heading="Aslaf Museum "
              text="The museum was established by Mrs. Ghada Fasih Antanius for her passion and love for heritage and antiquities since childhood, and it is not inherited from the family inheritance."
            />
          </Link>
        </div>
        <div className="trip-card">
          <Link className="custom-link" to="./BagdidaHeritage">
            <Tripdata
              image={trip7}
              heading="Baghdida Heritage Museum "
              text=" Sponsored by the Syriac Catholic Church ,The museum was established in 2020 by the Cap Ni Organization."
            />
          </Link>
          <Link className="custom-link" to="./ImamRedha">
            <Tripdata
              image={trip8}
              heading="Shrine of Imam Redha  "
              text="Ali bin Al-Hussein bin Zain Al-Abidin ,He is the eighth of the twelve imams. He was called Gharib al-Ghuraba because he was buried in Persia, far from the land of his Arab fathers."
            />
          </Link>
          <Link className="custom-link" to="./SheikhBakr">
            <Tripdata
              image={trip9}
              heading="Shrine of Sheikh Bakr"
              text=" He  belongs to one of the three layers of the Yazidi religion. The shrine is located in the Temple of the Holy Elsh"
            />
          </Link>
        </div>

        <div className="trip-card">
          <Link className="custom-link" to="./SheikhHasan">
            <Tripdata
              image={trip10}
              heading="Shrine of Sheikh Hassan"
              text=" It is located on an archaeological hill in the middle of Bahzani. It is an archaeological and historical hill for the Yazidi religion and the people of the city."
            />
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
export default Trip;
