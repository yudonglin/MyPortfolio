<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
          class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        {id: 1, meta: "first name", metaInfo: "Yudong"},
        {id: 2, meta: "last name", metaInfo: "Lin"},
        {id: 3, meta: "Age", metaInfo: "23 Years"},
        {id: 4, meta: "Email", metaInfo: "yudonglin@gmail.com"},
        {id: 5, meta: "Discord", metaInfo: "anyleftovers"},
        {id: 6, meta: "languages", metaInfo: "English, Chinese"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
