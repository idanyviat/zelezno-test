export default {
  getPosts({ commit }) {
    const fetchPost = async () => {
      const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await responsePosts.json();
      return result;
    };

    fetchPost().then((result) => {
      commit('setPosts', result);
    });
  },
};
