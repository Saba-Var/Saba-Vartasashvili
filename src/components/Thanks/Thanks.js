import { useEffect, useState } from "react";

import styles from "./Thanks.module.css";

import { Navigate } from "react-router-dom";

const Thanks = () => {
  const [redirectNow, setRedirectNow] = useState(false);
  useEffect(() => {
    let time = setTimeout(() => {
      setRedirectNow(true);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  if (redirectNow) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.background}>
      <h2 className={styles.thanks}>Thanks for Joining 😊</h2>
    </div>
  );
};
export default Thanks;
