import { useEffect, useRef, useState } from 'react';

export default function useDetectClickOut(initState) {
  const triggerRef = useRef(null); // optional
  const nodeRef = useRef(null); // required

  const [isOpen, setIsOpen] = useState(initState);

  const handleClickOutside = (event) => {
    // if click is on trigger element, toggle modal
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setIsOpen(!isOpen);
    }

    // if modal is open and click is outside modal, close it
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {
    triggerRef,
    nodeRef,
    isOpen,
    setIsOpen,
  };
}
