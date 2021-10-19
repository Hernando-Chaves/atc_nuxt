<template>
  <div>
    <div
      :style="{ backgroundImage: `url(${img.sourceUrl})` }"
      class="bg-cover  h-96 flex items-center justify-center"
    >
      <div class="post-info">
        <h1 class="text-white text-center text-4xl">{{ post.title }}</h1>
      </div>
    </div>
    <div class="container grid grid-cols-4 py-12 ">
      <div></div>
      <p class=" text-justify col-span-2" v-html="post.content"></p>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, route }) {
    const client = app.apolloProvider.defaultClient;
    const id = route.params.id;
    const query = {
      query: require("~/queries/posts/single_post.gql"),
      variables: { id }
    };
    let post = [];
    let img = [];
    await client
      .query(query)
      .then(resp => {
        post = resp.data.postBy;
        img = resp.data.postBy.featuredImage.node;
      })
      .catch(console.log);

    return { post, img };
  }
};
</script>

<style lang="scss" scoped></style>
