import Footer from "layouts/Footer";
import React from "react";
import CypherAudius from "./CypherAudius";
import CypherBot from "./CypherBot";
import CypherVision from "./CypherVision";

export default function Products() {
  return (
    <div>
      <CypherAudius />
      <CypherBot />
      <CypherVision />

      <Footer />
    </div>
  );
}
