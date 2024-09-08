const startScript = async ({username,password,otpType}) => {
  const url = "http://127.0.0.1:8000/api/startscript?username=" + username + "&password=" + password + "&otp_type=" + otpType;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (response.status === 200) {
      // Show success message (you can use a library like `react-toastify` or any other method)
      alert(data.message); // Replace with your preferred method to display messages
    } else {
      // Show error message
      alert(data.error); // Replace with your preferred method to display messages
    }
  } catch (error) {
    // Handle error
    alert(error.message); // Replace with your preferred method to display messages
  }
};

const stopScript = async () => {
  const url = "http://127.0.0.1:8000/api/stop_script";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 201) {
      // Show success message (you can use a library like `react-toastify` or any other method)
      alert(data.message); // Replace with your preferred method to display messages
    } else {
      // Show error message
      alert(data.error); // Replace with your preferred method to display messages
    }
  } catch (error) {
    // Handle error
    alert(error.message); // Replace with your preferred method to display messages
  }
};

export { startScript, stopScript };
