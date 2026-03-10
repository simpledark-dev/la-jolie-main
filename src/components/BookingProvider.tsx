"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import BookingModal from "./BookingModal";

const BookingContext = createContext<() => void>(() => {});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <BookingContext.Provider value={openModal}>
      {children}
      <BookingModal open={open} onClose={closeModal} />
    </BookingContext.Provider>
  );
}
