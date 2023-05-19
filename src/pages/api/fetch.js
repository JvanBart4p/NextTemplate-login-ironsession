async function GetData(type) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    redirect: "manual",
    referrerPolicy: "no-referrer",
  })
    .then(async (response) => {
      const json = await response.json();
      json.status = response.status;
      return json;
    })
    .catch((error) => {
      console.log(error);
      return {
        message: "Je verzoek kon niet worden verwerkt.",
        status: 500,
      };
    });
  return result;
}

async function PostData(type, data = {}) {

  const csrf = await getCSRF();
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-CSRF-Token": csrf,
    },
    credentials: "include",
    redirect: "manual",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      const json = await response.json();
      json.status = response.status;
      return json;
    })
    .catch(() => {
      return {
        message:
          "Je verzoek kon niet worden verwerkt. Probeer het later opnieuw.",
        status: 500,
      };
    });
  return result;
}

async function getCSRF() {
  const result = await GetData("csrf");
  if (result && result.status === 200) {
    return result.data.csrfToken;
  } else {
    return false;
  }
}

export { PostData, GetData };
