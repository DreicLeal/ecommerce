"use client";

import { useProductContext } from "@/contexts/productContext";

export default function Toast() {
  const { toastMessage } = useProductContext();
  return (
    <div className="w-[300px] p-4 bg-[var(--primary)] rounded-md font-semibold">
      {toastMessage}
    </div>
  );
}
