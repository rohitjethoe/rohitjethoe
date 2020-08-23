<template>
  <div class="experience section" id="experience">
    <div class="section-title">
      Work Experiences
    </div>
    <div class="job">
      <img src="@/assets/government.png" alt="Government">
      <div class="job-details">
        <div class="job-title">
          Open Source Contribution - COVID-19 Notification App Website
        </div>
        <div class="job-company">
          Ministry of Health, Welfare and Sports.
        </div>
        <div class="job-description">
          I’ve contributed to the Open Source COVID-19 Notification App by working on the front end finding and fixing issues.
        </div>
        <div class="job-tags">
          <div class="job-tag">open source</div>
          <div class="job-tag">front end</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Experience'
}
</script>

<style>
.section {
  margin-top: 10%;
}

.section-title {
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #797d7f;
  margin-left: 7.5%;
}

@media only screen and (min-width: 395px) {
  .section-title {
    margin-left: 12.5%;
  }
}

@media only screen and (min-width: 800px) {
  .section-title {
    margin-left: 10%;
  }
}
</style>