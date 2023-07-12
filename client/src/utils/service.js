const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}

//https://api.edamam.com/api/recipes/v2?type=public&app_id=0f0f5cd0&app_key=d9655a2a2a1075092e3f689d330f20b3

export const fetchData = async (query) => {
    const { app_id, app_key } = queryStrings
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
    try {
        const response = await fetch(url)
        const responseData = await response.json();
        return { data: responseData, url: url };
    } catch(error) {
        console.log("Got an Error", error)
    }
}

// https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_b79327d05b8e5b838ad6cfd9576b30b6&app_id=0f0f5cd0&app_key=d9655a2a2a1075092e3f689d330f20b3

export const searchData = async (uri) => {
    const { app_id, app_key } = queryStrings;
    const query = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=${app_id}&app_key=${app_key}
    `
    try {
        const response = await fetch(query)
        const responseData = await response.json();
        return { data: responseData, url: query };
    } catch(error) {
        console.log("Got an Error", error)
    }
}

export const fetchDataFromLink = async (link) => {
    try {
      const response = await fetch(link);
      const responseData = await response.json();
      return { data: responseData, url: link };
    } catch (error) {
      throw new Error("Error fetching data from link");
    }
};

// login and register user service
export const baseUrl = 'http://localhost:5000/api';

export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    })

    const data = await response.json();

    if (!response.ok) {
        let message;
        if(data?.message) {
            message = data.message
        } else {
            message = data;
        }
        return { error: true, message }
    }

    return data;
}

export const getRequest = async (url) => {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        let message = "An error occured..."

        if (data.message) {
            message = data.message;
        }
        return {error: true, message}
    }
    return data;
}
