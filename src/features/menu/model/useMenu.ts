import { useState } from 'react';

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleMenu };
}
