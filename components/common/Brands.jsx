"use client";
import { useState } from "react";
import Image from "next/image";
import { brands } from "../../data/brands";

const Brands = ({ backgroundColorComponent, brandsTwo }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {

    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  return (
    <>
      <section
        className={` ${
          brandsTwo ? "layout-pt-md" : "layout-pt-lg"
        }  layout-pb-md  ${
          backgroundColorComponent ? backgroundColorComponent : ""
        } `}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="col text-center">
              <p className="text-lg text-dark-1">Trusted by the world’s best</p>
            </div>
          </div>
          <div
            className={`row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50`}
          >
            {brands.map((brand, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                key={index}
                className="col-lg-auto col-md-3 col-sm-4 col-6"
                onClick={() => handleImageClick(index)} // Handle image click event
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex justify-center items-center px-4">
                  <Image
                    className="w-1/1"
                    src={brand.image}
                    alt="clients image"
                    width={140}
                    height={90}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                {/* Display description if the current index matches the selected index */}
                {selectedImageIndex === index && <p>{brand.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
