/* eslint-disable react-refresh/only-export-components */
import { Event } from "./types";
import { useEffect } from "react";


const currentDate = new Date();


export const formatDate = (dateString: string): string => {
    const dateParts = dateString.split("-");
    const eventDate = new Date(
      `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
    );
  
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const day = eventDate.getDate();
    const month = months[eventDate.getMonth()];
    const year = eventDate.getFullYear();
  
    return `${day} de ${month}, ${year}`;
};



// Past Events
export const filterPastEvents = (events: Event[]) => {
    return events.filter((event) => {
      const eventDateParts = event.date.split("-");
      const eventDate = new Date(
        `${eventDateParts[2]}-${eventDateParts[1]}-${eventDateParts[0]}`
      );
      return eventDate < currentDate;
    });
  };


// Upcoming Events
  

export const filterUpcomingEvents = (events: Event[]) => {
  return events.filter((event) => {
    const eventDateParts = event.date.split("-");
    const eventDate = new Date(
      `${eventDateParts[2]}-${eventDateParts[1]}-${eventDateParts[0]}`
    );
    return eventDate > currentDate;
  });
};


export const ScrollToTop =() => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
}


export const isMobile = window.innerWidth < 768;
