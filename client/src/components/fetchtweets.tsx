export interface ReturnbObject {
  data: string;
  responseStatus: number;
}
export const FetchTweets = async (handle) => {
  if (handle === "randomizesearch") {
    console.log("getting random feed");
    const fetchResponse = await initFetch(
      `http://localhost:3001/api/randomizesearch`
    );
    return fetchResponse;
  }
  const fetchResponse = await initFetch(
    `http://localhost:3001/api/users/${handle}`
  );
  return fetchResponse;
};

const initFetch = async (url: string) => {
  const fetchResponse = await fetch(url).then((response) => {
    if (response.body) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");
      return reader.read().then(function (result) {
        return {
          data: decoder.decode(result.value),
          responseStatus: response.status,
        } as ReturnbObject;
      });
    }
  });
  return fetchResponse;
};
