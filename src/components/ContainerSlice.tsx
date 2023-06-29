"use client";
import React from "react";
import { motion } from "framer-motion";


interface Props {
    children: React.ReactNode;
  }
  
  export  function ContainerSlice({ children }: Props) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeIn', duration: 0.5, delay: 0.3 }}
        animate={{ x: -200 }}
      >
        {children}
      </motion.div>
    );
  }

  export  function ContainerSliceRight({ children }: Props) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeIn', duration: 0.5, delay: 0.3 }}
        animate={{ x: 200 }}
      >
        {children}
      </motion.div>
    );
  }
  