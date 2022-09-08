import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ size, color }) {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading" style={{ textAlign: "center" }}>
      <ClipLoader
        color={color ? color : "#1e87f0"}
        loading={loading}
        size={size ? size : 150}
      />
    </div>
  );
}

export default Loader;
