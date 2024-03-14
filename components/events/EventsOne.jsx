"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import RequestEngine from '@/core/RequestEngine';
import { Utilites } from '@/core/Utilites';

export default function EventsOne() {
  const [eventsData, setEventsData] = useState([]);
  const [currentType, setCurrentType] = useState('');

  useEffect(() => {
    prepareData();
  }, []);

  const prepareData = async () => {
    let engine = new RequestEngine();
    const response = await engine.getItem('user', '/news');
    if (response && response.status === 200) {
      // Initialize showFullText property for each event
      const eventDataWithShowFullText = response.data.data.map((event) => ({
        ...event,
        showFullText: false,
      }));
      setEventsData(eventDataWithShowFullText);

      // Set the default currentType to the first type in the events data
      if (response.data.data.length > 0) {
        setCurrentType(response.data.data[0].type);
      }
    }
  };

  // Get unique types
  const uniqueTypes = Array.from(new Set(eventsData.map((event) => event.type)));

  // Limit types to three
  const typesToShow = uniqueTypes.slice(0, 3);

  // Function to toggle read more text
  const toggleReadMore = (eventId) => {
    const updatedEventsData = eventsData.map((event) =>
      event.id === eventId ? { ...event, showFullText: !event.showFullText } : event
    );
    setEventsData(updatedEventsData);
  };

  return (
    <>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="tabs -pills js-tabs">
            <div className="tabs__controls d-flex flex-wrap y-gap-20 justify-start x-gap-10 js-tabs-controls">
              {/* Render buttons for each type */}
              {typesToShow.map((type, index) => (
                <div key={index} onClick={() => setCurrentType(type)}>
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                      currentType === type ? 'is-active' : ''
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
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
                    .map((event) => (
                      <div key={event.id} className="col-lg-4 col-md-6">
                        <div className="eventCard -type-1">
                          <div className="eventCard__img">
                            <Image width={420} height={360} style={{maxWidth:420,width:420,height:360}} src={event.fullpicture} alt={event.name} />
                          </div>
                          <div className="eventCard__bg bg-white">
                            <div className="eventCard__content y-gap-10">
                              <div className="eventCard__inner">
                                <h4 className="eventCard__title text-17 fw-500">
                                  {event.showFullText ? (
                                    <span>
                                      <span dangerouslySetInnerHTML={{ __html: event.text }} />
                                      <button className="read-more button -icon -outline-purple-1 -rounded text-purple-1 mt-20 mb-20" onClick={() => toggleReadMore(event.id)}>
                                        Show Less
                                      </button>
                                    </span>
                                  ) : (
                                    <span>
                                      {Utilites.getWords(Utilites.renderDescription(event.text), 20) + '...'}
                                      <button className="read-more button -icon -outline-purple-1 -rounded text-purple-1 mt-20 mb-20" onClick={() => toggleReadMore(event.id)}>
                                        Read More
                                      </button>
                                    </span>
                                  )}
                                </h4>
                                <div className="d-flex x-gap-15 pt-10">
                                  <br />
                                  <div className="d-flex items-center">
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
