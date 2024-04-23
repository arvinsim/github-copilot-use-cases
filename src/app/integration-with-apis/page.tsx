import React, { useEffect, useState } from "react";
async function IntegrationWithApisPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: Integration with APIs - Can I generate a function to get the data from the 'api/hello-world' endpoint?
    // Use this prompt 'get data from api/hello-world'
    const fetchData = async () => {};
    fetchData();
  }, []);

  return <div>Integration with APIs</div>;
}

export default IntegrationWithApisPage;
