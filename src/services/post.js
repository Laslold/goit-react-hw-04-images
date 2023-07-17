import axios from "axios";
const instance = axios.create({
  baseURL: "https://pixabay.com/api/?key=33320423-fc6a84bdab9b582d6d8de3308",
});
export const getPosts = async (
  page = 1,
  per_page = 12,
  q = "dog",
  image_type = "photo"
) => {
  const { data } = await instance({
    params: {
      q,
      image_type,
      page,
      per_page,
    },
  });
  return data;
};

export const searchPosts = async (
  q = "dog",
  page = 1,
  image_type = "photo"
) => {
  const { data } = await instance({
    params: {
      q,
      page,
      image_type,
    },
  });
  return data;
};
