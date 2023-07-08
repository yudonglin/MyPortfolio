<template>
  <div
      v-for="skills in skillsContent"
      :key="skills.id"
      class="col-6 col-md-3 mb-3 mb-sm-5"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        {id: 1, skillClass: "p98", skillPercent: "98", skillName: "Python"},
        {id: 2, skillClass: "p90", skillPercent: "90", skillName: "Java"},
        {id: 3, skillClass: "p80", skillPercent: "83", skillName: "C#"},
        {id: 4, skillClass: "p78", skillPercent: "78", skillName: "TypeScript"},
        {id: 5, skillClass: "p76", skillPercent: "73", skillName: "Bootstrap"},
        {id: 6, skillClass: "p83", skillPercent: "80", skillName: "Angular"},
        {id: 7, skillClass: "p78", skillPercent: "74", skillName: "Django"},
        {id: 8, skillClass: "p84", skillPercent: "76", skillName: ".NET Core"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
