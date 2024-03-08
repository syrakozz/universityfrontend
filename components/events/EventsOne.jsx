"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { events, categories } from "@/data/events";
import Link from "next/link";
import RequestEngine from "@/core/RequestEngine";
import { Utilites } from "@/core/Utilites";


export default function EventsOne() {
  const [eventsData, setEventsData] = useState([]);
  const [currentType, setCurrentType] = useState(""); // Default type to filter

  useEffect(() => {
    prepareData();
  }, []);

  const prepareData = async () => {
    let engine = new RequestEngine();
    const response = await engine.getItem("user", "/news");
    if (response && response.status === 200) {
      setEventsData(response.data.data);
      // Set the default currentType to the first type in the events data
      if (response.data.data.length > 0) {
        setCurrentType(response.data.data[0].type);
      }
    }
  };

  // Get unique types
  const uniqueTypes = Array.from(new Set(eventsData.map(event => event.type)));

  // Limit types to three
  const typesToShow = uniqueTypes.slice(0, 3);

  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">News</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="tabs -pills js-tabs">
            <div className="tabs__controls d-flex flex-wrap y-gap-20 justify-center x-gap-10 js-tabs-controls">
              {/* Render buttons for each type */}
              {typesToShow.map((type, index) => (
                <div key={index} onClick={() => setCurrentType(type)}>
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                      currentType === type ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30 pt-30">
                  {/* Render events based on the filtered data */}
                  {eventsData
                    .filter((event) => event.type === currentType)
                    .map((event, i) => (
                      <div key={i} className="col-lg-4 col-md-6">
                        <div className="eventCard -type-1">
                          <div className="eventCard__img">
                            <Image
                              width={510}
                              height={360}
                              src={event.fullpicture}
                              alt="image"
                            />
                          </div>
                          <div className="eventCard__bg bg-white">
                            <div className="eventCard__content y-gap-10">
                              <div className="eventCard__inner">
                                <h4 className="eventCard__title text-17 fw-500">
                                  <Link
                                    className="linkCustom"
                                    href={`/events/${event.id}`}
                                  >
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: Utilites.getWords(Utilites.renderDescription(event.text),20)+"...",
                                      }}
                                    ></div>
                                  </Link>
                                </h4>
                                <div className="d-flex x-gap-15 pt-10">
                                  <div className="d-flex items-center">
                                    <div className="icon-calendar-2 text-16 mr-8"></div>
                                    <div className="text-14">
                                      {Utilites.renderDate(event.createdAt)}
                                    </div>
                                  </div>
                                  <br/>
                                  <div className="d-flex items-center">
                                    <div className="icon-location text-16 mr-8"></div>
                                    <div className="text-14">{event.name}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
