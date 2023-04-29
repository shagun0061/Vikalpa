import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import {
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  pdf,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

const AdmitCardDownload = () => {
  const [data, setData] = useState([]);
  const [source, setSource] = useState("");
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleDownload = async () => {
    // Generate the PDF blob using React-PDF
    const pdfBlob = await pdf(<MyDocument />).toBlob();

    // Create a URL for the blob and trigger a download
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my_document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const loadPdf = async () => {
    const x = await pdf(<MyDocument />).toBlob();
    setPdfBlob(x);
  };
  function getdata() {
    axios.get("https://viklpa-backend.onrender.com/userdetails").then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    getdata();
    loadPdf();
  }, []);

  return (
    <div className="maindiv">
      {data &&
        data?.map((ele, index) => {
          return (
            <div key={ele._id} className="cartdiv">
              <div className="cartpic">
                <h2>name: {ele.name}</h2>
                <h4>phone no: {ele.phone}</h4>
                <h4>class: {ele.class}</h4>
                <h4>roll no: {ele.roll_no}</h4>
                <h4>school: {ele.school}</h4>
                <h4>address: {ele.address}</h4>
              </div>

              <div className="download">
                {/* <button onClick={handleDownload}>Download PDF</button> */}
                {pdfBlob && (
                  <PDFDownloadLink
                    document={<MyDocument ele={ele} />}
                    fileName="my_document.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        "Generating PDF..."
                      ) : (
                        <button className="btn">download</button>
                      )
                    }
                  </PDFDownloadLink>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

const styles = {
  page: {
    padding: 20,
  },
  backgroundImage: {
    width: "100%",
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  content: {
    marginLeft: 40,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    width: 100,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
  },
};

function MyDocument({ ele }) {
  let name = ele?.name;
  let phone = ele?.phone;
  let className = ele?.class;
  let rollNo = ele?.roll_no;
  let school = ele?.school;
  let address = ele?.address;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="admincart.PNG" style={styles.backgroundImage} />

          <Text style={styles.title}>Admit Card</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{phone}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Class:</Text>
            <Text style={styles.value}>{className}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Roll No:</Text>
            <Text style={styles.value}>{rollNo}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>School:</Text>
            <Text style={styles.value}>{school}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{address}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default AdmitCardDownload;
