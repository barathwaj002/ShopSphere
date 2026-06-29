import React from "react";
import { pdf } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";

const sanitizeFileName = (name = "") => {
  return name
    .replace(/[^a-zA-Z0-9-_ ]/g, "")
    .trim()
    .replace(/\s+/g, "_");
};

const getInvoiceFileName = (order) => {
  const customerName = sanitizeFileName(order?.user?.name || "Customer");
  const invoiceId = order?._id?.slice(-8)?.toUpperCase() || "INVOICE";
  return `ShopSphere_Invoice_${customerName}_${invoiceId}.pdf`;
};

export const generateInvoicePDF = async (order) => {
  try {
    if (!order) {
      throw new Error("Order data is missing.");
    }

    const blob = await pdf(
      <InvoiceDocument order={order} />
    ).toBlob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = getInvoiceFileName(order);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Invoice Generation Failed:", error);
    throw error;
  }
};

export default generateInvoicePDF;