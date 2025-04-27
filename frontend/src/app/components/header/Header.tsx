"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      // 下にスクロールした場合
      setIsHidden(true);
    } else {
      // 上にスクロールした場合
      setIsHidden(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
      <h1>四季神</h1>
    </header>
  );
};

export default Header;
