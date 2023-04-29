class Requests {
  userToken() {
    const token = localStorage.getItem("jwtToken");
    return token;
  }
  getReq = async (url) => {
    const token = this.userToken();
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  };

  async postSignup(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
      },
      body: data,
    });

    return res.json();
  }
  postLogin(url, data) {
    // url
    const loginUrl = url;
    // Define the fetch options for the login request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = fetch(loginUrl, options)
      .then((response) => {
        // Check if the response status is OK
        if (response.ok) {
          return response.json();
        } else {
          return {
            message: "invalid credentials",
          };
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error during login request:", error);
      });
    return res;
  }

  postNewTrade = (url, data) => {
    const token = this.userToken();
    // Define the fetch options for the post request
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    };

    const res = fetch(url, options)
      .then((response) => {
        // Check if the response status is OK
        if (response.ok) {
          return response.json();
        } else {
          return {
            message: "something went wrong",
          };
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error during post request:", error);
      });
    return res;
  }
}

export default Requests;
