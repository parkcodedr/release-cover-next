"use client";
import { PreviewProvider } from "@/context/PreviewContext";
import React from "react";

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  return <PreviewProvider>{children}</PreviewProvider>;
};

export default FormProvider;
