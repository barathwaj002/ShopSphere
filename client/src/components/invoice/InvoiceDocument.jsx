import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

import CompanyLogo from "../../assets/invoice/Company_Logo.png";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 10,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    color: "#222222",
  },

  /* ===========================
          HEADER
  =========================== */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 15,
    marginBottom: 25,
  },

  companySection: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 55,
    height: 55,
    marginRight: 12,
  },

  companyInfo: {
    justifyContent: "center",
  },

  companyName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  companyTagline: {
    fontSize: 10,
    color: "#6b7280",
    marginTop: 2,
  },

  invoiceInfo: {
    alignItems: "flex-end",
  },

  invoiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 6,
  },

  invoiceNumber: {
    fontSize: 11,
    color: "#374151",
  },

  /* ===========================
        SECTION TITLE
  =========================== */

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },

  /* ===========================
      CUSTOMER + ORDER
  =========================== */

  detailsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  customerCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    padding: 12,
  },

  orderCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    padding: 12,
  },

  label: {
    fontSize: 9,
    color: "#6B7280",
    marginTop: 5,
  },

  value: {
    fontSize: 10,
    color: "#111827",
    marginTop: 2,
  },

  /* ===========================
      TABLE
  =========================== */

  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginTop: 10,
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    alignItems: "center",
    minHeight: 35,
  },

  headerCell: {
    fontSize: 9,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 6,
  },

  imageCol: {
    width: "14%",
    borderRightWidth: 1,
    borderColor: "#d1d5db",
    textAlign: "center",
  },

  productCol: {
    width: "34%",
    borderRightWidth: 1,
    borderColor: "#d1d5db",
  },

  categoryCol: {
    width: "16%",
    borderRightWidth: 1,
    borderColor: "#d1d5db",
    textAlign: "center",
  },

  qtyCol: {
    width: "10%",
    borderRightWidth: 1,
    borderColor: "#d1d5db",
    textAlign: "center",
  },

  priceCol: {
    width: "13%",
    borderRightWidth: 1,
    borderColor: "#d1d5db",
    textAlign: "center",
  },

  totalCol: {
    width: "13%",
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    minHeight: 65,
  },

  cell: {
    padding: 6,
    fontSize: 9,
  },

  productImage: {
    width: 42,
    height: 42,
    objectFit: "contain",
    alignSelf: "center",
  },

  productName: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
  },

  categoryText: {
    textAlign: "center",
  },

  qtyText: {
    textAlign: "center",
  },

  priceText: {
    textAlign: "center",
  },

  totalText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

