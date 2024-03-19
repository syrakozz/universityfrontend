"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { brands } from "../../data/brands";

const Brands = ({ backgroundColorComponent, brandsTwo }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

   
    window.addEventListener("resize", handleResize);

    handleResize();

  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <h2 className="sectionTitle__title">Trusted by the world’s best</h2>
            </div>
          </div>
          <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
            {brands.map((brand, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                key={index}
                className={`col-lg-auto col-md-3 col-sm-4 col-6`}
                onClick={() => handleImageClick(index)}
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
              
                {(isMobile && selectedImageIndex === index) && (
                  <p className="text-center mt-2">{brand.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {!isMobile && selectedImageIndex !== null && (
        <div className="container">
          <div className="row justify-center">
            <div className="col text-center">
              <Image
                src={brands[selectedImageIndex].image}
                alt="Selected client image"
                width={280}
                height={180}
                style={{ objectFit: "contain" }}
              />
            
              <p className="text-center mt-2 hidden sm:block">{brands[selectedImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brands;




