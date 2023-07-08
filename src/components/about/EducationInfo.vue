<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
          education.year
        }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "2021-2023",
          degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND SYSTEMS & MINOR IN MATHEMATICS",
          institute: "UNIVERSITY OF WASHINGTON TACOMA",
          details: `Graduate with a GPA of 3.92 and Cum Laude, Dean's List: (Winter 2022 - Spring 2023)`,
        },
        {
          id: 2,
          year: "2019-2021",
          degree: "Associate of Arts and Sciences",
          institute: "BELLEVUE COLLEGE",
          details: `Graduate with Distinction`,
        },
        {
          id: 3,
          year: "2019",
          degree: "FULL STACK WEB DEVELOPMENT",
          institute: "CODING DOJO",
          details: `Graduate with Triple Black Belts in all three stacks - Django, MEAN and .NET.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
