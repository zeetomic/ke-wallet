import axios from 'axios';
import Cookie from 'js-cookie';

export default async function asyncData({req, redirect}) {
  let token;
  if (process.server) {
    const jwtCookie = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith("jwt="));
    if (!jwtCookie) {
      return;
    }
    token = jwtCookie.split("=")[1];
  }
  if (process.client) {
    token = Cookie.get("jwt");
  }
  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  try {
    let user_profile = await axios.get(process.env.apiUrl + "/userprofile", config)
    let history = await axios.get(process.env.KEUrl + "/trx-history", config)
    return {
      user_profile: user_profile.data,
      history: history.data
    }
  }
  catch(e) {
    redirect('/login');
  }
}