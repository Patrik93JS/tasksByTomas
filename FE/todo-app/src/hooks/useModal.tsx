import { useState } from "react";

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);

  const close = () => setOpen(false);

  const toggle = () => setOpen((prevOpen) => !prevOpen);

  return { isOpen, open, close, toggle };
};
