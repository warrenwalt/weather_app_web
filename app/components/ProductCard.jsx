"use client";

import React, { useState } from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div>ProductCard </div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
