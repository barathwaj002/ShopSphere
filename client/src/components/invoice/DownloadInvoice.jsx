import { useState } from "react";
import { Download } from "lucide-react";
import toast from "react-hot-toast";
import generateInvoicePDF from "./generateInvoicePDF";

const DownloadInvoice = ({ order }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!order) {
      toast.error("Order information is unavailable.");
      return;
    }

    try {
      setLoading(true);

      await generateInvoicePDF(order);

      toast.success("Invoice downloaded successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to generate invoice.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-blue-600
        px-4
        py-2
        text-white
        font-medium
        transition-all
        duration-300
        hover:bg-blue-700
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      <Download size={18} />

      {loading ? "Generating..." : "Download Invoice"}
    </button>
  );
};

export default DownloadInvoice;