const InvoiceDocument = ({ order }) => {
  const subtotal =
    order?.orderItems?.reduce(
      (acc, item) => 
         acc + (item.product?.price || 0) * item.quantity,
      0
    ) || 0;

  const shipping = order?.shippingPrice ?? 0;
  const tax = order?.taxPrice ?? 0;

  const grandTotal =
    order?.totalPrice ??
    subtotal + shipping + tax;

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ===========================
                HEADER
        =========================== */}

        <View style={styles.header}>

          <View style={styles.companySection}>
            <Image src={CompanyLogo} style={styles.logo} />

            <View style={styles.companyInfo}>
              <Text style={styles.companyName}>
                ShopSphere
              </Text>

              <Text style={styles.companyTagline}>
                Smart Shopping • Better Experience
              </Text>
            </View>
          </View>

          <View style={styles.invoiceInfo}>
            <Text style={styles.invoiceTitle}>
              INVOICE
            </Text>

            <Text style={styles.invoiceNumber}>
              Invoice :
              {" "}
              #{order?._id?.slice(-8).toUpperCase()}
            </Text>
          </View>

        </View>

        {/* ===========================
          CUSTOMER & ORDER DETAILS
        =========================== */}

        <View style={styles.detailsWrapper}>

          <View style={styles.customerCard}>

            <Text style={styles.sectionTitle}>
              Customer Details
            </Text>

            <Text style={styles.label}>Name</Text>

            <Text style={styles.value}>
              {order?.user?.name}
            </Text>

            <Text style={styles.label}>
              Email
            </Text>

            <Text style={styles.value}>
              {order?.user?.email}
            </Text>

            <Text style={styles.label}>
              Shipping Address
            </Text>

            <Text style={styles.value}>
              {order?.shippingAddress}
            </Text>

          </View>

          <View style={styles.orderCard}>

            <Text style={styles.sectionTitle}>
              Order Summary
            </Text>

            <Text style={styles.label}>
              Order ID
            </Text>

            <Text style={styles.value}>
              {order?._id}
            </Text>

            <Text style={styles.label}>
              Order Date
            </Text>

            <Text style={styles.value}>
              {new Date(order?.createdAt)
                .toLocaleDateString()}
            </Text>

            <Text style={styles.label}>
              Payment Method
            </Text>

            <Text style={styles.value}>
              {order?.paymentMethod || "Cash on Delivery"}
            </Text>

            <Text style={styles.label}>
              Payment Status
            </Text>

            <Text style={styles.value}>
              {order?.paymentStatus}
            </Text>

            <Text style={styles.label}>
              Order Status
            </Text>

            <Text style={styles.value}>
              {order?.orderStatus}
            </Text>

          </View>

        </View>

        {/* ===========================
            PRODUCTS TABLE
        =========================== */}

        <View style={styles.table}>

          <View style={styles.tableHeader}>

            <Text style={[styles.headerCell, styles.imageCol]}>
              Image
            </Text>

            <Text style={[styles.headerCell, styles.productCol]}>
              Product
            </Text>

            <Text style={[styles.headerCell, styles.categoryCol]}>
              Category
            </Text>

            <Text style={[styles.headerCell, styles.qtyCol]}>
              Qty
            </Text>

            <Text style={[styles.headerCell, styles.priceCol]}>
              Unit Price
            </Text>

            <Text style={[styles.headerCell, styles.totalCol]}>
              Total
            </Text>

          </View>

          {order?.orderItems?.map((item) => (
            <View
              key={item.product?._id || item._id}
              style={styles.row}
            >
              <View style={styles.imageCol}>
                {item.product?.image ? (
                    <Image
                         src={item.product.image}
                         style={styles.productImage}
                    />
                 ) : (
                    <Text>No Image</Text>
                )}
              </View>

              <View style={styles.productCol}>
                <Text style={styles.productName}>
                  {item.product?.name}
                </Text>
                    <Text style={styles.value}>
                  {item.product?.category || "General"}
                </Text>
              </View>

              <View style={styles.categoryCol}>
                <Text style={styles.categoryText}>
                  {item.product?.category || "General"}
                </Text>
              </View>

              <View style={styles.qtyCol}>
                <Text style={styles.qtyText}>
                  {item.quantity}
                </Text>
              </View>

              <View style={styles.priceCol}>
                <Text style={styles.priceText}>
                  ₹{Number(item.product?.price || 0).toFixed(2)}
                </Text>
              </View>

              <View style={styles.totalCol}>
                <Text style={styles.totalText}>
                  ₹{((item.product?.price || 0) * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* ===========================
              PAYMENT SUMMARY
        =========================== */}

        <View
          style={{
            marginTop: 25,
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: "42%",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 6,
              padding: 14,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text>Subtotal</Text>

              <Text>
                ₹{subtotal.toFixed(2)}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text>Shipping</Text>

              <Text>
                ₹{shipping.toFixed(2)}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Text>Tax</Text>

              <Text>
                ₹{tax.toFixed(2)}
              </Text>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D1D5DB",
                paddingTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Grand Total
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#2563EB",
                }}
              >
                ₹{grandTotal.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* ===========================
                THANK YOU
        =========================== */}

        <View
          style={{
            marginTop: 35,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            Thank You for Shopping with ShopSphere!
          </Text>

          <Text
            style={{
              marginTop: 6,
              fontSize: 10,
              color: "#6B7280",
              textAlign: "center",
            }}
          >
            We truly appreciate your purchase.
            Your trust motivates us to deliver the
            best shopping experience every time.
          </Text>
        </View>

        {/* ===========================
                  FOOTER
        =========================== */}

        <View
          style={{
            marginTop: 45,
            borderTopWidth: 1,
            borderColor: "#E5E7EB",
            paddingTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                src={CompanyLogo}
                style={{
                  width: 32,
                  height: 32,
                  marginRight: 8,
                }}
              />

              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              >
                ShopSphere
              </Text>
            </View>

            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                }}
              >
                support@shopsphere.com
              </Text>

              <Text
                style={{
                  fontSize: 9,
                }}
              >
                +91 98765 43210
              </Text>

              <Text
                style={{
                  fontSize: 9,
                }}
              >
                www.shopsphere.com
              </Text>
            </View>
          </View>

          <Text
            style={{
              marginTop: 15,
              textAlign: "center",
              fontSize: 8,
              color: "#6B7280",
            }}
          >
            © {new Date().getFullYear()} ShopSphere.
            All Rights Reserved.
          </Text>

          <Text
            style={{
              marginTop: 5,
              textAlign: "center",
              fontSize: 8,
              color: "#9CA3AF",
            }}
          >
            This invoice is electronically generated
            and does not require a physical signature.
          </Text>
        </View>

      </Page>
    </Document>
  );
};

export default InvoiceDocument;