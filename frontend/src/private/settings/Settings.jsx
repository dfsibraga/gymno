import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getSettings } from "../../services/settingsService";
import { doLogout } from "../../services/authService";
import Menu from "../../components/menu/Menu";

export default function Settings() {
  const history = useHistory();

  const [settings, setSettings] = useState({ email: "" });
  const [error, setError] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");

    getSettings(token)
      .then((response) => {
        setSettings(response);
      })
      .catch((err) => {
        if (err.response.status === 401) return history.push("/");
        setError(err.response ? err.response.data : err.message);
      });
  }, []);

  function handleLogout(e) {
    const token = localStorage.getItem("token");
    doLogout(token)
      .then((response) => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((err) => {
        setError(err.response ? err.response.data : err.message);
      });
  }

  return (
    <>
      <Menu />
      <main>
        <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
          <div className="container">
            <p className="text-center">{settings.email}</p>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </section>
      </main>
    </>
  );
}
