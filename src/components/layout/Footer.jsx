import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(2000);
  const currentYear = new Date();

  useEffect(() => {
    setYear(currentYear.getFullYear());
  }, []);

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <h1> Copyright &copy; {year} All rights reserved</h1>
    </footer>
  );
}

export default Footer;
